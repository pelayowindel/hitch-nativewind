import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function documentupload() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "PlusJakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <ScrollView className="flex-1 px-4 pt-6">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
            style={{ width: 35 }} />
          <Pressable className="w-10 h-10 bg-white rounded border border-black shadow-lg"
            style={{ borderWidth: 2 }}
            onPress={() => router.back()}>
            <Text className="text-2xl text-center text-black font-bold">←</Text>
          </Pressable>

          <Text
            className="flex-1 text-center text-xl text-black"
            style={{ fontFamily: "PlusJakarta-Bold" }}
          >
            DRIVER APPLICATION
          </Text>
        </View>

        {/* Steps */}
        <View className="flex-row items-center mb-3">
          <View className="h-1 flex-1 bg-green-600 rounded-full" />
          <View className="h-1 flex-1 bg-green-600 mx-2 rounded-full" />
          <View className="h-1 flex-1 bg-blue-600 mx-2 rounded-full" />
          <View className="h-1 flex-1 bg-gray-400 rounded-full" />
        </View>

        <View className="flex-row justify-between mb-4">
          <Text className="font-bold text-blue-600">STEP 3</Text>
          <Text className="text-blue-600">DOCUMENT UPLOAD</Text>
        </View>

        {/* Title */}
        <Text className="text-xl font-bold mb-1">UPLOAD DOCS</Text>
        <Text className="text-gray-500 mb-4">
          Please provide clear photos of your valid documents.{"\n"}
          All corners must be visible.
        </Text>

        {/* DRIVER LICENSE */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="card-account-details" size={22} color="#7c3aed" />
            <Text className="ml-2 font-bold">DRIVER’S LICENSE</Text>
          </View>

          <TextInput
            placeholder="G04-1345-23456"
            className="bg-white border border-black rounded px-4 py-4 mb-4"
            style={{ borderWidth: 2 }}
          />

          <View className="flex-row gap-4">
            {/* Front */}
            <Pressable className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white">
              <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                <MaterialCommunityIcons name="camera" size={22} color="#000" />
              </View>
              <Text className="font-bold text-xs">FRONT SIDE</Text>
            </Pressable>

            {/* Back */}
            <Pressable className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white">
              <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                <MaterialCommunityIcons name="camera" size={22} color="#000" />
              </View>
              <Text className="font-bold text-xs">BACK SIDE</Text>
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
            {["OR", "CR"].map((item) => (
              <Pressable
                key={item}
                className="flex-1 border border-dashed border-black rounded-lg items-center py-6 bg-white"
              >
                <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
                  <MaterialCommunityIcons name="cloud-upload" size={22} color="#000" />
                </View>
                <Text className="font-bold text-xs">TAP TO UPLOAD</Text>
                <Text className="text-xs font-semibold text-gray-500 mt-1">{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* NBI */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="shield-check" size={22} color="#7c3aed" />
            <Text className="ml-2 font-bold">NBI CLEARANCE</Text>
          </View>

          <Pressable className="border border-dashed border-black rounded-lg items-center py-6 bg-white">
            <View className="w-12 h-12 bg-orange-400 rounded-full items-center justify-center mb-2">
              <MaterialCommunityIcons name="cloud-upload" size={22} color="#000" />
            </View>
            <Text className="font-bold text-xs">TAP TO UPLOAD</Text>
            <Text className="text-xs font-semibold text-gray-400 mt-1">PNG, JPG, PDF (max 5mb)</Text>
          </Pressable>
        </View>

        {/* Security Note */}
        <View className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 mb-6 flex-row gap-2">
          <MaterialCommunityIcons name="lock" size={18} color="#1e40af" />
          <Text className="text-sm text-blue-800 font-bold flex-1">
            Your documents are stored securely and will only be used for identity
            verification purposes in compliance with data privacy laws.
          </Text>
        </View>

        {/* Continue */}
        <View className="relative mb-10">
          <View
            className="absolute rounded-lg"
            style={{ top: 5, left: 4, width: "100%", height: "100%", backgroundColor: "#000" }}
          />
          <Pressable
            className="bg-orange-500 py-4 rounded items-center border border-black"
            style={{ borderWidth: 2 }}
            onPress={() => router.push("./driverdocreview")}
          >
            <Text className="font-bold text-black">CONTINUE</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}