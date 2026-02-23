import React, { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Pressable,
  Text as RNText,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* =============================
   FONTED TEXT COMPONENT
============================= */
function AppText({
  children,
  weight = "regular",
  style,
  ...props
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
    <RNText
      {...props}
      style={[{ fontFamily: fontMap[weight] }, style]}
    >
      {children}
    </RNText>
  );
}

export default function DriverProfile() {
  const [online, setOnline] = useState(true);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#CFCFCF]">
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View className="bg-white border-b-[3px] border-black px-4 py-4 flex-row items-center justify-between">
        <Ionicons name="arrow-back" size={22} />
        <AppText weight="bold" style={{ fontSize: 16 }}>
          DRIVERS ID: D-402
        </AppText>
        <Ionicons name="settings-outline" size={22} />
      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 18,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE IMAGE */}
        <View className="items-center mb-8">
          <View className="relative">
            <View className="absolute top-4 left-4 w-40 h-40 bg-[#5B54DD] rounded-2xl" />

            <View className="w-40 h-40 bg-[#EAEAEA] border-[3px] border-black rounded-2xl justify-center items-center">
              <AppText weight="medium" style={{ color: "#777" }}>
                IMAGE
              </AppText>
            </View>

            <View className="absolute -bottom-3 -right-3 bg-white border-[3px] border-black px-4 py-1 -rotate-6 rounded-xl">
              <AppText weight="bold">4.9</AppText>
            </View>
          </View>
        </View>

        {/* STATUS */}
        <SlipCard styleClass="mb-6">
          <View className="p-4 flex-row justify-between items-center">
            <View>
              <View className="flex-row items-center mb-1">
                <View className="w-3 h-3 bg-green-500 mr-2 rounded-full" />
                <AppText weight="bold">
                  STATUS : {online ? "ONLINE" : "OFFLINE"}
                </AppText>
              </View>
              <AppText
                weight="medium"
                style={{ fontSize: 12, color: "#666" }}
              >
                VISIBLE TO NEARBY RIDERS
              </AppText>
            </View>

            <Pressable
              onPress={() => setOnline(!online)}
              className={`w-14 h-7 rounded-full px-1 justify-center ${
                online ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              <View
                className={`w-5 h-5 bg-white rounded-full ${
                  online ? "self-end" : "self-start"
                }`}
              />
            </Pressable>
          </View>
        </SlipCard>

        {/* TODAY EARNINGS */}
        <SlipCard styleClass="mb-6">
          <View className="bg-[#3B62E3] p-5 rounded-xl">
            <AppText
              weight="medium"
              style={{ fontSize: 12, color: "white", marginBottom: 6 }}
            >
              TODAY EARNINGS
            </AppText>
            <AppText
              weight="bold"
              style={{ fontSize: 24, color: "white" }}
            >
              ₱ 1,250
            </AppText>
          </View>
        </SlipCard>

        {/* RIDES + HOURS */}
        <View className="flex-row justify-between mb-6">
          <View className="w-[48%]">
            <SlipCard>
              <View className="p-4">
                <AppText weight="medium" style={{ fontSize: 12 }}>
                  TOTAL RIDES
                </AppText>
                <AppText weight="bold" style={{ fontSize: 24 }}>
                  8
                </AppText>
              </View>
            </SlipCard>
          </View>

          <View className="w-[48%]">
            <SlipCard>
              <View className="p-4">
                <AppText weight="medium" style={{ fontSize: 12 }}>
                  HOURS ONLINE
                </AppText>
                <AppText weight="bold" style={{ fontSize: 24 }}>
                  4.5 H
                </AppText>
              </View>
            </SlipCard>
          </View>
        </View>

        {/* VEHICLE DETAILS */}
        <SlipCard styleClass="mb-8">
          <View className="p-5">
            <View className="flex-row justify-between items-center mb-4">
              <AppText weight="bold" style={{ fontSize: 14 }}>
                VEHICLE DETAILS
              </AppText>

              <View className="bg-[#8B92FF] border-[3px] border-black px-3 py-1 rounded-xl">
                <AppText weight="bold" style={{ fontSize: 12 }}>
                  EDIT
                </AppText>
              </View>
            </View>

            <AppText weight="bold" style={{ fontSize: 18, marginBottom: 16 }}>
              YAMAHA NMAX
            </AppText>

            <View className="h-32 bg-[#D9D9D9] border-[3px] border-black rounded-xl mb-4" />

            <View className="bg-[#F66A24] border-[3px] border-black px-4 py-2 rounded-xl self-start mb-4">
              <AppText weight="bold" style={{ fontSize: 12 }}>
                PHILIPPINES
              </AppText>
              <AppText weight="bold" style={{ fontSize: 18 }}>
                ABC-123
              </AppText>
            </View>

            <AppText weight="medium" style={{ fontSize: 12 }}>
              MATTE BLACK
            </AppText>
            <AppText weight="medium" style={{ fontSize: 12 }}>
              2023 MODEL
            </AppText>
          </View>
        </SlipCard>

        {/* PAYOUT SETTINGS */}
        <SlipCard styleClass="mb-4">
          <View className="p-5 flex-row justify-between items-center">
            <AppText weight="bold">
              PAYOUT SETTINGS
            </AppText>
            <Ionicons name="arrow-forward" size={18} />
          </View>
        </SlipCard>

        {/* DRIVER SUPPORT */}
        <SlipCard>
          <View className="p-5 flex-row justify-between items-center">
            <AppText weight="bold">
              DRIVER SUPPORT
            </AppText>
            <Ionicons name="arrow-forward" size={18} />
          </View>
        </SlipCard>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row justify-between items-center">
          <Pressable
            onPress={() => router.push("/Driver/driver-dashboard")}
            className="items-center"
          >
            <Ionicons name="home" size={24} color="black" />
            <AppText weight="bold" style={{ fontSize: 10 }}>
              HOME
            </AppText>
          </Pressable>

          <Pressable
            onPress={() => router.push("/Driver/history")}
            className="items-center"
          >
            <Ionicons name="document-text" size={24} color="#64748b" />
            <AppText weight="bold" style={{ fontSize: 10, color: "#64748b" }}>
              ACTIVITY
            </AppText>
          </Pressable>

            <Pressable
                onPress={() => router.push("/Driver/chat")}
                className="items-center"
              >
                <Ionicons name="chatbubble-ellipses" size={24} color="black" />
                <AppText weight="bold" style={{ fontSize: 10 }}>
                  MESSAGES
                </AppText>
              </Pressable>
    

          <Pressable
            onPress={() => router.push("/Driver/driver-profile")}
            className="items-center"
          >
            <Ionicons name="person-outline" size={24} color="#64748b" />
            <AppText weight="bold" style={{ fontSize: 10, color: "#64748b" }}>
              PROFILE
            </AppText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* =============================
   SLIP CARD
============================= */
function SlipCard({
  children,
  styleClass = "",
}: {
  children: React.ReactNode;
  styleClass?: string;
}) {
  return (
    <View className={`relative ${styleClass}`}>
      <View
        className="absolute bg-black rounded-2xl"
        style={{
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />
      <View className="bg-white border-[3px] border-black rounded-2xl">
        {children}
      </View>
    </View>
  );
}