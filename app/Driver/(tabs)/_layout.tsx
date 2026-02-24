import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function DriverTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,          // removes "Driver/(tabs)"
        tabBarStyle: { display: "none" }, // hide default tab bar completely
      }}
    >
      <Tabs.Screen
        name="driver-dashboard"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "Activity",
        }}
      />

      <Tabs.Screen
        name="driver-chat"
        options={{
          title: "Messages",
        }}
      />

      <Tabs.Screen
        name="driver-profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}