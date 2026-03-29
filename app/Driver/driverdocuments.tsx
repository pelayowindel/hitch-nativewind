import { View, Text, TextInput, Pressable, ScrollView, Image, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import useAppFonts from "../../hooks/useAppFonts";
import FloatingLoading from "../../constants/uploading";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useSupabase } from "../../contexts/SupabaseContext";

export default function documentupload() {
  const router = useRouter();
  const { driver_id } = useLocalSearchParams();
  const { user } = useSupabase();
  const fontsLoaded = useAppFonts();
  const [licenseNumber, setLicenseNumber] = useState<string>("");

  const [driverData, setDriverData] = useState<any>(null);
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [orImage, setOrImage] = useState<string | null>(null);
  const [crImage, setCrImage] = useState<string | null>(null);
  const [nbiImage, setNbiImage] = useState<string | null>(null);

  const [frontUploading, setFrontUploading] = useState(false);
  const [backUploading, setBackUploading] = useState(false);
  const [orUploading, setOrUploading] = useState(false);
  const [crUploading, setCrUploading] = useState(false);
  const [nbiUploading, setNbiUploading] = useState(false);

  const [saving, setSaving] = useState(false); 

  useEffect(() => {
    const loadData = async () => {
      const id = typeof driver_id === "string" ? driver_id : null;
      if (!id) return;

      const { data: driver, error: driverError } = await supabase
        .from("drivers")
        .select("first_name,last_name,gender,address,birth_date,phone,email")
        .eq("id", id)
        .single();

      if (!driverError) setDriverData(driver);

      const { data: vehicle, error: vehicleError } = await supabase
        .from("vehicles")
        .select("type,brand,model,plate_number,year_model,color")
        .eq("driver_id", id)
        .single();

      if (!vehicleError) setVehicleData(vehicle);
    };

    loadData();
  }, [driver_id]);

  if (!fontsLoaded) return null;

  const handleSaveDocuments = async () => {
    if (!driver_id || !user) {
      alert("Cannot save documents: missing driver ID or user session.");
      return;
    }

    setSaving(true); 

    const payload = {
      driver_id,
      license_number: licenseNumber,
      license_front: frontImage,
      license_back: backImage,
      or_cr_or: orImage,
      or_cr_cr: crImage,
      nbi_clearance: nbiImage,
    };

    const { data, error } = await supabase.from("driver_documents").insert([payload]);

    if (error) {
      setSaving(false); 
      console.error("driver_documents insert error", error);
      alert("Unable to save documents. Check your RLS policy and DB schema.");
      return;
    }

    console.log("driver_documents saved", data);
    setSaving(false); 
    router.push({
      pathname: "./driverdocreview",
      params: {
        driver_id,
        frontImage,
        backImage,
        orImage,
        crImage,
        nbiImage,
        licenseNumber,
        firstName: driverData?.first_name,
        lastName: driverData?.last_name,
        gender: driverData?.gender,
        birthDate: driverData?.birth_date,
        contactNumber: driverData?.phone,
        email: driverData?.email,
        address: driverData?.address,
        motorcycleType: vehicleData?.type,
        brand: vehicleData?.brand,
        model: vehicleData?.model,
        plateNumber: vehicleData?.plate_number,
        yearModel: vehicleData?.year_model,
        vehicleColor: vehicleData?.color,
      },
    });
  };

  const pickImage = async (
    setImage: (uri: string) => void,
    setUploading: (val: boolean) => void
  ) => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setUploading(true);
      await new Promise((res) => setTimeout(res, 1500));
      setImage(result.assets[0].uri);
      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <ScrollView className="flex-1 px-4 pt-6">

        {/* DRIVER LICENSE */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="card-account-details" size={22} color="#7c3aed" />
            <Text className="ml-2 font-bold">DRIVER'S LICENSE</Text>
          </View>

          <TextInput
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            placeholder="G04-1345-23456"
            className="bg-white border border-black rounded px-4 py-4 mb-4"
            style={{ borderWidth: 2 }}
          />

          <View className="flex-row gap-4">
            {/* FRONT */}
            <Pressable
              onPress={() => pickImage(setFrontImage, setFrontUploading)}
              disabled={frontUploading}
              className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white"
            >
              {frontUploading ? (
                <View className="items-center">
                  <ActivityIndicator size="large" color="#f97316" />
                  <Text className="text-xs text-gray-500 mt-2">Uploading...</Text>
                </View>
              ) : frontImage ? (
                <Image source={{ uri: frontImage }} className="w-full h-32 rounded" resizeMode="cover" />
              ) : (
                <>
                  <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="camera" size={22} color="#000" />
                  </View>
                  <Text className="font-bold text-xs">FRONT SIDE</Text>
                </>
              )}
            </Pressable>

            {/* BACK */}
            <Pressable
              onPress={() => pickImage(setBackImage, setBackUploading)}
              disabled={backUploading}
              className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white"
            >
              {backUploading ? (
                <View className="items-center">
                  <ActivityIndicator size="large" color="#f97316" />
                  <Text className="text-xs text-gray-500 mt-2">Uploading...</Text>
                </View>
              ) : backImage ? (
                <Image source={{ uri: backImage }} className="w-full h-32 rounded" resizeMode="cover" />
              ) : (
                <>
                  <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="camera" size={22} color="#000" />
                  </View>
                  <Text className="font-bold text-xs">BACK SIDE</Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        {/* VEHICLE REGISTRATION */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="file-document" size={22} color="#7c3aed" />
            <Text className="ml-2 font-bold">VEHICLE REGISTRATION (OR & CR)</Text>
          </View>

          <View className="flex-row gap-4">
            {/* OR */}
            <Pressable
              onPress={() => pickImage(setOrImage, setOrUploading)}
              disabled={orUploading}
              className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white"
            >
              {orUploading ? (
                <View className="items-center">
                  <ActivityIndicator size="large" color="#f97316" />
                  <Text className="text-xs text-gray-500 mt-2">Uploading...</Text>
                </View>
              ) : orImage ? (
                <Image source={{ uri: orImage }} className="w-full h-32 rounded" resizeMode="cover" />
              ) : (
                <>
                  <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="cloud-upload" size={22} color="#000" />
                  </View>
                  <Text className="font-bold text-xs">TAP TO UPLOAD</Text>
                  <Text className="text-xs text-gray-500 mt-1">OR</Text>
                </>
              )}
            </Pressable>

            {/* CR */}
            <Pressable
              onPress={() => pickImage(setCrImage, setCrUploading)}
              disabled={crUploading}
              className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white"
            >
              {crUploading ? (
                <View className="items-center">
                  <ActivityIndicator size="large" color="#f97316" />
                  <Text className="text-xs text-gray-500 mt-2">Uploading...</Text>
                </View>
              ) : crImage ? (
                <Image source={{ uri: crImage }} className="w-full h-32 rounded" resizeMode="cover" />
              ) : (
                <>
                  <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                    <MaterialCommunityIcons name="cloud-upload" size={22} color="#000" />
                  </View>
                  <Text className="font-bold text-xs">TAP TO UPLOAD</Text>
                  <Text className="text-xs text-gray-500 mt-1">CR</Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        {/* NBI */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="shield-check" size={22} color="#7c3aed" />
            <Text className="ml-2 font-bold">NBI CLEARANCE</Text>
          </View>

          <Pressable
            onPress={() => pickImage(setNbiImage, setNbiUploading)}
            disabled={nbiUploading}
            className="border border-dashed border-black rounded-lg items-center py-6 bg-white"
          >
            {nbiUploading ? (
              <View className="items-center">
                <ActivityIndicator size="large" color="#f97316" />
                <Text className="text-xs text-gray-500 mt-2">Uploading...</Text>
              </View>
            ) : nbiImage ? (
              <Image source={{ uri: nbiImage }} className="w-full h-40 rounded" resizeMode="cover" />
            ) : (
              <>
                <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                  <MaterialCommunityIcons name="cloud-upload" size={22} color="#000" />
                </View>
                <Text className="font-bold text-xs">TAP TO UPLOAD</Text>
                <Text className="text-xs text-gray-400 mt-1">PNG, JPG, PDF</Text>
              </>
            )}
          </Pressable>
        </View>

        {/* Continue */}
        <View className="relative mt-6 mb-6">
        <Pressable
          className="bg-orange-500 py-4 rounded items-center border border-black"
          style={{ borderWidth: 2 }}
          onPress={handleSaveDocuments}
          disabled={saving} 
        >
          <Text className="font-bold text-black">SAVE DOCUMENTS & CONTINUE</Text>
        </Pressable>
        </View>

      </ScrollView>

      
      <FloatingLoading visible={saving} label="UPLOADING All DOCUMENTS...." />

    </SafeAreaView>
  );
}