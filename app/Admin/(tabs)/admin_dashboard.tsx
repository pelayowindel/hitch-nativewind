import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Text as RNText,
} from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* ============================================================================
   APP TEXT (Reusable Typography Component)
============================================================================ */
interface AppTextProps {
  children: React.ReactNode;
  weight?: "regular" | "medium" | "semibold" | "bold";
  style?: any;
}

function AppText({ children, weight = "regular", style }: AppTextProps) {
  const fontMap = {
    regular: "PlusJakartaRegular",
    medium: "PlusJakartaMedium",
    semibold: "PlusJakartaSemiBold",
    bold: "PlusJakartaBold",
  };

  return <RNText style={[{ fontFamily: fontMap[weight] }, style]}>{children}</RNText>;
}

/* ============================================================================
   SLIP CARD (Brutalist Shadow Card)
============================================================================ */
interface SlipCardProps {
  children: React.ReactNode;
  styleClass?: string;
}

function SlipCard({ children, styleClass = "" }: SlipCardProps) {
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
   STAT CARD (Dashboard Metric Box)
============================================================================ */
interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, subtitle, icon }: StatCardProps) => (
  <SlipCard styleClass="w-[48%] mb-3">
    <View className="p-3 relative">
      <View className="absolute top-2 right-2">{icon}</View>

      <AppText weight="semibold" style={{ fontSize: 12, color: "black" }}>
        {title}
      </AppText>

      <AppText weight="bold" style={{ fontSize: 24, marginTop: 8 }}>
        {value}
      </AppText>

      <AppText style={{ fontSize: 12, marginTop: 4, color: "black" }}>
        {subtitle}
      </AppText>
    </View>
  </SlipCard>
);

/* ============================================================================
   COMMAND BUTTON
============================================================================ */
interface CommandButtonProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onPress?: () => void;
  styleClass?: string;
  hideArrow?: boolean;
  centerContent?: boolean;
}

const CommandButton = ({
  title,
  subtitle,
  icon,
  onPress,
  styleClass = "",
  hideArrow = false,
  centerContent = false,
}: CommandButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View className={`mb-4 ${styleClass}`}>
        <View className="relative">
          {!pressed && (
            <View
              className="absolute bg-black rounded-2xl"
              style={{ width: "100%", height: "100%", top: 4, left: 4 }}
            />
          )}

          <View
            className={`bg-white border-[3px] border-black rounded-2xl p-3 flex-row items-center ${
              centerContent ? "justify-center" : "justify-between"
            }`}
            style={{
              transform: pressed ? [{ translateX: 2 }, { translateY: 2 }] : [],
            }}
          >
            <View className="flex-row items-center">
              <View className="mr-3">{icon}</View>
              <View>
                <AppText weight="bold" style={{ color: "black" }}>
                  {title}
                </AppText>

                {subtitle && (
                  <AppText style={{ fontSize: 12, color: "black" }}>
                    {subtitle}
                  </AppText>
                )}
              </View>
            </View>

            {!hideArrow && !centerContent && (
              <Feather name="arrow-right" size={20} color="black" />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

/* ============================================================================
   PENDING CARD
============================================================================ */
interface PendingCardProps {
  router: any;
}

const PendingCard = ({ router }: PendingCardProps) => (
  <SlipCard styleClass="mb-3">
    <View className="p-3">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <AppText weight="bold" style={{ color: "black" }}>
              John Doe
            </AppText>
            <AppText style={{ fontSize: 12, color: "black" }}>
              Submitted 2 days ago
            </AppText>
          </View>
        </View>

        <View className="bg-orange-400 px-2 py-1 rounded">
          <AppText weight="bold" style={{ fontSize: 12, color: "white" }}>
            PENDING
          </AppText>
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row gap-x-3">
        <CommandButton
          title="Review"
          icon={<Feather name="eye" size={16} color="black" />}
          styleClass="flex-1"
          onPress={() => router.push("/Admin/admin_verification")}
        />

        <CommandButton
          title="Approve"
          icon={<Feather name="check" size={16} color="black" />}
          styleClass="flex-1"
          onPress={() => alert("Approved Successfully!")}
        />
      </View>
    </View>
  </SlipCard>
);

/* ============================================================================
   MAIN ADMIN DASHBOARD SCREEN
============================================================================ */
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

          <View className="flex-row space-x-10">
            <View className="w-9 h-9 border border-black rounded-md items-center justify-center bg-white">
              <Feather name="bell" size={20} color="black" />
            </View>
            <View className="w-9 h-9 border border-black rounded-md items-center justify-center bg-white">
              <Feather name="user" size={20} color="black" />
            </View>
          </View>
        </View>

        {/* System Status */}
        <View className="flex-row items-center mb-4">
          <View className="w-2 h-2 bg-green-600 rounded-full mr-2" />
          <AppText weight="bold" style={{ fontSize: 12, color: "black" }}>
            SYSTEM OPERATIONAL
          </AppText>
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
          <View className="h-40 bg-gray-200 rounded-2xl border-black border relative items-center justify-center">
            <View className="absolute top-2 left-2 bg-blue-600 px-3 py-1 rounded">
              <AppText weight="bold" style={{ fontSize: 12, color: "white" }}>
                LIVE GPS VIEW
              </AppText>
            </View>

            <Feather name="map" size={32} color="black" />
            <AppText weight="bold" style={{ color: "black", marginTop: 8 }}>
              MAP AREA
            </AppText>
          </View>
        </SlipCard>

        {/* Command Center */}
        <AppText weight="bold" style={{ marginTop: 24, marginBottom: 8, color: "black" }}>
          COMMAND CENTER
        </AppText>

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

        {/* Small Commands */}
        <View className="flex-row justify-between mt-2">
          <CommandButton
            title="Disputes"
            icon={<MaterialIcons name="gavel" size={20} color="black" />}
            styleClass="w-[48%]"
            hideArrow
            centerContent
          />
          <CommandButton
            title="Broadcast"
            icon={<Feather name="volume-2" size={20} color="black" />}
            styleClass="w-[48%]"
            hideArrow
            centerContent
          />
        </View>

        {/* Pending Header */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <AppText weight="bold" style={{ color: "black" }}>
            PENDING VERIFICATION
          </AppText>

          <TouchableWithoutFeedback onPress={() => router.push("/Admin/applicants")}>
            <View className="px-2 py-1 bg-blue-600 rounded">
              <AppText weight="bold" style={{ fontSize: 12, color: "white" }}>
                View All
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Pending Cards */}
        <PendingCard router={router} />
        <PendingCard router={router} />
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