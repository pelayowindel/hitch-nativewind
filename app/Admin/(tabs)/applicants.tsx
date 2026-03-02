import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

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

        <Text className="flex-1 text-center text-lg font-semibold tracking-wide">
          APPLICANTS
        </Text>

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
              <Text className="font-semibold text-sm">{item.name}</Text>
              <Text className="text-[11px] text-blue-700">Review Documents</Text>
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