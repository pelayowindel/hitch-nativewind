import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function driverregistration() {
    const [gender, setGender] = useState("male");
    const router = useRouter();
    


    const [fontsLoaded] = useFonts({
        "PlusJakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "PlusJakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "PlusJakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <View className="flex-1 px-4 pt-6">

                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
                        style={{ width: 35 }} />
                    <Pressable className="w-10 h-10 bg-white rounded border border-black shadow-lg">
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-black text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        REGISTRATION
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


                <View className="flex-row gap-3 mb-3 mt-3">
                    {/* First Name */}
                    <View className="flex-1 relative">
                        {/* Shadow */}
                        <View className="absolute bg-black rounded-lg"
                            style={{ top: 23, left: 4, width: "100%", height: "73%" }} />
                        <Text className="mb-1 font-semibold">FIRST NAME</Text>
                        <TextInput
                            className="bg-white border border-black rounded px-4 py-4"
                            placeholder="Juan"
                        />
                    </View>
                    {/* Last Name */}
                    <View className="flex-1 relative">
                        {/* Shadow */}
                        <View className="absolute bg-black rounded-lg"
                            style={{ top: 23, left: 4, width: "100%", height: "73%" }} />
                        <Text className="mb-1 font-semibold">LAST NAME</Text>
                        <TextInput
                            className="bg-white border border-black rounded px-4 py-4"
                            placeholder="Dela Cruz"
                        />
                    </View>
                </View>


                {/* Address */}
                <View className="mb-3 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 20, left: 4, width: "100%", height: "75%" }} />
                    <Text className="mb-1 font-semibold">ADDRESS</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="Random Place – Bogo City, Cebu"
                    />
                </View>

                {/* Date of Birth */}
                <View className="mb-1 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "57%" }} />
                    <Text className="mb-1 font-semibold">DATE OF BIRTH</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="01/27/2000"
                    />
                    <Text className="text-xs text-gray-500 mt-1">
                        You must be at least 18 years old to drive
                    </Text>
                </View>

                {/* Mobile Number */}
                <View className="mb-3 mt-3">
                    <Text className="mb-1 font-semibold">Mobile Number</Text>
                    <View className="flex-row">
                        <View className="mr-2">
                            <View className="absolute bg-black rounded-lg"
                                style={{ top: 4, left: 4, width: "100%", height: "100%" }} />
                            <TextInput
                                className="w-16 bg-white border border-black rounded px-2 py-4 text-center"
                                placeholder="+63"
                            />
                        </View>
                        <View className="flex-1">
                            <View className="absolute bg-black rounded-lg"
                                style={{ top: 4, left: 4, width: "100%", height: "100%" }} />
                            <TextInput
                                className="bg-white border border-black rounded px-4 py-4"
                                placeholder="123 456 7834"
                            />
                        </View>
                    </View>
                </View>

                {/* Email */}
                <View className="mb-4 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "73%" }} />
                    <Text className="mb-1 font-semibold">EMAIL ADDRESS</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="juan06@gmail.com"
                    />
                </View>

                {/* Gender */}
                <View className="mb-6 mt-3">
                    <Text className="mb-2 font-semibold">GENDER</Text>
                    <View className="flex-row gap-3">
                        {/* Male Button */}
                        <View className="flex-1 shadow-md">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                            />
                            <Pressable
                                onPress={() => setGender("male")}
                                className={`border rounded py-3 items-center ${gender === "male" ? "bg-green-600" : "bg-white border-black"
                                    }`}
                            >
                                <Text
                                    className={`font-bold ${gender === "male" ? "text-white" : "text-black"
                                        }`}
                                >
                                    MALE
                                </Text>
                            </Pressable>
                        </View>

                        {/* Female Button */}
                        <View className="flex-1 shadow-md">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                            />
                            <Pressable
                                onPress={() => setGender("female")}
                                className={`border rounded py-3 items-center ${gender === "female" ? "bg-green-600" : "bg-white border-black"
                                    }`}
                            >
                                <Text
                                    className={`font-bold ${gender === "female" ? "text-white" : "text-black"
                                        }`}
                                >
                                    FEMALE
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View className="relative mt-auto">
                    {/* Absolute background behind the button */}
                    <View
                        className="absolute rounded-lg"
                        style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                    />
                    {/* Orange button */}
                    <Pressable className="bg-orange-500 py-4 rounded items-center"
                    onPress={() => router.push("./vehicleinfo")}>
                        <Text className="font-bold text-black">
                            CONTINUE TO VEHICLE INFO
                        </Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    );
}