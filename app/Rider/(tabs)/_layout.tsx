import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function RiderTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" } // hide bottom tab bar
      }}
    >
      <Tabs.Screen
        name="rider-dashboard"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="tab-two"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="rider-profile"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="payment"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="rider-found"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}