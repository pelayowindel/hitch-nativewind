import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text as RNText,
} from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* ============================================================================
   APP TEXT
============================================================================ */
function AppText({ children, weight = "regular", style }: any) {
  const fontMap: any = {
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

/* ============================================================================
   SLIP CARD
============================================================================ */
function SlipCard({ children, styleClass = "" }: any) {
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

/* ============================================================================
   STAT CARD
============================================================================ */
const StatCard = ({ title, value, subtitle, icon }: any) => (
  <SlipCard styleClass="w-[48%] mb-3">
    <View className="p-3 relative">
      <View className="absolute top-2 right-2">{icon}</View>

      <AppText weight="semibold" style={{ fontSize: 12 }}>
        {title}
      </AppText>

      <AppText weight="bold" style={{ fontSize: 24, marginTop: 8 }}>
        {value}
      </AppText>

      <AppText style={{ fontSize: 12, marginTop: 4 }}>
        {subtitle}
      </AppText>
    </View>
  </SlipCard>
);

/* ============================================================================
   PENDING CARD
============================================================================ */
const PendingCard = ({ router }: any) => (
  <SlipCard styleClass="mb-3">
    <View className="p-3">

      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />

          <View>
            <AppText weight="bold">John Doe</AppText>
            <AppText style={{ fontSize: 12 }}>
              Submitted 2 days ago
            </AppText>
          </View>
        </View>

        <View className="bg-orange-400 px-2 py-1 rounded">
          <AppText
            weight="bold"
            style={{ fontSize: 12, color: "white" }}
          >
            PENDING
          </AppText>
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row gap-x-3">

        {/* Review */}
        <TouchableOpacity
          onPress={() => router.push("/Admin/applicants")}
          activeOpacity={1}
          className="flex-1"
        >
          <View className="relative">
            <View
              className="absolute bg-black rounded-xl"
              style={{
                width: "100%",
                height: "100%",
                top: 3,
                left: 3,
              }}
            />

            <View className="bg-white border-[2px] border-black rounded-xl p-2 items-center">
              <Feather name="eye" size={16} color="black" />
              <AppText weight="bold">Review</AppText>
            </View>
          </View>
        </TouchableOpacity>

        {/* Approve */}
        <TouchableOpacity
          onPress={() => alert("Approved Successfully!")}
          activeOpacity={1}
          className="flex-1"
        >
          <View className="relative">
            <View
              className="absolute bg-black rounded-xl"
              style={{
                width: "100%",
                height: "100%",
                top: 3,
                left: 3,
              }}
            />

            <View className="bg-white border-[2px] border-black rounded-xl p-2 items-center">
              <Feather name="check" size={16} color="black" />
              <AppText weight="bold">Approve</AppText>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  </SlipCard>
);

/* ============================================================================
   MAIN SCREEN
============================================================================ */
export default function AdminDashboard() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">

        {/* HEADER */}
        <View className="flex-row justify-between items-center mb-4 border-b border-black pb-2">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={{ width: 28, height: 28, marginRight: 8 }}
            />

            <AppText weight="bold" style={{ fontSize: 18 }}>
              ADMIN{" "}
              <AppText weight="bold" style={{ color: "#2563EB" }}>
                CONSOLE
              </AppText>
            </AppText>
          </View>

          <View className="flex-row space-x-10">
            <View className="w-9 h-9 border border-black rounded-md items-center justify-center mr-3">
              <Feather name="bell" size={20} />
            </View>

            <View className="w-9 h-9 border border-black rounded-md items-center justify-center">
              <Feather name="user" size={20} />
            </View>
          </View>
        </View>

        {/* STATUS */}
        <View className="flex-row items-center mb-4">
          <View className="w-2 h-2 bg-green-600 rounded-full mr-2" />
          <AppText weight="bold" style={{ fontSize: 12 }}>
            SYSTEM OPERATIONAL
          </AppText>
        </View>

        {/* STATS */}
        <View className="flex-row justify-between flex-wrap gap-y-3">
          <StatCard
            title="Today's Revenue"
            value="$14,203"
            subtitle="+12%"
            icon={<Feather name="bell" size={16} />}
          />

          <StatCard
            title="Active Rides"
            value="342"
            subtitle="+12%"
            icon={<FontAwesome5 name="motorcycle" size={16} />}
          />

          <StatCard
            title="Pending Drivers"
            value="12"
            subtitle="Requires Attention"
            icon={<Feather name="user-check" size={16} />}
          />

          <StatCard
            title="Online Fleet"
            value="85"
            subtitle="Stable"
            icon={<Feather name="shield" size={16} />}
          />
        </View>

        {/* MAP */}
        <SlipCard styleClass="mt-5">
          <View className="h-40 bg-gray-200 rounded-2xl border-black border items-center justify-center">
            <Feather name="map" size={32} />
            <AppText weight="bold" style={{ marginTop: 8 }}>
              MAP AREA
            </AppText>
          </View>
        </SlipCard>

        {/* COMMANDS */}
        <AppText
          weight="bold"
          style={{ marginTop: 24, marginBottom: 8 }}
        >
          COMMAND CENTER
        </AppText>

        {/* Verify Drivers */}
        <TouchableOpacity
          onPress={() => router.push("/Admin/applicants")}
          activeOpacity={1}
          className="mb-4"
        >
          <View className="relative">
            <View
              className="absolute bg-black rounded-2xl"
              style={{
                width: "100%",
                height: "100%",
                top: 4,
                left: 4,
              }}
            />

            <View className="bg-white border-[3px] border-black rounded-2xl p-3 flex-row justify-between items-center">
              <View className="flex-row items-center">
                <FontAwesome5 name="id-card" size={18} />

                <View className="ml-3">
                  <AppText weight="bold">Verify Drivers</AppText>
                  <AppText style={{ fontSize: 12 }}>
                    Review documents for 12 applicants
                  </AppText>
                </View>
              </View>

              <Feather name="arrow-right" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        {/* User Management */}
        <TouchableOpacity activeOpacity={1} className="mb-4">
          <View className="relative">
            <View
              className="absolute bg-black rounded-2xl"
              style={{
                width: "100%",
                height: "100%",
                top: 4,
                left: 4,
              }}
            />

            <View className="bg-white border-[3px] border-black rounded-2xl p-3 flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Feather name="users" size={18} />

                <View className="ml-3">
                  <AppText weight="bold">User Management</AppText>
                  <AppText style={{ fontSize: 12 }}>
                    Manage riders and drivers profile
                  </AppText>
                </View>
              </View>

              <Feather name="arrow-right" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        {/* SMALL BUTTONS */}
        <View className="flex-row justify-between mt-2">
          <TouchableOpacity activeOpacity={1} className="w-[48%]">
            <View className="relative">
              <View
                className="absolute bg-black rounded-2xl"
                style={{
                  width: "100%",
                  height: "100%",
                  top: 4,
                  left: 4,
                }}
              />

              <View className="bg-white border-[3px] border-black rounded-2xl p-3 items-center">
                <MaterialIcons name="gavel" size={20} />
                <AppText weight="bold">Disputes</AppText>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} className="w-[48%]">
            <View className="relative">
              <View
                className="absolute bg-black rounded-2xl"
                style={{
                  width: "100%",
                  height: "100%",
                  top: 4,
                  left: 4,
                }}
              />

              <View className="bg-white border-[3px] border-black rounded-2xl p-3 items-center">
                <Feather name="volume-2" size={20} />
                <AppText weight="bold">Broadcast</AppText>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* PENDING */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <AppText weight="bold">PENDING VERIFICATION</AppText>

          <TouchableOpacity
            onPress={() => router.push("/Admin/applicants")}
            activeOpacity={1}
          >
            <View className="px-2 py-1 bg-blue-600 rounded">
              <AppText
                weight="bold"
                style={{ fontSize: 12, color: "white" }}
              >
                View All
              </AppText>
            </View>
          </TouchableOpacity>
        </View>

        <PendingCard router={router} />
        <PendingCard router={router} />

      </ScrollView>
    </View>
  );
}