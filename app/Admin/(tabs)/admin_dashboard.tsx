import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";

/* =============================
   SLIP CARD (New Drop Shadow)
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
      <View className="bg-white border-[3px] border-black rounded-2xl p-3">
        {children}
      </View>
    </View>
  );
}

/* =============================
   STAT CARD
============================= */
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
    <View className="relative">
      <View className="absolute top-1 right-1">{icon}</View>
      <Text className="text-black text-xs font-semibold">{title}</Text>
      <Text className="text-2xl font-bold mt-2">{value}</Text>
      <Text className="text-black text-xs mt-1">{subtitle}</Text>
    </View>
  </SlipCard>
);

/* =============================
   COMMAND BUTTON
============================= */
const CommandButton = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}) => (
  <SlipCard styleClass="mb-3">
    <TouchableOpacity className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="mr-3">{icon}</View>
        <View>
          <Text className="font-bold text-black">{title}</Text>
          {subtitle && <Text className="text-black text-xs">{subtitle}</Text>}
        </View>
      </View>
      <Feather name="arrow-right" size={20} color="black" />
    </TouchableOpacity>
  </SlipCard>
);

/* =============================
   PENDING CARD
============================= */
const PendingCard = () => (
  <SlipCard styleClass="mb-3">
    <View>
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <Text className="font-bold text-black">John Doe</Text>
            <Text className="text-black text-xs">Submitted 2 days ago</Text>
          </View>
        </View>

        <View className="bg-orange-400 px-2 py-1 rounded">
          <Text className="text-white text-xs font-bold">PENDING</Text>
        </View>
      </View>

      {/* Buttons with spacing + DropShadow */}
      <View className="flex-row gap-x-3">

        {/* REVIEW BUTTON */}
        <View className="flex-1 relative">
          <View
            className="absolute bg-black rounded-lg"
            style={{
              width: "100%",
              height: "100%",
              top: 3,
              left: 3,
            }}
          />
          <TouchableOpacity className="flex-1 bg-white border-[2px] border-black rounded-lg py-2 items-center">
            <Text className="text-black font-bold">Review</Text>
          </TouchableOpacity>
        </View>

        {/* APPROVE BUTTON */}
        <View className="flex-1 relative">
          <View
            className="absolute bg-black rounded-lg"
            style={{
              width: "100%",
              height: "100%",
              top: 3,
              left: 3,
            }}
          />
          <TouchableOpacity className="flex-1 bg-white border-[2px] border-black rounded-lg py-2 items-center">
            <Text className="text-black font-bold">Approve</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  </SlipCard>
);

/* =============================
   MAIN ADMIN DASHBOARD
============================= */
export default function AdminDashboard() {
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
            <Text className="text-lg font-bold text-black">
              ADMIN <Text className="text-blue-600">CONSOLE</Text>
            </Text>
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
          <Text className="text-xs font-bold text-black">SYSTEM OPERATIONAL</Text>
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

        {/* Map Box */}
        <SlipCard styleClass="mt-5">
          <TouchableOpacity className="h-40 bg-gray-200 rounded-2xl border-black border relative">
            <View className="absolute top-2 left-2 bg-blue-600 px-3 py-1 rounded">
              <Text className="text-white text-xs font-bold">LIVE GPS VIEW</Text>
            </View>

            <Feather
              name="map"
              size={32}
              color="black"
              style={{ alignSelf: "center", marginTop: 40 }}
            />
            <Text className="text-black mt-2 font-bold text-center">MAP AREA</Text>
          </TouchableOpacity>
        </SlipCard>

        {/* Command Center */}
        <Text className="mt-6 mb-2 font-bold text-black">COMMAND CENTER</Text>

        <CommandButton
          title="Verify Drivers"
          subtitle="Review documents for 12 applicants"
          icon={<FontAwesome5 name="id-card" size={18} color="black" />}
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
              <Text className="mt-2 font-bold text-black">Disputes</Text>
            </TouchableOpacity>
          </SlipCard>

          <SlipCard styleClass="w-[48%]">
            <TouchableOpacity className="items-center py-4">
              <Feather name="volume-2" size={20} color="black" />
              <Text className="mt-2 font-bold text-black">Broadcast</Text>
            </TouchableOpacity>
          </SlipCard>
        </View>

        {/* Pending Verification */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <Text className="font-bold text-black">PENDING VERIFICATION</Text>
          <Text className="text-xs text-blue-600 font-bold">View All (12)</Text>
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