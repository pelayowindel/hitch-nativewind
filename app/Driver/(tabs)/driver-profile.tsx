import React, { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
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

export default function DriverProfile() {
  const [online, setOnline] = useState(true);
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
          paddingVertical: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="arrow-back" size={22} color={COLORS.black} />
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.lg }}>
          DRIVERS ID: D-402
        </Text>
        <Ionicons name="settings-outline" size={22} color={COLORS.black} />
      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 18,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE IMAGE */}
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                width: 160,
                height: 160,
                backgroundColor: COLORS.secondary,
                borderRadius: BORDER.radius,
              }}
            />
            <View
              style={{
                width: 160,
                height: 160,
                backgroundColor: COLORS.grayLight,
                borderWidth: BORDER.thick,
                borderColor: COLORS.black,
                borderRadius: BORDER.radius,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: FONTS.medium, color: COLORS.grayText }}>
                IMAGE
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: -12,
                right: -12,
                backgroundColor: COLORS.surface,
                borderWidth: BORDER.thick,
                borderColor: COLORS.black,
                paddingHorizontal: 16,
                paddingVertical: 4,
                borderRadius: 12,
                transform: [{ rotate: "-6deg" }],
              }}
            >
              <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.lg }}>
                4.9
              </Text>
            </View>
          </View>
        </View>

        {/* STATUS */}
        <SlipCard styleClass="mb-6">
          <View style={{ padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    marginRight: 8,
                    backgroundColor: online ? COLORS.green : COLORS.grayText,
                  }}
                />
                <Text style={{ fontFamily: FONTS.bold }}>
                  STATUS : {online ? "ONLINE" : "OFFLINE"}
                </Text>
              </View>
              <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm, color: COLORS.grayText }}>
                VISIBLE TO NEARBY RIDERS
              </Text>
            </View>
            <Pressable
              onPress={() => setOnline(!online)}
              style={{
                width: 56,
                height: 28,
                borderRadius: 20,
                paddingHorizontal: 4,
                justifyContent: "center",
                backgroundColor: online ? COLORS.green : COLORS.grayMedium,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: COLORS.surface,
                  alignSelf: online ? "flex-end" : "flex-start",
                }}
              />
            </Pressable>
          </View>
        </SlipCard>

        {/* TODAY EARNINGS */}
        <SlipCard styleClass="mb-6">
          <View style={{ backgroundColor: COLORS.blue, padding: 20, borderRadius: 12 }}>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm, color: COLORS.surface, marginBottom: 6 }}>
              TODAY EARNINGS
            </Text>
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xxl, color: COLORS.surface }}>
              ₱ 1,250
            </Text>
          </View>
        </SlipCard>

        {/* RIDES + HOURS */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }}>
          <View style={{ width: "48%" }}>
            <SlipCard>
              <View style={{ padding: 16 }}>
                <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
                  TOTAL RIDES
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xxl }}>
                  8
                </Text>
              </View>
            </SlipCard>
          </View>

          <View style={{ width: "48%" }}>
            <SlipCard>
              <View style={{ padding: 16 }}>
                <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
                  HOURS ONLINE
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xxl }}>
                  4.5 H
                </Text>
              </View>
            </SlipCard>
          </View>
        </View>

{/* VEHICLE DETAILS */}
<SlipCard styleClass="mb-8">
  <View className="p-5">
    <View className="flex-row justify-between items-center mb-4">
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.md,
        }}
      >
        VEHICLE DETAILS
      </Text>

      <View
        style={{
          backgroundColor: COLORS.secondary,
          borderWidth: BORDER.thick,
          borderColor: COLORS.black,
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.sm,
          }}
        >
          EDIT
        </Text>
      </View>
    </View>

    <Text
      style={{
        fontFamily: FONTS.bold,
        fontSize: SIZES.xl,
        marginBottom: 16,
      }}
    >
      YAMAHA NMAX
    </Text>

    <View
      style={{
        height: 128,
        backgroundColor: COLORS.grayMedium,
        borderWidth: BORDER.thick,
        borderColor: COLORS.black,
        borderRadius: BORDER.radius,
        marginBottom: 16,
      }}
    />

    <View
      style={{
        backgroundColor: COLORS.primary,
        borderWidth: BORDER.thick,
        borderColor: COLORS.black,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.sm,
        }}
      >
        PHILIPPINES
      </Text>

      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.lg,
        }}
      >
        ABC-123
      </Text>
    </View>

    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.sm,
      }}
    >
      MATTE BLACK
    </Text>

    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.sm,
      }}
    >
      2023 MODEL
    </Text>
  </View>
</SlipCard>

        {/* PAYOUT SETTINGS */}
        <SlipCard styleClass="mb-4">
          <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontFamily: FONTS.bold }}>
              PAYOUT SETTINGS
            </Text>
            <Ionicons name="arrow-forward" size={18} color={COLORS.black} />
          </View>
        </SlipCard>

        {/* DRIVER SUPPORT */}
        <SlipCard>
          <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontFamily: FONTS.bold }}>
              DRIVER SUPPORT
            </Text>
            <Ionicons name="arrow-forward" size={18} color={COLORS.black} />
          </View>
        </SlipCard>
      </ScrollView>

     
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

/* =============================
   SLIP CARD
============================= */
function SlipCard({ children, styleClass = "" }: any) {
  return (
    <View className={`relative ${styleClass}`}>
      <View
        style={{
          position: "absolute",
          backgroundColor: COLORS.black,
          borderRadius: BORDER.radius,
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />
      <View
        style={{
          backgroundColor: COLORS.surface,
          borderWidth: BORDER.thick,
          borderColor: COLORS.black,
          borderRadius: BORDER.radius,
        }}
      >
        {children}
      </View>
    </View>
  );
}