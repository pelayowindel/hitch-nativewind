import React, { useState } from "react";
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
import { COLORS, BORDER, SIZES, FONTS } from "../../../constants/Theme";

export default function DriverDashboard() {
  const [online, setOnline] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View
        style={{
          borderBottomWidth: BORDER.thick,
          borderColor: COLORS.black,
          backgroundColor: COLORS.grayLight,
        }}
        className="flex-row items-center justify-between px-6 py-4"
      >
        <View className="flex-row items-center">
          <View
            style={{
              borderWidth: BORDER.thick,
              borderColor: COLORS.black,
              backgroundColor: COLORS.surface,
            }}
            className="w-12 h-12 mr-3 justify-center items-center rounded-md"
          >
            <AntDesign name="user" size={22} color={COLORS.black} />
          </View>
          <View>
            <Text style={{ fontSize: SIZES.xs, color: COLORS.grayText }}>
              Driver
            </Text>
            <Text style={{ fontSize: SIZES.sm }}>
              Juan Dela Cruz
            </Text>
          </View>
        </View>
        <MaterialIcons
          name="notifications"
          size={26}
          color={COLORS.primary}
        />
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
                  <View
                    style={{ backgroundColor: COLORS.green }}
                    className="w-3 h-3 rounded-full mr-2"
                  />
                  <Text style={{ fontSize: SIZES.sm }}>
                    YOU ARE ONLINE
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: SIZES.xs,
                    color: COLORS.grayText,
                    marginTop: 4,
                  }}
                >
                  Visible to Passengers
                </Text>
              </View>

              <Switch
                value={online}
                onValueChange={setOnline}
                thumbColor={COLORS.surface}
                trackColor={{
                  true: COLORS.green,
                  false: COLORS.grayMedium,
                }}
              />
            </View>
          </View>
        </SlipCard>

        {/* STATS */}
        <View className="flex-row justify-between mb-6">
          <View className="w-[48%]">
            <SlipCard>
              <View
                style={{ backgroundColor: COLORS.blue }}
                className="p-5 rounded-xl"
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.black,
                    backgroundColor: COLORS.surface,
                  }}
                  className="px-3 py-1 mb-20"
                >
                  <Text style={{ fontSize: SIZES.xs }}>
                    EARNINGS
                  </Text>
                </View>
                <Text style={{ fontSize: 22 }}>
                  ₱ 1,250
                </Text>
                <Text style={{ fontSize: SIZES.xs }}>
                  ₱ 120 today
                </Text>
              </View>
            </SlipCard>
          </View>

          <View className="w-[48%] justify-between">
            <SlipCard styleClass="mb-4">
              <View
                style={{ backgroundColor: COLORS.primary }}
                className="p-5 rounded-xl flex-row justify-between items-center"
              >
                <View>
                  <Text style={{ fontSize: SIZES.xs }}>
                    RIDES
                  </Text>
                  <Text style={{ fontSize: 22 }}>
                    8
                  </Text>
                </View>
                <Ionicons
                  name="bicycle"
                  size={22}
                  color={COLORS.black}
                />
              </View>
            </SlipCard>

            <SlipCard>
              <View
                style={{ backgroundColor: COLORS.grayMedium }}
                className="p-5 rounded-xl"
              >
                <Text style={{ fontSize: SIZES.xs }}>
                  RATINGS
                </Text>
                <View className="flex-row items-center">
                  <Text style={{ fontSize: 22, marginRight: 6 }}>
                    4.9
                  </Text>
                  <Ionicons
                    name="star"
                    size={18}
                    color={COLORS.yellow}
                  />
                </View>
              </View>
            </SlipCard>
          </View>
        </View>

        {/* RIDE CARD */}
        <SlipCard>
          <View className="overflow-hidden rounded-xl">

            {/* MAP */}
            <View
              style={{
                backgroundColor: COLORS.grayMedium,
                borderBottomWidth: BORDER.thick,
                borderColor: COLORS.black,
              }}
              className="h-28 justify-center items-center"
            >
              <Text>MAP AREA</Text>
            </View>

            <View className="p-6">

              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <View
                    style={{ backgroundColor: COLORS.black }}
                    className="w-12 h-12 justify-center items-center mr-3"
                  >
                    <Text style={{ color: COLORS.surface }}>
                      MJ
                    </Text>
                  </View>

                  <View>
                    <Text style={{ fontSize: SIZES.sm }}>
                      Mary Jane
                    </Text>

                    <View className="flex-row items-center mt-1">
                      <View
                        style={{ backgroundColor: COLORS.yellow }}
                        className="px-2 py-[2px] mr-2"
                      >
                        <Text style={{ fontSize: SIZES.xs }}>
                          4.8
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: SIZES.xs,
                          color: COLORS.grayText,
                        }}
                      >
                        Cash Payment
                      </Text>
                    </View>
                  </View>
                </View>

                <Text style={{ fontSize: SIZES.md }}>
                  ₱ 145
                </Text>
              </View>
{/* PICKUP */}
<View style={{ flexDirection: "row", marginBottom: 12 }}>
  <View
    style={{
      width: 12,
      height: 12,
      backgroundColor: COLORS.blue,
      borderRadius: 50,
      marginTop: 4,
      marginRight: 12,
    }}
  />
  <View>
    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.xs,
        color: COLORS.grayText,
      }}
    >
      PICK UP (2.3 KM)
    </Text>

    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.sm,
      }}
    >
      SM MALL OF ASIA , NORTH WING
    </Text>
  </View>
</View>

{/* DROP OFF */}
<View style={{ flexDirection: "row", marginBottom: 24 }}>
  <View
    style={{
      width: 12,
      height: 12,
      backgroundColor: COLORS.red,
      marginTop: 4,
      marginRight: 12,
    }}
  />
  <View>
    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.xs,
        color: COLORS.grayText,
      }}
    >
      DROP OFF
    </Text>

    <Text
      style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.sm,
      }}
    >
      AYALA TRIANGLE GARDENS
    </Text>
  </View>
</View>
              {!accepted && (
                <View className="flex-row justify-between">
                  <TouchableOpacity
                    style={{
                      width: "22%",
                      borderWidth: BORDER.thick,
                      borderColor: COLORS.black,
                      backgroundColor: COLORS.surface,
                    }}
                    className="rounded-xl py-3 items-center"
                  >
                    <Text>X</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setAccepted(true)}
                    style={{
                      width: "72%",
                      backgroundColor: COLORS.black,
                    }}
                    className="rounded-xl py-3 items-center"
                  >
                    <Text style={{ color: COLORS.surface }}>
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
   SLIP CARD (Brutalist Shadow)
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
      {/* Shadow */}
      <View
        style={{
          position: "absolute",
          backgroundColor: COLORS.black,
          borderRadius: 16,
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
          borderRadius: 16,
        }}
      >
        {children}
      </View>
    </View>
  );
}