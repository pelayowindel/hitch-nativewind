import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import useAppFonts from "../../hooks/useAppFonts";
import { supabase } from "../../lib/supabase";

export default function vehicleinfo() {
    const router = useRouter();
    const { driver_id } = useLocalSearchParams();

    const [motorcycleType, setMotorcycleType] = useState("standard");
    const [selectedColor, setSelectedColor] = useState("");
    const [model, setModel] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [yearModel, setYearModel] = useState("");

    const fontsLoaded = useAppFonts();

    const colors = ["violet", "red", "blue", "black", "gray", "yellow", "green"];
    const colorMap: any = {
        violet: "#8b5cf6",
        red: "#ff0000",
        blue: "#0066ff",
        black: "#000000",
        gray: "#808080",
        yellow: "#facc15",
        green: "#22c55e",
    };

    const brands = ["HONDA", "YAMAHA", "SUZUKI", "KAWASAKI"];
    const [selectedBrand, setSelectedBrand] = useState("HONDA");
    const [open, setOpen] = useState(false);

    if (!fontsLoaded) return null;

    const handleVehicleSubmit = async () => {
        const { error } = await supabase
            .from("vehicles")
            .insert([
                {
                    driver_id: driver_id,
                    type: motorcycleType,
                    brand: selectedBrand,
                    model: model,
                    plate_number: plateNumber,
                    year_model: yearModel,
                    color: selectedColor,
                },
            ]);

        if (error) {
            console.log("Vehicle Insert Error:", error);
            alert("Error saving vehicle info");
        } else {
            router.push({ pathname: "./driverdocuments", params: { driver_id } });
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-200">
            <ScrollView className="flex-1 px-4 pt-6">

                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <Pressable
                        className="w-10 h-10 bg-white rounded border border-black"
                        style={{ borderWidth: 2 }}
                        onPress={() => router.back()}
                    >
                        <Text className="text-2xl text-center text-black font-bold">←</Text>
                    </Pressable>

                    <Text className="flex-1 text-center text-black text-xl">
                        VEHICLE INFORMATION
                    </Text>
                </View>

                {/* Motorcycle Type */}
                <Text className="mb-2 font-semibold">MOTORCYCLE TYPE</Text>
                <View className="flex-row gap-3 mb-6">
                    <Pressable
                        onPress={() => setMotorcycleType("standard")}
                        className={`flex-1 py-4 items-center border ${
                            motorcycleType === "standard" ? "bg-green-600" : "bg-white"
                        }`}
                    >
                        <MaterialCommunityIcons name="motorbike" size={28} />
                        <Text>STANDARD</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setMotorcycleType("scooter")}
                        className={`flex-1 py-4 items-center border ${
                            motorcycleType === "scooter" ? "bg-green-600" : "bg-white"
                        }`}
                    >
                        <MaterialCommunityIcons name="scooter" size={28} />
                        <Text>SCOOTER</Text>
                    </Pressable>
                </View>

                {/* Brand */}
                <Text className="mb-1 font-semibold">BRAND</Text>
                <Pressable
                    onPress={() => setOpen(!open)}
                    className="bg-white border px-4 py-4 mb-3"
                >
                    <Text>{selectedBrand}</Text>
                </Pressable>

                {open && (
                    <View className="bg-white border mb-3">
                        {brands.map((brand) => (
                            <Pressable
                                key={brand}
                                onPress={() => {
                                    setSelectedBrand(brand);
                                    setOpen(false);
                                }}
                                className="p-3 border-b"
                            >
                                <Text>{brand}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}

                {/* Model */}
                <Text className="mb-1 font-semibold">MODEL</Text>
                <TextInput
                    value={model}
                    onChangeText={setModel}
                    className="bg-white border px-4 py-4 mb-3"
                    placeholder="EX. Kawasaki KR 150"
                />

                {/* Plate */}
                <Text className="mb-1 font-semibold">PLATE NUMBER</Text>
                <TextInput
                    value={plateNumber}
                    onChangeText={setPlateNumber}
                    className="bg-white border px-4 py-4 mb-3"
                    placeholder="9846gB"
                />

                {/* Year */}
                <Text className="mb-1 font-semibold">YEAR MODEL</Text>
                <TextInput
                    value={yearModel}
                    onChangeText={setYearModel}
                    className="bg-white border px-4 py-4 mb-3"
                    placeholder="2010"
                />

                {/* Color */}
                <Text className="mb-2 font-semibold">VEHICLE COLOR</Text>
                <View className="flex-row flex-wrap mb-6">
                    {colors.map((color) => (
                        <Pressable
                            key={color}
                            onPress={() => setSelectedColor(color)}
                            className="w-1/3 p-2"
                        >
                            <View className="flex-row items-center">
                                <View
                                    className="w-4 h-4 mr-2 border"
                                    style={{
                                        backgroundColor:
                                            selectedColor === color
                                                ? colorMap[color]
                                                : "white",
                                    }}
                                />
                                <Text>{color}</Text>
                            </View>
                        </Pressable>
                    ))}
                </View>

                {/* Submit */}
                <Pressable
                    className="bg-orange-500 py-4 items-center"
                    onPress={handleVehicleSubmit}
                >
                    <Text className="font-bold">CONTINUE TO DOCUMENTS</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}