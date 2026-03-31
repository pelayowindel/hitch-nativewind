import React from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import useAppFonts from "../../../hooks/useAppFonts";

export default function UserProfileScreen() {
    type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

    const { role } = useLocalSearchParams();
    const router = useRouter();

    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) return null;

    const isDriver = role === "driver";
    const personalInfo: {
        icon: IconName;
        label: string;
        value: string;
    }[] = [
            { icon: "email", label: "EMAIL ADDRESS", value: "coolkid16@gmail.com" },
            { icon: "phone", label: "PHONE NUMBER", value: "+63 945 123 4567" },
            { icon: "calendar", label: "JOINED DATE", value: "AUGUST 1, 2003" },
        ];

    return (
        <View className="flex-1 bg-gray-200 p-4">

            {/* HEADER */}
            <View className="border border-black rounded-xl p-4 bg-white mb-4" style={{ borderWidth: 2 }}>
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <Text style={{ fontFamily: "PlusJakartaBold", fontSize: 16 }}>
                            JOHN DOE
                        </Text>
                    </View>

                    <Pressable onPress={() => router.push("/Admin/user_management")}>
                        <MaterialCommunityIcons name="close" size={22} />
                    </Pressable>
                </View>
            </View>

            {/* STATS */}
            <View className="flex-row justify-between mb-4">
                {[
                    { label: "RATINGS", value: "⭐ 4.9" },
                    { label: "RIDES", value: "6,400" },
                    { label: "WALLET", value: "₱ 400" },
                ].map((item, index) => (
                    <View
                        key={index}
                        className="flex-1 bg-white border border-black rounded-lg p-3 mx-1 items-center"
                        style={{ borderWidth: 2 }}
                    >
                        <Text style={{ fontSize: 10, fontFamily: "PlusJakartaBold" }}>
                            {item.label}
                        </Text>
                        <Text style={{ fontFamily: "PlusJakartaRegular" }}>
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>

            {/* PERSONAL INFO */}
            <Text style={{ fontFamily: "PlusJakartaBold", marginBottom: 8 }}>
                PERSONAL INFORMATION
            </Text>

            {[
                { icon: "email", label: "EMAIL ADDRESS", value: "coolkid16@gmail.com" },
                { icon: "phone", label: "PHONE NUMBER", value: "+63 945 123 4567" },
                { icon: "calendar", label: "JOINED DATE", value: "AUGUST 1, 2003" },
            ].map((item, index) => (
                <View
                    key={index}
                    className="bg-white border border-black rounded-lg p-4 mb-3 flex-row items-center"
                    style={{ borderWidth: 2 }}
                >
                    {personalInfo.map((item, index) => (
                        <MaterialCommunityIcons name={item.icon} size={22} />
                    ))}

                    <View className="ml-3">
                        <Text style={{ fontSize: 10, color: "gray", fontFamily: "PlusJakartaRegular" }}>
                            {item.label}
                        </Text>
                        <Text style={{ fontFamily: "PlusJakartaSemiBold" }}>
                            {item.value}
                        </Text>
                    </View>
                </View>
            ))}

            {/* VEHICLE INFO */}
            {isDriver && (
                <>
                    <Text style={{ fontFamily: "PlusJakartaBold", marginBottom: 8 }}>
                        VEHICLE INFORMATION
                    </Text>

                    <View
                        className="bg-white border border-black rounded-lg p-4 mb-4 flex-row justify-between items-center"
                        style={{ borderWidth: 2 }}
                    >
                        <View>
                            <Text style={{ fontFamily: "PlusJakartaBold" }}>
                                YAMAHA XMAX
                            </Text>
                            <Text style={{ fontSize: 12, color: "gray", fontFamily: "PlusJakartaRegular" }}>
                                Plate : 123-ABC - BLUE
                            </Text>
                        </View>

                        <View className="border border-green-500 px-3 py-1 rounded">
                            <Text style={{ color: "green", fontSize: 10, fontFamily: "PlusJakartaSemiBold" }}>
                                VERIFIED
                            </Text>
                        </View>
                    </View>
                </>
            )}

            {/* ACTIONS */}
            <View className="flex-row justify-between mt-2">

                {/* MESSAGES BUTTON */}
                <View className="flex-1 mr-2 relative">
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
                      onPress={() => Alert.alert("Messages pressed")}
                        className="bg-green-600 border border-black py-3 rounded-lg"
                        style={{ borderWidth: 2 }}
                    >
                        <View className="flex-row items-center justify-center">
                            <MaterialIcons name="message" size={18} color="white" style={{ marginRight: 6 }} />
                            <Text style={{ fontFamily: "PlusJakartaBold", color: "white" }}>
                                MESSAGES
                            </Text>
                        </View>
                    </Pressable>
                </View>

                {/* SUSPEND BUTTON */}
                <View className="flex-1 ml-2 relative">
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
                     onPress={() => Alert.alert("Suspend pressed")}
                        className="bg-orange-500 border border-black py-3 rounded-lg"
                        style={{ borderWidth: 2 }}
                    >
                        <View className="flex-row items-center justify-center">
                            <MaterialIcons name="pause-circle-filled" size={18} color="white" style={{ marginRight: 6 }} />
                            <Text style={{ color: "white", fontFamily: "PlusJakartaBold" }}>
                                SUSPEND
                            </Text>
                        </View>
                    </Pressable>
                </View>

            </View>

            {/* DELETE BUTTON */}
            <View className="mt-4 relative">
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
                   onPress={() => Alert.alert("Delete account?")}
                    className="bg-red-500 py-3 rounded-lg border border-black"
                    style={{ borderWidth: 2 }}
                >
                    <View className="flex-row items-center justify-center">
                        <MaterialIcons name="delete-forever" size={18} color="white" style={{ marginRight: 6 }} />
                        <Text style={{ color: "white", fontFamily: "PlusJakartaBold" }}>
                            DELETE ACCOUNT PERMANENTLY
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}