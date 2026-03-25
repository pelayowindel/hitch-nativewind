import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";
import useAppFonts from "../../hooks/useAppFonts";

export default function DriverPersonalInfoForm() {
    const [gender, setGender] = useState("male");
    const router = useRouter();
    
    const fontsLoaded = useAppFonts();

    if (!fontsLoaded) {
        return null;
    }

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
                        onPress={() => router.back()}
                    >
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-black text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        PERSONAL INFORMATION
                    </Text>
                </View>

                {/* Steps */}
                <View className="flex-row items-center mb-4">
                    <View className="h-1 flex-1 bg-blue-600 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 rounded-full" />
                </View>

                <View className="flex-row justify-between mb-4">
                    <Text className="font-bold text-blue-600">STEP 1</Text>
                    <Text className="text-gray-400">PERSONAL INFO</Text>
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
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="Juan"
                        />
                    </View>

                    <View className="flex-1">
                        <Text className="mb-1 font-semibold">LAST NAME</Text>
                        <TextInput
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
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="Random Place – Bogo City, Cebu"
                    />
                </View>

                {/* DOB */}
                <View className="mb-1 mt-3">
                    <Text className="mb-1 font-semibold">DATE OF BIRTH</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="01/27/2000"
                    />
                    <Text className="text-xs text-gray-500 mt-1">
                        You must be at least 18 years old to drive
                    </Text>
                </View>

                {/* Mobile */}
                <View className="mb-3 mt-3">
                    <Text className="mb-1 font-semibold">Mobile Number</Text>
                    <View className="flex-row">
                        <View className="flex-1">
                            <TextInput
                                className="bg-white border border-black rounded px-4 py-4"
                                style={{ borderWidth: 2 }}
                                placeholder="+63 123 456 7834"
                            />
                        </View>
                    </View>
                </View>

                {/* Email */}
                <View className="mb-4 mt-3">
                    <Text className="mb-1 font-semibold">EMAIL ADDRESS</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        style={{ borderWidth: 2 }}
                        placeholder="juan06@gmail.com"
                    />
                </View>

                {/* Gender */}
                <View className="mb-6 mt-3">
                    <Text className="mb-2 font-semibold">GENDER</Text>
                    <View className="flex-row gap-3">

                        <View className="flex-1">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                            />
                            <Pressable
                                onPress={() => setGender("male")}
                                className={`border rounded py-3 items-center ${
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
                        </View>

                        <View className="flex-1">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                            />
                            <Pressable
                                onPress={() => setGender("female")}
                                className={`border rounded py-3 items-center ${
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
                </View>

                {/* Button */}
                <View className="relative mt-6 mb-6">
                    <View
                        className="absolute rounded-lg"
                        style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                    />
                    <Pressable
                        className="bg-orange-500 py-4 rounded items-center border border-black"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.push("./vehicleinfo")}
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