import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Pressable,
  Text,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { COLORS, FONTS, SIZES, BORDER } from "../../../constants/Theme";

export default function DriverRideHistory() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayMedium }}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomWidth: BORDER.thick,
          borderColor: COLORS.black,
          backgroundColor: COLORS.surface,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xl }}>
          RIDE HISTORY
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              borderWidth: BORDER.thin + 1,
              borderColor: COLORS.black,
              padding: 8,
              marginRight: 8,
              backgroundColor: COLORS.surface,
            }}
          >
            <Feather name="filter" size={16} color={COLORS.black} />
          </Pressable>

          <Pressable
            style={{
              borderWidth: BORDER.thin + 1,
              borderColor: COLORS.black,
              padding: 8,
              backgroundColor: COLORS.surface,
            }}
          >
            <Feather name="download" size={16} color={COLORS.black} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 18, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* MONTH LABEL */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
          <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm }}>
            OCTOBER 2023
          </Text>
          <View style={{ flex: 1, height: 2, backgroundColor: COLORS.black, marginLeft: 16 }} />
        </View>

        {/* RIDE CARD */}
        <SlipCard styleClass="mb-6">
          <View style={{ padding: 16 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
              <View
                style={{
                  backgroundColor: COLORS.green,
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 6,
                  borderWidth: BORDER.thin,
                  borderColor: COLORS.black,
                }}
              >
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xs }}>
                  COMPLETED
                </Text>
              </View>

              <Text style={{ fontFamily: FONTS.bold }}>
                ₱12.50
              </Text>
            </View>

            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.sm, marginBottom: 8 }}>
              Oct 24 • 2:30PM
            </Text>

            {/* PICKUP */}
            <View style={{ flexDirection: "row", marginBottom: 16 }}>
              <View style={{ alignItems: "center", marginRight: 12 }}>
                <View style={{ width: 12, height: 12, backgroundColor: COLORS.black, borderRadius: 6 }} />
                <View style={{ width: 2, flex: 1, backgroundColor: COLORS.black }} />
              </View>

              <View>
                <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.xs }}>
                  PICKUP
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.sm }}>
                  Ayala Center Cebu
                </Text>
              </View>
            </View>

            {/* DROP OFF */}
            <View style={{ flexDirection: "row", marginBottom: 16 }}>
              <View style={{ marginRight: 12 }}>
                <Ionicons name="location" size={16} color={COLORS.black} />
              </View>

              <View>
                <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.xs }}>
                  DROP-OFF
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.sm }}>
                  IT Park, Cebu City
                </Text>
              </View>
            </View>

            {/* BOTTOM INFO */}
            <View
              style={{
                borderTopWidth: BORDER.thin + 1,
                borderColor: COLORS.black,
                paddingTop: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 24 }}>
                  <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.xs }}>
                    DURATION
                  </Text>
                  <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.sm }}>
                    15min
                  </Text>
                </View>

                <View>
                  <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.xs }}>
                    DISTANCE
                  </Text>
                  <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.sm }}>
                    3.5km
                  </Text>
                </View>
              </View>

              <Pressable
                style={{
                  borderWidth: BORDER.thin + 1,
                  borderColor: COLORS.black,
                  padding: 8,
                  backgroundColor: COLORS.surface,
                }}
              >
                <Ionicons name="arrow-forward" size={14} color={COLORS.black} />
              </Pressable>
            </View>
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
          borderRadius: 12,
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
          borderRadius: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
}