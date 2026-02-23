import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Pressable,
  Text as RNText,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

/* =============================
   FONT TEXT
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

export default function DriverRideHistory() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1 bg-[#D9D9D9]">
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View className="px-5 py-5 border-b-[3px] border-black bg-white flex-row justify-between items-center">
        <AppText weight="bold" style={{ fontSize: 18 }}>
          RIDE HISTORY
        </AppText>

        <View className="flex-row">
          <Pressable className="border-[2px] border-black p-2 mr-2 bg-white">
            <Feather name="filter" size={16} />
          </Pressable>
          <Pressable className="border-[2px] border-black p-2 bg-white">
            <Feather name="download" size={16} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 18, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* MONTH LABEL */}
        <View className="flex-row items-center mb-6">
          <AppText weight="medium" style={{ fontSize: 12 }}>
            OCTOBER 2023
          </AppText>
          <View className="flex-1 h-[2px] bg-black ml-4" />
        </View>

        {/* RIDE CARD 1 */}
        <SlipCard styleClass="mb-6">
          <View className="p-4">
            {/* TOP ROW */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="bg-green-500 px-3 py-1 rounded-md border border-black">
                <AppText weight="bold" style={{ fontSize: 10 }}>
                  COMPLETED
                </AppText>
              </View>

              <AppText weight="bold">$12.50</AppText>
            </View>

            <AppText weight="medium" style={{ fontSize: 12, marginBottom: 8 }}>
              Oct 24 • 2:30PM
            </AppText>

            {/* PICKUP */}
            <View className="flex-row mb-4">
              <View className="items-center mr-3">
                <View className="w-3 h-3 bg-black rounded-full" />
                <View className="w-[2px] flex-1 bg-black" />
              </View>

              <View>
                <AppText weight="medium" style={{ fontSize: 11 }}>
                  PICKUP
                </AppText>
                <AppText weight="bold" style={{ fontSize: 13 }}>
                  Ayala Center Cebu
                </AppText>
              </View>
            </View>

            {/* DROP OFF */}
            <View className="flex-row mb-4">
              <View className="items-center mr-3">
                <Ionicons name="location" size={16} />
              </View>

              <View>
                <AppText weight="medium" style={{ fontSize: 11 }}>
                  DROP-OFF
                </AppText>
                <AppText weight="bold" style={{ fontSize: 13 }}>
                  IT Park, Cebu City
                </AppText>
              </View>
            </View>

            {/* BOTTOM INFO */}
            <View className="border-t-[2px] border-black pt-3 flex-row justify-between items-center">
              <View className="flex-row">
                <View className="mr-6">
                  <AppText weight="medium" style={{ fontSize: 10 }}>
                    DURATION
                  </AppText>
                  <AppText weight="bold" style={{ fontSize: 12 }}>
                    15min
                  </AppText>
                </View>

                <View>
                  <AppText weight="medium" style={{ fontSize: 10 }}>
                    DISTANCE
                  </AppText>
                  <AppText weight="bold" style={{ fontSize: 12 }}>
                    3.5km
                  </AppText>
                </View>
              </View>

              <Pressable className="border-[2px] border-black p-2 bg-white">
                <Ionicons name="arrow-forward" size={14} />
              </Pressable>
            </View>
          </View>
        </SlipCard>

        {/* SECOND RIDE CARD */}
        <SlipCard>
          <View className="p-4">
            <View className="flex-row justify-between items-center mb-3">
              <View className="bg-green-500 px-3 py-1 rounded-md border border-black">
                <AppText weight="bold" style={{ fontSize: 10 }}>
                  COMPLETED
                </AppText>
              </View>

              <AppText weight="bold">$8.20</AppText>
            </View>

            <AppText weight="medium" style={{ fontSize: 12, marginBottom: 8 }}>
              Oct 22 • 9:30AM
            </AppText>

            <View className="flex-row mb-4">
              <View className="items-center mr-3">
                <View className="w-3 h-3 bg-black rounded-full" />
                <View className="w-[2px] flex-1 bg-black" />
              </View>

              <View>
                <AppText weight="medium" style={{ fontSize: 11 }}>
                  PICKUP
                </AppText>
                <AppText weight="bold" style={{ fontSize: 13 }}>
                  IT Park, Cebu City
                </AppText>
              </View>
            </View>

            <View className="flex-row mb-4">
              <View className="items-center mr-3">
                <Ionicons name="location" size={16} />
              </View>

              <View>
                <AppText weight="medium" style={{ fontSize: 11 }}>
                  DROP-OFF
                </AppText>
                <AppText weight="bold" style={{ fontSize: 13 }}>
                  Mandaue Hotel, Cebu City
                </AppText>
              </View>
            </View>

            <View className="border-t-[2px] border-black pt-3 flex-row justify-between items-center">
              <View className="flex-row">
                <View className="mr-6">
                  <AppText weight="medium" style={{ fontSize: 10 }}>
                    DURATION
                  </AppText>
                  <AppText weight="bold" style={{ fontSize: 12 }}>
                    10min
                  </AppText>
                </View>

                <View>
                  <AppText weight="medium" style={{ fontSize: 10 }}>
                    DISTANCE
                  </AppText>
                  <AppText weight="bold" style={{ fontSize: 12 }}>
                    1.6km
                  </AppText>
                </View>
              </View>

              <Pressable className="border-[2px] border-black p-2 bg-white">
                <Ionicons name="arrow-forward" size={14} />
              </Pressable>
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
      
                <Pressable className="items-center">
                  <Ionicons name="chatbubble-ellipses" size={24} color="#64748b" />
                  <AppText weight="bold" style={{ fontSize: 10, color: "#64748b" }}>
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
        className="absolute bg-black rounded-xl"
        style={{
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />
      <View className="bg-white border-[3px] border-black rounded-xl">
        {children}
      </View>
    </View>
  );
}