import { View, Text, TextInput, Pressable, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState, useRef } from "react";
import { useRouter } from "expo-router";
import FloatingLoading from "../../constants/floatingloading";

export default function driverregistration() {
    const [gender, setGender] = useState("male");
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
   


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
                    <Pressable className="w-10 h-10 bg-white rounded border border-black shadow-lg"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.push("/LogIn")}>
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-black text-xl"
                        style={{ fontFamily: "PlusJakarta-Bold" }}
                    >
                        REGISTRATION
                    </Text>
                </View>

                {/* Account Credentials */}
                <View className="flex-1 mt-6">
                    <Text className="text-xl font-bold mb-1">ACCOUNT DETAILS</Text>
                    <Text className="text-gray-500 mb-4">
                        Create your login credentials
                    </Text>

                    {/* Email */}
                    <View className="mb-6">
                        <Text className="mb-1 font-semibold">EMAIL ADDRESS</Text>
                        <TextInput
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="juan06@gmail.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password */}
                    <View className="mb-6">
                        <Text className="mb-1 font-semibold">PASSWORD</Text>
                        <TextInput
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="Enter password"
                            secureTextEntry
                        />
                    </View>

                    {/* Confirm Password */}
                    <View className="mb-6">
                        <Text className="mb-1 font-semibold">CONFIRM PASSWORD</Text>
                        <TextInput
                            className="bg-white border border-black rounded px-4 py-4"
                            style={{ borderWidth: 2 }}
                            placeholder="Confirm password"
                            secureTextEntry
                        />
                    </View>
                    {/* Continue Button */}
                    <View className="relative mt-auto">
                        {/* Shadow */}
                        <View
                            className="absolute rounded-lg"
                            style={{
                                top: 5,
                                left: 4,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000",
                            }}
                        />

                        <Pressable
                            className="bg-orange-500 py-4 rounded items-center border border-black"
                            style={{ borderWidth: 2 }}
                            onPress={() => {
                                setLoading(true);

                                setTimeout(() => {
                                    setLoading(false);
                                    router.push("./driverregistration");
                                }, 1500);
                            }}
                        >
                            <Text className="font-bold text-black">
                                CONTINUE
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
             <FloatingLoading visible={loading} label="LOADING..." />
        </SafeAreaView>
    );
}