import React, { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS, FONTS, SIZES, BORDER } from "../../../constants/Theme";

export default function DriverChat() {
  const [message, setMessage] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayMedium }}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View
        style={{
          backgroundColor: COLORS.surface,
          borderBottomWidth: BORDER.thick,
          borderColor: COLORS.black,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={COLORS.black} />
        </Pressable>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: COLORS.grayLight,
              borderRadius: 50,
              marginRight: 8,
            }}
          />
          <View>
            <Text style={{ fontFamily: FONTS.bold }}>
              JUAN DELA CRUZ
            </Text>
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.xs,
              }}
            >
              Driver • 4.9
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              backgroundColor: COLORS.red,
              borderWidth: BORDER.thin + 1,
              borderColor: COLORS.black,
              padding: 8,
              marginRight: 8,
            }}
          >
            <Ionicons name="warning" size={16} color={COLORS.surface} />
          </Pressable>

          <Pressable
            style={{
              backgroundColor: COLORS.blue,
              borderWidth: BORDER.thin + 1,
              borderColor: COLORS.black,
              padding: 8,
            }}
          >
            <Ionicons name="call" size={16} color={COLORS.surface} />
          </Pressable>
        </View>
      </View>

      {/* ARRIVAL BANNER */}
      <View
        style={{
          backgroundColor: COLORS.yellow,
          borderBottomWidth: BORDER.thick,
          borderColor: COLORS.black,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.sm }}>
          ARRIVING IN 5 MINUTES • SEE YOU!
        </Text>
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
        <View style={{ alignItems: "center", marginBottom: 16 }}>
          <View
            style={{
              backgroundColor: COLORS.surface,
              borderWidth: BORDER.thin + 1,
              borderColor: COLORS.black,
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 50,
            }}
          >
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.xs }}>
              Today 4:20 PM
            </Text>
          </View>
        </View>

        {/* LEFT MESSAGE */}
        <View style={{ alignSelf: "flex-start", maxWidth: "75%", marginBottom: 16 }}>
          <SlipBubble>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
              I am near the landmark. Waiting at the corner of 7-Eleven
            </Text>
          </SlipBubble>
        </View>

        {/* RIGHT MESSAGE */}
        <View style={{ alignSelf: "flex-end", maxWidth: "75%", marginBottom: 16 }}>
          <SlipBubble color={COLORS.secondary}>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
              Okay, I am wearing a red helmet and a black jacket.
            </Text>
          </SlipBubble>
        </View>

        {/* LEFT MESSAGE */}
        <View style={{ alignSelf: "flex-start", maxWidth: "75%", marginBottom: 16 }}>
          <SlipBubble>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
              Okay see you in a bit!
            </Text>
          </SlipBubble>
        </View>
      </ScrollView>

      {/* INPUT AREA */}
      <View
        style={{
          borderTopWidth: BORDER.thin + 1,
          borderColor: COLORS.black,
          backgroundColor: COLORS.surface,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: Math.max(insets.bottom + 60, 80),
        }}
      >
        <View
          style={{
            flex: 1,
            borderWidth: BORDER.thin + 1,
            borderColor: COLORS.black,
            marginRight: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: COLORS.surface,
          }}
        >
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            placeholderTextColor={COLORS.grayText}
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.sm,
            }}
          />
        </View>

        <Pressable
          style={{
            backgroundColor: COLORS.blue,
            borderWidth: BORDER.thin + 1,
            borderColor: COLORS.black,
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
        >
          <Ionicons name="send" size={16} color={COLORS.surface} />
        </Pressable>
      </View>

{/* BOTTOM NAV */}
<View
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: BORDER.thick + 1,
    borderColor: COLORS.black,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: Math.max(insets.bottom, 12),
  }}
>
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

    <Pressable
      onPress={() => router.push("/Driver/driver-dashboard")}
      style={{ alignItems: "center" }}
    >
      <Ionicons name="home" size={24} color={COLORS.black} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: SIZES.xs,
          color: COLORS.black,
        }}
      >
        HOME
      </Text>
    </Pressable>

    <Pressable
      onPress={() => router.push("/Driver/history")}
      style={{ alignItems: "center" }}
    >
      <Ionicons name="document-text" size={24} color={COLORS.grayText} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: SIZES.xs,
          color: COLORS.grayText,
        }}
      >
        ACTIVITY
      </Text>
    </Pressable>

    <Pressable
      onPress={() => router.push("/Driver/chat")}
      style={{ alignItems: "center" }}
    >
      <Ionicons name="chatbubble-ellipses" size={24} color={COLORS.black} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: SIZES.xs,
          color: COLORS.black,
        }}
      >
        MESSAGES
      </Text>
    </Pressable>

    <Pressable
      onPress={() => router.push("/Driver/driver-profile")}
      style={{ alignItems: "center" }}
    >
      <Ionicons name="person-outline" size={24} color={COLORS.grayText} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: SIZES.xs,
          color: COLORS.grayText,
        }}
      >
        PROFILE
      </Text>
    </Pressable>

  </View>
</View>
    </SafeAreaView>
  );
}

/* SLIP BUBBLE */
function SlipBubble({ children, color = COLORS.surface }: any) {
  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          position: "absolute",
          backgroundColor: COLORS.black,
          borderRadius: 12,
          width: "100%",
          height: "100%",
          top: 3,
          left: 3,
        }}
      />
      <View
        style={{
          backgroundColor: color,
          borderWidth: BORDER.thin + 1,
          borderColor: COLORS.black,
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
}

/* NAV ITEM */
function NavItem({ label, icon, active = false }: any) {
  return (
    <Pressable style={{ alignItems: "center" }}>
      <Ionicons
        name={icon}
        size={24}
        color={active ? COLORS.black : COLORS.grayText}
      />
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.xs,
          color: active ? COLORS.black : COLORS.grayText,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}