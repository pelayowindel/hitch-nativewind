import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function documentupload() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-300">
      <ScrollView className="flex-1 px-4 pt-6">

        {/* MAIN CARD */}
        <View className="bg-white rounded-xl border border-black p-4 mb-6" style={{ borderWidth: 2 }}>

          {/* HEADER */}
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-xs text-blue-600 font-bold">
                VERIFYING APPLICANT
              </Text>
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "PlusJakarta-Bold" }}
              >
                JOHN DOE
              </Text>
            </View>

            <Pressable
              onPress={() => router.back()}
              className="w-8 h-8 bg-gray-200 rounded border border-black items-center justify-center"
              style={{ borderWidth: 2 }}
            >
              <Text className="font-bold">✕</Text>
            </Pressable>
          </View>

          {/* LICENSE & DOB */}
          <View className="flex-row gap-3 mb-3">
            <View className="flex-1 bg-gray-100 border border-black rounded-lg p-3" style={{ borderWidth: 2 }}>
              <Text className="text-xs text-gray-500">DRIVER LICENSE NO.</Text>
              <Text className="text-blue-600 font-bold mt-1">
                N02 - 12345678
              </Text>
            </View>

            <View className="flex-1 bg-gray-100 border border-black rounded-lg p-3" style={{ borderWidth: 2 }}>
              <Text className="text-xs text-gray-500">DATE OF BIRTH</Text>
              <Text className="font-bold mt-1">2003 - 09 - 03</Text>
            </View>
          </View>

          {/* ADDRESS */}
          <View className="bg-gray-100 border border-black rounded-lg p-3 mb-4" style={{ borderWidth: 2 }}>
            <Text className="text-xs text-gray-500">ADDRESS</Text>
            <Text className="font-bold mt-1">
              RANDOM PLACE, BOGO CITY, CEBU
            </Text>
          </View>

          {/* DOCUMENT IMAGES */}
          <View className="flex-row gap-3 mb-3">
            <View className="flex-1 border border-black rounded-lg overflow-hidden" style={{ borderWidth: 2 }}>
              <Image
                // source={require("../../../assets/license-front.png")} // replace with your image
                className="w-full h-28"
                resizeMode="cover"
              />
              <View className="bg-gray-200 py-1 items-center">
                <Text className="text-xs font-bold">LICENSE (FRONT)</Text>
              </View>
            </View>

            <View className="flex-1 border border-black rounded-lg overflow-hidden" style={{ borderWidth: 2 }}>
              <Image
               // source={require("../../../assets/license-back.png")}// replace with your image
                className="w-full h-28"
                resizeMode="cover"
              />
              <View className="bg-gray-200 py-1 items-center">
                <Text className="text-xs font-bold">LICENSE (BACK)</Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3 mb-4">
            <View className="flex-1 border border-black rounded-lg h-28 justify-center items-center bg-gray-100" style={{ borderWidth: 2 }}>
              <Text className="text-xs font-bold text-gray-500">OR / CR</Text>
            </View>

            <View className="flex-1 border border-black rounded-lg h-28 justify-center items-center bg-gray-100" style={{ borderWidth: 2 }}>
              <Text className="text-xs font-bold text-gray-500">NBI CLEARANCE</Text>
            </View>
          </View>

          {/* BACKGROUND CHECK */}
          <View className="flex-row justify-between items-center bg-gray-100 border border-black rounded-lg p-3 mb-4" style={{ borderWidth: 2 }}>
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons
                name="check-circle"
                size={20}
                color="green"
              />
              <View>
                <Text className="font-bold">BACKGROUND CHECK</Text>
                <Text className="text-xs text-gray-500">
                  No criminal record found
                </Text>
              </View>
            </View>

            <Text className="text-green-600 font-bold">PASSED</Text>
          </View>

          {/* ACTION BUTTONS */}
          <View className="flex-row gap-3">
            <View className="flex-1 relative">
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
                className="bg-red-500 py-3 rounded-lg items-center border border-black"
                style={{ borderWidth: 2 }}
              >
                <Text className="font-bold text-black">REJECT</Text>
              </Pressable>
            </View>

            <View className="flex-1 relative">
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
                className="bg-blue-600 py-3 rounded-lg items-center border border-black"
                style={{ borderWidth: 2 }}
              >
                <Text className="font-bold text-black">APPROVED DRIVER</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}