import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";
import useAppFonts from "../../hooks/useAppFonts";
import { supabase } from "../../lib/supabase";
import { useSupabase } from "../../contexts/SupabaseContext"; 

export default function DriverPersonalInfoForm() {
    const router = useRouter();
    const { user } = useSupabase();

    const [gender, setGender] = useState("male");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const fontsLoaded = useAppFonts();

    if (!fontsLoaded) {
        return null;
    }

    const handleNext = async () => {
        if (!firstName || !lastName || !email) {
            alert("Please fill all required fields");
            return;
        }

        if (!user) {
            alert("You must be logged in to register as a driver");
            return;
        }

        const { data, error } = await supabase
            .from("drivers")
            .insert([
                {
                    user_id: user.id,
                    first_name: firstName,
                    last_name: lastName,
                    address: address,
                    birth_date: birthDate,
                    phone: phone,
                    email: email,
                    gender: gender,
                },
            ])
            .select()
            .single();

        if (error) {
            console.log("Error:", error);
            alert("Error saving data");
            return;
        }

        console.log("Saved:", data);

        router.push({
            pathname: "./vehicleinfo",
            params: { driver_id: data.id },
        });
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16, paddingTop: 24 }}
                showsVerticalScrollIndicator={false}
            >

                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
                        style={{ width: 35 }} />
                    <Pressable
                        className="w-10 h-10 bg-white rounded border border-black shadow-lg"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.replace('/LogIn')}>
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-black text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        PERSONAL INFORMATION
                    </Text>
                </View>

                {/* Title */}
                <Text className="text-xl font-bold mb-1">PERSONAL INFO</Text>
                <Text className="text-gray-500 mb-4">
                    Let's start with your basic details
                </Text>

                {/* Name */}
                <View className="flex-row gap-3 mb-3 mt-3">
                    <View className="flex-1">
                        <Text className="mb-1 font-semibold">FIRST NAME</Text>
                        <TextInput
                            value={firstName}
                            onChangeText={setFirstName}
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="Juan"
                        />
                    </View>

                    <View className="flex-1">
                        <Text className="mb-1 font-semibold">LAST NAME</Text>
                        <TextInput
                            value={lastName}
                            onChangeText={setLastName}
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="Dela Cruz"
                        />
                    </View>
                </View>

                {/* Address */}
                <View className="mb-3 mt-3">
                    <Text className="mb-1 font-semibold">ADDRESS</Text>
                    <TextInput
                        value={address}
                        onChangeText={setAddress}
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="Random Place – Bogo City, Cebu"
                    />
                </View>

                {/* DOB */}
                <View className="mb-1 mt-3">
                    <Text className="mb-1 font-semibold">DATE OF BIRTH</Text>
                    <TextInput
                        value={birthDate}
                        onChangeText={setBirthDate}
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="01/27/2000"
                    />
                </View>

                {/* Mobile */}
                <View className="mb-3 mt-3">
                    <Text className="mb-1 font-semibold">Mobile Number</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="+63 123 456 7834"
                    />
                </View>

                {/* Email */}
                <View className="mb-4 mt-3">
                    <Text className="mb-1 font-semibold">EMAIL ADDRESS</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="juan06@gmail.com"
                    />
                </View>

                {/* Gender */}
                <View className="mb-6 mt-3">
                    <Text className="mb-2 font-semibold">GENDER</Text>
                    <View className="flex-row gap-3">

                        <Pressable
                            onPress={() => setGender("male")}
                            className={`flex-1 border rounded py-3 items-center ${
                                gender === "male" ? "bg-green-600" : "bg-white border-black"
                            }`}
                            style={{ borderWidth: 2 }}
                        >
                            <Text className={`font-bold ${
                                gender === "male" ? "text-white" : "text-black"
                            }`}>
                                MALE
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setGender("female")}
                            className={`flex-1 border rounded py-3 items-center ${
                                gender === "female" ? "bg-green-600" : "bg-white border-black"
                            }`}
                            style={{ borderWidth: 2 }}
                        >
                            <Text className={`font-bold ${
                                gender === "female" ? "text-white" : "text-black"
                            }`}>
                                FEMALE
                            </Text>
                        </Pressable>

                    </View>
                </View>

                {/* Button */}
                <View className="relative mt-6 mb-6">
                    <Pressable
                        className="bg-orange-500 py-4 rounded items-center border border-black"
                        style={{ borderWidth: 2 }}
                        onPress={handleNext} 
                    >
                        <Text className="font-bold text-black">
                            CONTINUE TO VEHICLE INFO
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}