import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { supabase } from "../../../lib/supabase"; // ✅ IMPORT ADDED

export default function DriverDashboard() {
  const [online, setOnline] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [driverName, setDriverName] = useState("Loading...");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // ✅ FETCH DRIVER NAME
  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData.user?.id;

        if (!userId) return;

        const { data: driver } = await supabase
          .from("drivers")
          .select("first_name, last_name")
          .eq("user_id", userId)
          .maybeSingle();

        if (driver) {
          setDriverName(`${driver.first_name} ${driver.last_name}`);
        }
      } catch (error) {
        console.log("Error fetching driver:", error);
      }
    };

    fetchDriver();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F2F2F2]">
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b-[3px] border-black bg-[#E6E6E6]">
        <View className="flex-row items-center">
          <View className="w-12 h-12 border-[3px] border-black mr-3 justify-center items-center bg-white rounded-md">
            <AntDesign name="user" size={22} color="black" />
          </View>
          <View>
            <Text className="text-xs text-gray-500">Driver</Text>

            {/* ✅ DYNAMIC NAME */}
            <Text className="font-bold text-base">
              {driverName}
            </Text>
          </View>
        </View>
        <MaterialIcons name="notifications" size={26} color="#F59E0B" />
      </View>

      {/* SCROLLABLE AREA */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 18,
          paddingBottom: 160,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ONLINE CARD */}
        <SlipCard styleClass="mb-6">
          <View className="p-6">
            <View className="flex-row justify-between items-center">
              <View>
                <View className="flex-row items-center">
                  <View className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                  <Text className="font-semibold text-base">
                    YOU ARE ONLINE
                  </Text>
                </View>
                <Text className="text-sm text-gray-400 mt-1">
                  Visible to Passengers
                </Text>
              </View>

              <Switch
                value={online}
                onValueChange={setOnline}
                thumbColor="white"
                trackColor={{ true: "#4ADE80", false: "#ccc" }}
              />
            </View>
          </View>
        </SlipCard>

        {/* STATS */}
        <View className="flex-row justify-between mb-6">
          <View className="w-[48%]">
            <SlipCard>
              <View className="bg-[#7DB8D6] p-5 rounded-xl">
                <View className="border border-black bg-white px-3 py-1 mb-20">
                  <Text className="text-xs">EARNINGS</Text>
                </View>
                <Text className="text-2xl font-bold">
                  ₱ 1,250
                </Text>
                <Text className="text-xs mt-1">
                  ₱ 120 today
                </Text>
              </View>
            </SlipCard>
          </View>

          <View className="w-[48%] justify-between">
            <SlipCard styleClass="mb-4">
              <View className="bg-[#FF7A1A] p-5 rounded-xl flex-row justify-between items-center">
                <View>
                  <Text className="text-xs">RIDES</Text>
                  <Text className="text-2xl font-bold">8</Text>
                </View>
                <Ionicons name="bicycle" size={22} color="black" />
              </View>
            </SlipCard>

            <SlipCard>
              <View className="bg-[#F3F3F3] p-5 rounded-xl">
                <Text className="text-xs">RATINGS</Text>
                <View className="flex-row items-center">
                  <Text className="text-2xl font-bold mr-2">4.9</Text>
                  <Ionicons name="star" size={18} color="#FBBF24" />
                </View>
              </View>
            </SlipCard>
          </View>
        </View>

        {/* RIDE CARD */}
        <SlipCard>
          <View className="overflow-hidden rounded-xl">

            <View className="h-28 bg-[#D9D9D9] border-b-[3px] border-black justify-center items-center">
              <Text>MAP AREA</Text>
            </View>

            <View className="p-6">

              {/* Passenger */}
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <View className="w-12 h-12 bg-black justify-center items-center mr-3">
                    {/* ✅ INITIALS */}
                    <Text className="text-white font-bold">
                      {driverName !== "Loading..."
                        ? driverName
                            .split(" ")
                            .map(n => n[0])
                            .join("")
                            .toUpperCase()
                        : "--"}
                    </Text>
                  </View>

                  <View>
                    <Text className="font-bold text-base">
                      Mary Jane
                    </Text>

                    <View className="flex-row items-center mt-1">
                      <View className="bg-yellow-400 px-2 py-[2px] mr-2">
                        <Text className="text-[10px] font-bold">4.8</Text>
                      </View>
                      <Text className="text-xs text-gray-500">
                        Cash Payment
                      </Text>
                    </View>
                  </View>
                </View>

                <Text className="text-lg font-bold">
                  ₱ 145
                </Text>
              </View>

              {/* ACCEPT BUTTON */}
              {!accepted && (
                <View className="flex-row justify-between">
                  <TouchableOpacity className="w-[22%] border-[3px] border-black rounded-xl py-3 items-center bg-white">
                    <Text className="font-bold">X</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setAccepted(true)}
                    className="w-[72%] bg-black rounded-xl py-3 items-center"
                  >
                    <Text className="text-white font-bold tracking-wide">
                      ACCEPT RIDE →
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

          </View>
        </SlipCard>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row justify-between items-center">
          <Pressable onPress={() => router.push("/Driver/driver-dashboard")} className="items-center">
            <Ionicons name="home" size={24} color="black" />
            <Text className="font-bold" style={{ fontSize: 10 }}>HOME</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/Driver/history")} className="items-center">
            <Ionicons name="document-text" size={24} color="#64748b" />
            <Text className="font-bold" style={{ fontSize: 10, color: "#64748b" }}>ACTIVITY</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/Driver/chat")} className="items-center">
            <Ionicons name="chatbubble-ellipses" size={24} color="black" />
            <Text className="font-bold" style={{ fontSize: 10 }}>MESSAGES</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/Driver/driver-profile")} className="items-center">
            <Ionicons name="person-outline" size={24} color="#64748b" />
            <Text className="font-bold" style={{ fontSize: 10, color: "#64748b" }}>PROFILE</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* SLIP CARD */
function SlipCard({ children, styleClass = "" }: { children: React.ReactNode; styleClass?: string }) {
  return (
    <View className={`relative ${styleClass}`}>
      <View
        className="absolute bg-black rounded-2xl"
        style={{ width: "100%", height: "100%", top: 4, left: 4 }}
      />
      <View className="bg-white border-[3px] border-black rounded-2xl">
        {children}
      </View>
    </View>
  );
}