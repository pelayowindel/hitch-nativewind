import React, { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TextInput,
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
   FONT WRAPPER
============================= */
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

export default function DriverChat() {
  const [message, setMessage] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#D9D9D9]">
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View className="bg-white border-b-[3px] border-black px-4 py-3 flex-row items-center justify-between">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} />
        </Pressable>

        <View className="flex-row items-center">
          <View className="w-8 h-8 bg-gray-300 rounded-full mr-2" />
          <View>
            <AppText weight="bold">JUAN DELA CRUZ</AppText>
            <AppText weight="medium" style={{ fontSize: 10 }}>
              Driver • 4.9
            </AppText>
          </View>
        </View>

        <View className="flex-row">
          <Pressable className="bg-red-500 border-[2px] border-black p-2 mr-2">
            <Ionicons name="warning" size={16} color="white" />
          </Pressable>

          <Pressable className="bg-blue-500 border-[2px] border-black p-2">
            <Ionicons name="call" size={16} color="white" />
          </Pressable>
        </View>
      </View>

      {/* ARRIVAL BANNER */}
      <View className="bg-yellow-400 border-b-[3px] border-black px-4 py-2">
        <AppText weight="bold" style={{ fontSize: 12 }}>
          ARRIVING IN 5 MINUTES • SEE YOU!
        </AppText>
      </View>

      {/* CHAT AREA */}
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 160,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* DATE */}
        <View className="items-center mb-4">
          <View className="bg-white border-[2px] border-black px-3 py-1 rounded-full">
            <AppText weight="medium" style={{ fontSize: 10 }}>
              Today 4:20 PM
            </AppText>
          </View>
        </View>

        {/* LEFT MESSAGE */}
        <View className="self-start max-w-[75%] mb-4">
          <SlipBubble>
            <AppText weight="medium" style={{ fontSize: 12 }}>
              I am near the landmark. Waiting at the corner of 7-Eleven
            </AppText>
          </SlipBubble>
        </View>

        {/* RIGHT MESSAGE */}
        <View className="self-end max-w-[75%] mb-4">
          <SlipBubble color="#7EC8E3">
            <AppText weight="medium" style={{ fontSize: 12 }}>
              Okay, I am wearing a red helmet and a black jacket.
            </AppText>
          </SlipBubble>
        </View>

        {/* LEFT MESSAGE */}
        <View className="self-start max-w-[75%] mb-4">
          <SlipBubble>
            <AppText weight="medium" style={{ fontSize: 12 }}>
              Okay see you in a bit!
            </AppText>
          </SlipBubble>
        </View>
      </ScrollView>

      {/* INPUT AREA */}
      <View
        className="border-t-[2px] border-black bg-white px-4 py-3 flex-row items-center"
        style={{ paddingBottom: Math.max(insets.bottom + 60, 80) }}
      >
        <View className="flex-1 border-[2px] border-black mr-2 px-3 py-2 bg-white">
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            style={{
              fontFamily: "PlusJakartaRegular",
              fontSize: 12,
            }}
          />
        </View>

        <Pressable className="bg-blue-500 border-[2px] border-black px-4 py-3">
          <Ionicons name="send" size={16} color="white" />
        </Pressable>
      </View>

      {/* ================= BOTTOM NAV ================= */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row justify-between items-center">

          <Pressable
            onPress={() => router.push("/Driver/driver-dashboard")}
            className="items-center"
          >
            <Ionicons name="home" size={24} color="#64748b" />
            <AppText weight="bold" style={{ fontSize: 10, color: "#64748b" }}>
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

          {/* ACTIVE */}
          <Pressable className="items-center">
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
   SLIP CHAT BUBBLE
============================= */
function SlipBubble({
  children,
  color = "white",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <View className="relative">
      <View
        className="absolute bg-black rounded-xl"
        style={{ width: "100%", height: "100%", top: 3, left: 3 }}
      />
      <View
        style={{ backgroundColor: color }}
        className="border-[2px] border-black rounded-xl px-4 py-3"
      >
        {children}
      </View>
    </View>
  );
}