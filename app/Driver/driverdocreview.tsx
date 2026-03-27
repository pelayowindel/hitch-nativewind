import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import FloatingLoading from "../../constants/floatingloading";
import useAppFonts from "../../hooks/useAppFonts";
import { supabase } from "../../lib/supabase";
import { useSupabase } from "../../contexts/SupabaseContext";


export default function ReviewInfo() {
    const fontsLoaded = useAppFonts();
    const [loading, setLoading] = useState<boolean>(false);
    const [driverInfo, setDriverInfo] = useState<any>(null);
    const [vehicleInfo, setVehicleInfo] = useState<any>(null);

    const router = useRouter();
    const { user } = useSupabase();
    const {
        driver_id,
        frontImage,
        backImage,
        orImage,
        crImage,
        nbiImage,
        licenseNumber,
        firstName,
        lastName,
        gender,
        birthDate,
        contactNumber,
        email,
        address,
        motorcycleType,
        brand,
        model,
        plateNumber,
        yearModel,
        vehicleColor,
    } = useLocalSearchParams();

    const infoFromParams = {
        first_name: firstName ?? "",
        last_name: lastName ?? "",
        gender: gender ?? "",
        birth_date: birthDate ?? "",
        phone: contactNumber ?? "",
        email: email ?? "",
        address: address ?? "",
    };

    const vehicleFromParams = {
        type: motorcycleType ?? "",
        brand: brand ?? "",
        model: model ?? "",
        plate_number: plateNumber ?? "",
        year_model: yearModel ?? "",
        color: vehicleColor ?? "",
    };


    const frontImageUri = frontImage ? String(frontImage) : null;
    const backImageUri = backImage ? String(backImage) : null;
    const orImageUri = orImage ? String(orImage) : null;
    const crImageUri = crImage ? String(crImage) : null;
    const nbiImageUri = nbiImage ? String(nbiImage) : null;
    const driverLicenseNumber = licenseNumber ? String(licenseNumber) : "";

    useEffect(() => {
        const loadData = async () => {
            const driverId = typeof driver_id === "string" ? driver_id : null;
            if (!driverId) return;

            const { data: driverData, error: driverError } = await supabase
                .from("drivers")
                .select("first_name,last_name,gender,address,birth_date,phone,email")
                .eq("id", driverId)
                .single();

            console.log("Review load driver", { driverId, driverData, driverError });
            if (!driverError) setDriverInfo(driverData);

            const { data: vehicleData, error: vehicleError } = await supabase
                .from("vehicles")
                .select("type,brand,model,plate_number,year_model,color")
                .eq("driver_id", driverId)
                .single();

            console.log("Review load vehicle", { driverId, vehicleData, vehicleError });
            if (!vehicleError) setVehicleInfo(vehicleData);
        };

        loadData();
    }, [driver_id, user]);

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
                            [["First Name", driverInfo?.first_name || infoFromParams.first_name || "-"], ["Last Name", driverInfo?.last_name || infoFromParams.last_name || "-"], ["Gender", driverInfo?.gender || infoFromParams.gender || "-"]],
                            [["Date of Birth", driverInfo?.birth_date || infoFromParams.birth_date || "-"], ["Contact Number", driverInfo?.phone || infoFromParams.phone || "-"]],
                            [["Email", driverInfo?.email || infoFromParams.email || "-"], ["Address", driverInfo?.address || infoFromParams.address || "-"]],
                            [["Motorcycle Type", vehicleInfo?.type || vehicleFromParams.type || "-"], ["Brand", vehicleInfo?.brand || vehicleFromParams.brand || "-"], ["Model", vehicleInfo?.model || vehicleFromParams.model || "-"]],
                            [["Plate Number", vehicleInfo?.plate_number || vehicleFromParams.plate_number || "-"], ["Year Model", vehicleInfo?.year_model || vehicleFromParams.year_model || "-"]],
                            [["Vehicle Color", vehicleInfo?.color || vehicleFromParams.color || "-"], ["License Number", driverLicenseNumber || "-"]],
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
                            {frontImageUri ? (
                                <Image source={{ uri: frontImageUri }} className="w-full h-full rounded" />
                            ) : (
                                <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                            )}
                        </View>

                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold mb-1">BACK SIDE</Text>
                            {backImageUri ? (
                                <Image source={{ uri: backImageUri }} className="w-full h-full rounded" />
                            ) : (
                                <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                            )}
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
                            {orImageUri ? (
                                <Image source={{ uri: orImageUri }} className="w-full h-full rounded" />
                            ) : (
                                <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                            )}
                        </View>
                        <View className="flex-1 h-32 border border-dashed border-black rounded-lg items-center justify-center">
                            <Text className="font-bold">CR</Text>
                            {crImageUri ? (
                                <Image source={{ uri: crImageUri }} className="w-full h-full rounded" />
                            ) : (
                                <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                            )}
                        </View>
                    </View>
                </View>

                {/* NBI CLEARANCE */}
                <Text className="font-bold mb-3" style={{ fontFamily: "PlusJakarta-Bold" }}>
                    NBI CLEARANCE
                </Text>
                <View className="border-2 border-black rounded-lg p-4 bg-white mb-6">
                    <View className="">
                        <View className="h-40 border border-dashed border-black rounded-lg items-center justify-center overflow-hidden">
                            {nbiImageUri ? (
                                <Image source={{ uri: nbiImageUri }} className="w-full h-full rounded" />
                            ) : (
                                <>
                                    <MaterialCommunityIcons name="image-outline" size={36} color="#666" />
                                    <Text className="text-gray-600 mt-2">PNG, JPG, PDF (max 5mb)</Text>
                                </>
                            )}
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
                                router.push("/Driver/driver-dashboard");
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