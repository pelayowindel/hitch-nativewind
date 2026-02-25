import { View, Text, TextInput, Pressable, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function reviewinfo() {
    const [fontsLoaded] = useFonts({
        "PlusJakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "PlusJakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "PlusJakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    const router = useRouter();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1 px-4 pt-6">
                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
                        style={{ width: 35 }} />
                    <Pressable 
                        className="w-10 h-10 bg-white rounded border border-black shadow-lg justify-center items-center"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.back()}
                    >
                        <Text className="text-2xl text-black font-bold">←</Text>
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-black text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        REVIEW INFO
                    </Text>
                </View>

                {/* Steps */}
                <View className="flex-row items-center mb-4">
                    <View className="h-1 flex-1 bg-green-600 rounded-full" />
                    <View className="h-1 flex-1 bg-green-600 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-green-600 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 rounded-full" />
                </View>

                <View className="flex-row justify-between mb-6">
                    <Text className="font-bold text-green-600">STEP 4</Text>
                    <Text className="text-gray-400">REVIEW DOCUMENTS</Text>
                </View>

                {/* REVIEW INFO Section */}
                <View className="mb-6">
                    <Text 
                        className="text-lg font-bold mb-4"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        REVIEW INFO
                    </Text>
                    <Text className="text-gray-600 mb-4">
                        Please review all the documents before submitting.
                    </Text>

                    {/* Personal Info Table */}
                    <View className="bg-white border border-black rounded-lg overflow-hidden mb-4"
                        style={{ borderWidth: 2 }}
                    >
                        {/* Name Row */}
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Name</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Last Name</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50">
                                <Text className="font-bold">Gender</Text>
                            </View>
                        </View>
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>John</Text>
                            </View>
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>Ooi</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>M</Text>
                            </View>
                        </View>

                        {/* Date of Birth and Contact Number */}
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Date of Birth</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50">
                                <Text className="font-bold">Contact Number</Text>
                            </View>
                        </View>
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>01/04/1999</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>09802456818</Text>
                            </View>
                        </View>

                        {/* Email */}
                        <View className="flex-row border-b border-black">
                            <View className="w-1/3 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Email</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>jondoe007@gmail.com</Text>
                            </View>
                        </View>

                        {/* Motorcycle Type, Brand, Model */}
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Motorcycle Type</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Brand</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50">
                                <Text className="font-bold">Model</Text>
                            </View>
                        </View>
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>Standard</Text>
                            </View>
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>Kukasaki</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>KK50</Text>
                            </View>
                        </View>

                        {/* Plate Number and Year Model */}
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Plate Number</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50">
                                <Text className="font-bold">Year Model</Text>
                            </View>
                        </View>
                        <View className="flex-row border-b border-black">
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>G6D1A</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>2000</Text>
                            </View>
                        </View>

                        {/* Vehicle Color and License Number */}
                        <View className="flex-row">
                            <View className="flex-1 p-3 bg-gray-50 border-r border-black">
                                <Text className="font-bold">Vehicle Color</Text>
                            </View>
                            <View className="flex-1 p-3 bg-gray-50">
                                <Text className="font-bold">License Number</Text>
                            </View>
                        </View>
                        <View className="flex-row">
                            <View className="flex-1 p-3 border-r border-black">
                                <Text>Green</Text>
                            </View>
                            <View className="flex-1 p-3">
                                <Text>064-1545-21985</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* DRIVER'S LICENSE Section */}
                <View className="mb-6">
                    <Text 
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        DRIVER'S LICENSE
                    </Text>
                    
                    <View className="bg-white border border-black rounded-lg p-4"
                        style={{ borderWidth: 2 }}
                    >
                        <Text className="font-bold text-lg mb-2">DRIVING LICENSE</Text>
                        
                        <View className="mb-2">
                            <Text className="font-bold">• TYPE: <Text className="font-normal">MOTORCYCLE</Text></Text>
                        </View>
                        <View className="mb-2">
                            <Text className="font-bold">• REG. NUMBER: <Text className="font-normal">123456789</Text></Text>
                        </View>
                        <View className="mb-2">
                            <Text className="font-bold">• EXIST DATE: <Text className="font-normal">2023</Text></Text>
                        </View>
                        <View className="mb-3">
                            <Text className="font-bold">• EXPIRY DATE: <Text className="font-normal">2028</Text></Text>
                        </View>
                        
                        <View>
                            <Text className="font-bold mb-2">• FRONT SIDE:</Text>
                            <View className="bg-gray-200 h-32 rounded-lg border border-black justify-center items-center">
                                <MaterialCommunityIcons name="image" size={40} color="#666" />
                                <Text className="text-gray-600 mt-2">[Image]</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* VEHICLE REGISTRATION Section */}
                <View className="mb-6">
                    <Text 
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        VEHICLE REGISTRATION (OR & CR)
                    </Text>
                    
                    <View className="bg-white border border-black rounded-lg p-4 flex-row"
                        style={{ borderWidth: 2 }}
                    >
                        <View className="flex-1 items-center border-r border-black">
                            <Text className="font-bold text-lg">OR</Text>
                        </View>
                        <View className="flex-1 items-center">
                            <Text className="font-bold text-lg">CR</Text>
                        </View>
                    </View>
                </View>

                {/* NB! CLEARANCE Section */}
                <View className="mb-8">
                    <Text 
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        NB! CLEARANCE
                    </Text>
                    
                    <View className="bg-white border border-black rounded-lg p-6 items-center"
                        style={{ borderWidth: 2 }}
                    >
                        <MaterialCommunityIcons name="cloud-upload" size={50} color="#666" />
                        <Text className="text-gray-600 mt-2 text-center">
                            PNG, JPG, PDF, (max 5mb)
                        </Text>
                    </View>
                </View>

                {/* Submit Button */}
                <View className="relative mb-10">
                    <View
                        className="absolute rounded-lg"
                        style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                    />
                    <Pressable 
                        className="bg-green-600 py-4 rounded items-center border border-black"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.push("./submitsuccess")}
                    >
                        <Text className="font-bold text-white text-lg">
                            SUBMIT
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}