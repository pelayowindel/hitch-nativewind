import { View, Text, Pressable, ScrollView, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import FloatingLoading from "../../constants/floatingloading";


export default function ReviewInfo() {
    const [fontsLoaded] = useFonts({
        "PlusJakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "PlusJakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "PlusJakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    });
    const [loading, setLoading] = useState<boolean>(false);


    const router = useRouter();
    if (!fontsLoaded) return null;


    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <ScrollView className="flex-1 px-4 pt-6">

                {/* HEADER */}
                <View className="flex-row items-center mb-6 relative">
                    <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
                        style={{ width: 35 }} />
                    <Pressable className="w-10 h-10 bg-white rounded border border-black shadow-lg"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.back()}>
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>

                    <Text
                        className="flex-1 text-center text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        REVIEW INFO
                    </Text>
                </View>

                {/* STEPS */}
                <View className="flex-row items-center mb-2">
                    <View className="flex-1 h-1 bg-green-600 rounded-full" />
                    <View className="flex-1 h-1 bg-green-600 mx-2 rounded-full" />
                    <View className="flex-1 h-1 bg-green-600 mx-2 rounded-full" />
                    <View className="flex-1 h-1 bg-blue-600 rounded-full" />
                </View>

                <View className="flex-row justify-between mb-6">
                    <Text className="font-bold text-green-600">STEP 4</Text>
                    <Text className="text-blue-600 font-bold">REVIEW DOCUMENTS</Text>
                </View>

                {/* REVIEW INFO */}
                <Text className="text-lg mb-1" style={{ fontFamily: "PlusJakarta-Bold" }}>
                    REVIEW INFO
                </Text>
                <Text className="text-gray-600 mb-4">
                    Please review all the documents before submitting.
                </Text>

                {/* INFO CARD */}
                <View className="relative mb-6">
                    {/* SHADOW */}
                    <View
                        className="absolute rounded-lg"
                        style={{
                            top: 6,
                            left: 6,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000",
                            zIndex: 0,
                        }}
                    />

                    {/* MAIN CARD */}
                    <View
                        className="rounded-lg overflow-hidden"
                        style={{
                            backgroundColor: "#F6EBDD",
                            borderWidth: 2,
                            borderColor: "#000",
                            zIndex: 1,
                        }}
                    >
                        {[
                            [["Name", "Juan"], ["Last Name", "Dela Cruz"], ["Gender", "M"]],
                            [["Date of Birth", "02/04/1999"], ["Contact Number", "09123456789"]],
                            [["Email", "juan06@email.com"], ["Address", "Random Place - Bogo City, Cebu"]],
                            [["Motorcycle Type", "Standard"], ["Brand", "Kawasaki"], ["Model", "K155"]],
                            [["Plate Number", "G4S1A"], ["Year Model", "2008"]],
                            [["Vehicle Color", "Green"], ["License Number", "064-152-234"]],
                        ].map((row, i) => (
                            <View key={i} className="flex-row">
                                {row.map((cell, j) => (
                                    <View
                                        key={j}
                                        className="flex-1 p-4"
                                        style={{
                                            backgroundColor: j === 0 ? "#F6EBDD" : "transparent",
                                        }}
                                    >
                                        <Text className="font-bold">{cell[0]}</Text>
                                        <Text>{cell[1]}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>

                {/* DRIVER LICENSE */}
                <Text className="font-bold mb-3" style={{ fontFamily: "PlusJakarta-Bold" }}>
                    DRIVER'S LICENSE
                </Text>

                <View className="border-2 border-black rounded-lg p-4 bg-white mb-6">
                    <View className="flex-row gap-3">
                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold mb-1">FRONT SIDE</Text>
                            <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                        </View>

                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold mb-1">BACK SIDE</Text>
                            <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                        </View>
                    </View>
                </View>

                {/* VEHICLE REGISTRATION */}
                <Text className="font-bold mb-3" style={{ fontFamily: "PlusJakarta-Bold" }}>
                    VEHICLE REGISTRATION (OR & CR)
                </Text>
                <View className="border-2 border-black rounded-lg p-4 bg-white mb-6">
                    <View className="flex-row gap-3">
                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold">OR</Text>
                            <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                        </View>
                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold">CR</Text>
                            <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                        </View>
                    </View>
                </View>

                {/* NBI CLEARANCE */}
                <Text className="font-bold mb-3" style={{ fontFamily: "PlusJakarta-Bold" }}>
                    NBI CLEARANCE
                </Text>
                <View className="border-2 border-black rounded-lg p-4 bg-white mb-6">
                    <View className="">
                        <View className="h-40 border border-dashed border-black rounded-lg items-center justify-center">
                            <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                            <Text className="text-gray-600 mt-2">PNG, JPG, PDF (max 5mb)</Text>
                        </View>
                    </View>
                </View>

                {/* SUBMIT BUTTON */}
                <View className="relative mb-12">
                    <View
                        className="absolute rounded-lg"
                        style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                    />
                    <Pressable
                        className="bg-orange-500 border-2 border-black rounded-lg py-4 items-center"
                        style={{ borderWidth: 2 }}
                        onPress={() => {
                            setLoading(true);

                            setTimeout(() => {
                                setLoading(false);
                                router.push("/LogIn");
                            }, 1500);
                        }}
                    >
                        <Text className="text-black font-bold text-lg">SUBMIT</Text>
                    </Pressable>
                </View>
            </ScrollView>
            
            <FloatingLoading visible={loading} label="SUBMITTING..." />
        </SafeAreaView>
    );
}