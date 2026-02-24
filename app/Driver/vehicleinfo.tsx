import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function vehicleinfo() {
    const [motorcycleType, setMotorcycleType] = useState("standard");
    const [selectedColor, setSelectedColor] = useState("");

    const [fontsLoaded] = useFonts({
        "PlusJakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "PlusJakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "PlusJakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    type ColorKey = keyof typeof colorMap;
    const colors: ColorKey[] = ["violet", "red", "blue", "black", "gray", "yellow", "green",
    ];
    const colorMap = {
        violet: "#8b5cf6",
        red: "#ff0000",
        blue: "#0066ff",
        black: "#000000",
        gray: "#808080",
        yellow: "#facc15",
        green: "#22c55e",
    } as const;

    const brands = ["HONDA", "YAMAHA", "SUZUKI", "KAWASAKI"];
    const [selectedBrand, setSelectedBrand] = useState("HONDA");
    const [open, setOpen] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <ScrollView className="flex-1 px-4 pt-6">
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
                        VEHICLE INFO
                    </Text>
                </View>

                {/* Steps */}
                <View className="flex-row items-center mb-4">
                    <View className="h-1 flex-1 bg-green-600 rounded-full" />
                    <View className="h-1 flex-1 bg-blue-600 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 mx-2 rounded-full" />
                    <View className="h-1 flex-1 bg-gray-400 rounded-full" />
                </View>

                <View className="flex-row justify-between mb-4">
                    <Text className="font-bold text-blue-600">STEP 2</Text>
                    <Text className="text-gray-400">VEHICLE INFO</Text>
                </View>

                {/* Title */}
                <Text className="text-xl font-bold mb-1">VEHICLE INFO</Text>
                <Text className="text-gray-500 mb-4">
                    Please provide vehicle details
                </Text>
                {/* Motorcycle Type */}
                <View className="mb-6 mt-3">
                    <Text className="mb-2 font-semibold">MOTORCYCLE TYPE</Text>

                    <View className="flex-row gap-3">
                        {/* Standard motorcycle Button */}
                        <View className="flex-1 shadow-md">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000", }} />

                            <Pressable
                                onPress={() => setMotorcycleType("standard")}
                                className={`border rounded py-4 items-center gap-1 ${motorcycleType === "standard"
                                    ? "bg-green-600"
                                    : "bg-white border-black"
                                    }`}
                            >
                                <MaterialCommunityIcons
                                    name="motorbike"
                                    size={28}
                                    color={motorcycleType === "standard" ? "#fff" : "#000"}
                                />
                                <Text
                                    className={`font-bold ${motorcycleType === "standard" ? "text-white" : "text-black"
                                        }`}
                                >
                                    STANDARD
                                </Text>
                            </Pressable>
                        </View>

                        {/* Scooter motorcycle Button */}
                        <View className="flex-1 shadow-md">
                            <View
                                className="absolute rounded-lg"
                                style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000", }} />

                            <Pressable
                                onPress={() => setMotorcycleType("scooter")}
                                className={`border rounded py-4 items-center gap-1 ${motorcycleType === "scooter"
                                    ? "bg-green-600"
                                    : "bg-white border-black"
                                    }`}
                            >
                                <MaterialCommunityIcons
                                    name="scooter"
                                    size={28}
                                    color={motorcycleType === "scooter" ? "#fff" : "#000"}
                                />
                                <Text
                                    className={`font-bold ${motorcycleType === "scooter" ? "text-white" : "text-black"
                                        }`}
                                >
                                    SCOOTER
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Vehicle Details Title */}
                <Text className="text-lg font-bold mb-4">VEHICLE DETAILS</Text>

                <View className="mb-3 mt-3 relative">
                    <View
                        className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "73%" }}
                    />

                    <Text className="mb-1 font-semibold">BRAND</Text>

                    {/* Dropdown button */}
                    <Pressable
                        onPress={() => setOpen(true)}
                        className="bg-white border border-black rounded flex-row justify-between items-center px-4 py-4"
                    >
                        <Text className="text-black">{selectedBrand}</Text>
                        <Text className="text-black font-bold">▼</Text>
                    </Pressable>

                    {/* Small dropdown modal */}
                    {open && (
                        <View className="absolute z-50 top-[78px] w-full bg-white border border-black rounded">
                            {brands.map((brand) => (
                                <Pressable
                                    key={brand}
                                    onPress={() => {
                                        setSelectedBrand(brand);
                                        setOpen(false);
                                    }}
                                    className="px-4 py-3 border-b border-black last:border-b-0"
                                >
                                    <Text className="text-black">{brand}</Text>
                                </Pressable>
                            ))}
                        </View>
                    )}
                </View>

                {/* Model */}
                <View className="mb-3 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "73%" }} 
                        />
                    <Text className="mb-1 font-semibold">MODEL</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="EX. Kawasaki KR 150"
                    />
                </View>

                {/* Plate Number */}
                <View className="mb-3 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "73%" }}
                         />
                    <Text className="mb-1 font-semibold">PLATE NUMBER</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="9846gB"
                        value="9846gB"
                    />
                </View>

                {/* Year Model */}
                <View className="mb-3 mt-3">
                    <View className="absolute bg-black rounded-lg"
                        style={{ top: 23, left: 4, width: "100%", height: "73%" }}
                         />
                    <Text className="mb-1 font-semibold">YEAR MODEL</Text>
                    <TextInput
                        className="bg-white border border-black rounded px-4 py-4"
                        placeholder="2010"
                        value="2010"
                    />
                </View>

                {/* Vehicle Color */}
                <View className="mb-6 mt-3">
                    <View
                        className="absolute bg-black rounded-lg"
                        style={{ top: 30, left: 4, width: "100%", height: "83%" }}
                    />

                    <Text className="mb-3 font-semibold">VEHICLE COLOR</Text>

                    <View className="bg-white border border-black rounded p-4">
                        <View className="flex-row flex-wrap">
                            {colors.map((color) => (
                                <Pressable
                                    key={color}
                                    onPress={() => setSelectedColor(color)}
                                    className="mb-4 px-2"
                                    style={{ width: "33%", minWidth: 100 }}
                                >
                                    <View className="flex-row items-center">
                                        <View
                                            className="w-4 h-4 border border-black mr-2"
                                            style={{
                                                backgroundColor:
                                                    selectedColor === color
                                                        ? colorMap[color]
                                                        : "white",
                                            }}
                                        />
                                        <Text className="flex-shrink font-bold">{color}</Text>
                                    </View>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>

                <View className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 mb-6">
                    <Text className="text-sm text-blue-800 font-bold">
                        Please ensure the details match your Official Receipt (OR) and Certificate of Registration (CR).
                    </Text>
                </View>

                {/* Continue Button */}
                <View className="relative mb-10">
                    <View
                        className="absolute rounded-lg"
                        style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
                    />
                    <Pressable className="bg-orange-500 py-4 rounded items-center">
                        <Text className="font-bold text-black">
                            CONTINUED TO DOCUMENTS
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}