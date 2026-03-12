// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Tabs } from 'expo-router';
// import React from 'react';
// import RoleGuard from '../../../components/auth/RoleGuard';

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof Ionicons>['name'];
//   color: string;
// }) {
//   return <Ionicons size={24} {...props} />;
// }

// export default function RiderTabsLayout() {
//   return (
//     <RoleGuard allowedRole="rider">
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: '#38bdf8',
//           tabBarInactiveTintColor: '#64748b',
//           headerShown: false,
//           tabBarStyle: {
//             borderTopWidth: 3,
//             borderTopColor: '#000',
//             backgroundColor: '#f1f5f9',
//             height: 60,
//             paddingBottom: 8,
//             paddingTop: 8,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="rider-dashboard"
//           options={{
//             title: 'Home',
//             tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
//             tabBarStyle: { display: 'none' }, // Hide tab bar since dashboard has custom nav
//           }}
//         />
//         <Tabs.Screen
//           name="tab-two"
//           options={{
//             title: 'Trips',
//             tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
//           }}
//         />
//         <Tabs.Screen
//           name="rider-profile"
//           options={{
//             title: 'Profile',
//             tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
//             tabBarStyle: { height: 0, display: 'none' }, // Hide default tab bar since profile has custom nav
//           }}
//         />
//       </Tabs>
//     </RoleGuard>
//   );
// }

import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import RoleGuard from '../../../components/auth/RoleGuard';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={24} {...props} />;
}

export default function RiderTabsLayout() {
  return (
    <RoleGuard allowedRole="rider">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#38bdf8',
          tabBarInactiveTintColor: '#64748b',
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 3,
            borderTopColor: '#000',
            backgroundColor: '#f1f5f9',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        {/* Main screens with visible tab bar */}
        <Tabs.Screen
          name="rider-dashboard"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            tabBarStyle: { display: 'none' }, // Dashboard hides tab bar
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
            tabBarStyle: { display: 'none' }, // Search hides tab bar
          }}
        />
        <Tabs.Screen
          name="rider-profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
            tabBarStyle: { display: 'none' }, // Profile hides tab bar
          }}
        />
        <Tabs.Screen
          name="tab-two"
          options={{
            title: 'Trips',
            tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
            tabBarStyle: { display: 'flex' }, // Trips shows tab bar
          }}
        />

        {/* Hide tab bar for driver-related screens */}
        <Tabs.Screen
          name="rider-found"
          options={{
            title: 'Rider Found',
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="ride-complete"
          options={{
            title: 'Ride Complete',
            tabBarStyle: { display: 'none' },
          }}
        />
      </Tabs>
    </RoleGuard>
  );
}