import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text as RNText } from "react-native";

/* =============================
   FONT TEXT
============================ */
function AppText({
  children,
  weight = "regular",
  style,
}: {
  children: React.ReactNode;
  weight?: "regular" | "medium" | "semibold" | "bold";
  style?: any;
}) {
  const fontMap = {
    regular: "PlusJakartaRegular",
    medium: "PlusJakartaMedium",
    semibold: "PlusJakartaSemiBold",
    bold: "PlusJakartaBold",
  };

  return (
    <RNText style={[{ fontFamily: fontMap[weight] }, style]}>
      {children}
    </RNText>
  );
}

export default function ApplicantsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Sample Data
  const applicants = [
    { id: "1", name: "JOHN DOE" },
    { id: "2", name: "JOHN DOE" },
    { id: "3", name: "JOHN DOE" },
    { id: "4", name: "JOHN DOE" },
  ];

  return (
    <View className="flex-1 bg-gray-300">
      {/* HEADER */}
      <View className="flex-row items-center bg-gray-300 px-4 py-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 bg-white rounded-lg border border-gray-400"
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>

        <AppText
          weight="semibold"
          style={{ flex: 1, textAlign: "center", fontSize: 18, letterSpacing: 0.5 }}
        >
          APPLICANTS
        </AppText>

        <View className="w-8" />
      </View>

      {/* SEARCH BAR */}
      <View className="mx-4 mt-2 mb-3 bg-white rounded-full border border-gray-400 px-3 flex-row items-center">
        <Ionicons name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          className="flex-1 ml-2 py-2"
          placeholderTextColor="gray"
        />
      </View>

      {/* APPLICANTS LIST */}
      <ScrollView className="px-4">
        {applicants.map((item) => (
          <View
            key={item.id}
            className="bg-white border border-black rounded-lg mb-3 p-4 flex-row items-center"
          >
            {/* Left Icon */}
            <Ionicons name="people" size={22} color="black" />

            {/* NAME + SUBTEXT */}
            <View className="flex-1 ml-3">
              <AppText weight="semibold" style={{ fontSize: 14 }}>
                {item.name}
              </AppText>
              <AppText weight="regular" style={{ fontSize: 11, color: "#1D4ED8" }}>
                Review Documents
              </AppText>
            </View>

            {/* Arrow Button */}
            <TouchableOpacity className="p-2">
              <Ionicons name="chevron-forward" size={22} color="blue" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}