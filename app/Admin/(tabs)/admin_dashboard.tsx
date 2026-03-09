import React from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text as RNText } from "react-native";

/* =============================
   FONT TEXT
============================ */
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

/* =============================
   SLIP CARD (Brutalist Shadow)
============================ */
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
        className="absolute bg-black rounded-2xl"
        style={{
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />

      {/* Card */}
      <View className="bg-white border-[3px] border-black rounded-2xl">
        {children}
      </View>
    </View>
  );
}

/* =============================
   STAT CARD
============================ */
const StatCard = ({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) => (
  <SlipCard styleClass="w-[48%] mb-3">
    <View className="p-3 relative">
      <View className="absolute top-2 right-2">{icon}</View>
      <AppText weight="semibold" style={{ fontSize: 12, color: "black" }}>
        {title}
      </AppText>
      <AppText weight="bold" style={{ fontSize: 24, marginTop: 8 }}>
        {value}
      </AppText>
      <AppText weight="regular" style={{ fontSize: 12, marginTop: 4, color: "black" }}>
        {subtitle}
      </AppText>
    </View>
  </SlipCard>
);

/* =============================
   COMMAND BUTTON
============================ */
const CommandButton = ({
  title,
  subtitle,
  icon,
  onPress,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onPress?: () => void;
}) => (
  <SlipCard styleClass="mb-3">
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between p-3"
    >
      <View className="flex-row items-center">
        <View className="mr-3">{icon}</View>
        <View>
          <AppText weight="bold" style={{ color: "black" }}>{title}</AppText>
          {subtitle && <AppText style={{ fontSize: 12, color: "black" }}>{subtitle}</AppText>}
        </View>
      </View>
      <Feather name="arrow-right" size={20} color="black" />
    </TouchableOpacity>
  </SlipCard>
);

/* =============================
   PENDING CARD
============================ */
const PendingCard = () => (
  <SlipCard styleClass="mb-3">
    <View className="p-3">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <AppText weight="bold" style={{ color: "black" }}>John Doe</AppText>
            <AppText style={{ fontSize: 12, color: "black" }}>Submitted 2 days ago</AppText>
          </View>
        </View>

        <View className="bg-orange-400 px-2 py-1 rounded">
          <AppText weight="bold" style={{ fontSize: 12, color: "white" }}>PENDING</AppText>
        </View>
      </View>

      <View className="flex-row gap-x-3">
        <View className="flex-1 relative">
          <View
            className="absolute bg-black rounded-lg"
            style={{ width: "100%", height: "100%", top: 3, left: 3 }}
          />
          <TouchableOpacity className="flex-1 bg-white border-[2px] border-black rounded-lg py-2 items-center">
            <AppText weight="bold" style={{ color: "black" }}>Review</AppText>
          </TouchableOpacity>
        </View>

        <View className="flex-1 relative">
          <View
            className="absolute bg-black rounded-lg"
            style={{ width: "100%", height: "100%", top: 3, left: 3 }}
          />
          <TouchableOpacity className="flex-1 bg-white border-[2px] border-black rounded-lg py-2 items-center">
            <AppText weight="bold" style={{ color: "black" }}>Approve</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SlipCard>
);

/* =============================
   MAIN ADMIN DASHBOARD
============================ */
export default function AdminDashboard() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">

        {/* Header */}
        <View className="flex-row justify-between items-center mb-4 border-b border-black pb-2">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={{ width: 28, height: 28, marginRight: 8 }}
            />
            <AppText weight="bold" style={{ fontSize: 18, color: "black" }}>
              ADMIN <AppText weight="bold" style={{ color: "#2563EB" }}>CONSOLE</AppText>
            </AppText>
          </View>

          <View className="flex-row space-x-3">
            <TouchableOpacity className="w-9 h-9 border border-black rounded-md items-center justify-center bg-white">
              <Feather name="bell" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity className="w-9 h-9 border border-black rounded-md items-center justify-center bg-white">
              <Feather name="user" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Status */}
        <View className="flex-row items-center mb-4">
          <View className="w-2 h-2 bg-green-600 rounded-full mr-2" />
          <AppText weight="bold" style={{ fontSize: 12, color: "black" }}>SYSTEM OPERATIONAL</AppText>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between flex-wrap gap-y-3">
          <StatCard
            title="Today's Revenue"
            value="$14,203"
            subtitle="+12%"
            icon={<Feather name="bell" size={16} color="black" />}
          />
          <StatCard
            title="Active Rides"
            value="342"
            subtitle="+12%"
            icon={<FontAwesome5 name="motorcycle" size={16} color="black" />}
          />
          <StatCard
            title="Pending Drivers"
            value="12"
            subtitle="Requires Attention"
            icon={<Feather name="user-check" size={16} color="black" />}
          />
          <StatCard
            title="Online Fleet"
            value="85"
            subtitle="Stable"
            icon={<Feather name="shield" size={16} color="black" />}
          />
        </View>

        {/* Map */}
        <SlipCard styleClass="mt-5">
          <TouchableOpacity className="h-40 bg-gray-200 rounded-2xl border-black border relative items-center justify-center">
            <View className="absolute top-2 left-2 bg-blue-600 px-3 py-1 rounded">
              <AppText weight="bold" style={{ fontSize: 12, color: "white" }}>LIVE GPS VIEW</AppText>
            </View>

            <Feather name="map" size={32} color="black" />
            <AppText weight="bold" style={{ color: "black", marginTop: 8 }}>MAP AREA</AppText>
          </TouchableOpacity>
        </SlipCard>

        {/* Command Center */}
        <AppText weight="bold" style={{ marginTop: 24, marginBottom: 8, color: "black" }}>COMMAND CENTER</AppText>

        <CommandButton
          title="Verify Drivers"
          subtitle="Review documents for 12 applicants"
          icon={<FontAwesome5 name="id-card" size={18} color="black" />}
          onPress={() => router.push("/Admin/applicants")}
        />

        <CommandButton
          title="User Management"
          subtitle="Manage riders and drivers profile"
          icon={<Feather name="users" size={18} color="black" />}
        />

        {/* Disputes + Broadcast */}
        <View className="flex-row justify-between mt-2">
          <SlipCard styleClass="w-[48%]">
            <TouchableOpacity className="items-center py-4">
              <MaterialIcons name="gavel" size={20} color="black" />
              <AppText weight="bold" style={{ marginTop: 8, color: "black" }}>Disputes</AppText>
            </TouchableOpacity>
          </SlipCard>

          <SlipCard styleClass="w-[48%]">
            <TouchableOpacity className="items-center py-4">
              <Feather name="volume-2" size={20} color="black" />
              <AppText weight="bold" style={{ marginTop: 8, color: "black" }}>Broadcast</AppText>
            </TouchableOpacity>
          </SlipCard>
        </View>

        {/* Pending Verification */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <AppText weight="bold" style={{ color: "black" }}>PENDING VERIFICATION</AppText>

          <TouchableOpacity onPress={() => router.push("/Admin/applicants")}>
            <AppText weight="bold" style={{ fontSize: 12, color: "#2563EB" }}>View All (12)</AppText>
          </TouchableOpacity>
        </View>

        <PendingCard />
        <PendingCard />

      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-white py-3 border-t border-black">
        <Feather name="grid" size={22} color="black" />
        <Feather name="users" size={22} color="black" />
        <Feather name="map" size={22} color="black" />
        <Feather name="settings" size={22} color="black" />
      </View>
    </View>
  );
}