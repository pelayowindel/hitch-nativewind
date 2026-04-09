import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useAppFonts from "../../../hooks/useAppFonts";

export default function UserManagementScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) return null;

  const users = [
    { id: "1", name: "JOHN DRIVER", role: "driver" },
    { id: "2", name: "JANE RIDER", role: "rider" },
    { id: "3", name: "MARK DRIVER", role: "driver" },
    { id: "4", name: "ANNA RIDER", role: "rider" },
  ];

  return (
    <View className="flex-1 bg-gray-300">

      {/* HEADER */}
      <View className="flex-row items-center px-4 py-4">
        <TouchableOpacity
          onPress={() => router.push("/Admin/admin_dashboard")}
          className="p-2 bg-white rounded-lg border border-gray-400"
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontFamily: "PlusJakartaSemiBold",
          }}
        >
          USER MANAGEMENT
        </Text>

        <View className="w-8" />
      </View>

      {/* SEARCH */}
      <View className="mx-4 mt-2 mb-3 bg-white rounded-full border border-gray-400 px-3 flex-row items-center">
        <Ionicons name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search user..."
          value={search}
          onChangeText={setSearch}
          className="flex-1 ml-2 py-2"
          style={{ fontFamily: "PlusJakartaRegular" }}
        />
      </View>

      {/* LIST */}
      <ScrollView className="px-4">
        {users.map((item) => (
          <View
            key={item.id}
            className="bg-white border border-black rounded-lg mb-3 p-4 flex-row items-center"
          >
            <Ionicons name="person" size={22} color="black" />

            <View className="flex-1 ml-3">
              <Text style={{ fontFamily: "PlusJakartaSemiBold" }}>
                {item.name}
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  color: item.role === "driver" ? "green" : "#1D4ED8",
                  fontFamily: "PlusJakartaRegular",
                }}
              >
                {item.role === "driver"
                  ? "Driver Account"
                  : "Commuter Account"}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/Admin/user_profile",
                  params: { role: item.role },
                })
              }
            >
              <Ionicons name="chevron-forward" size={22} color="blue" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}