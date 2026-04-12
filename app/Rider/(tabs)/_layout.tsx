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
        <Tabs.Screen
          name="rider-dashboard"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            tabBarStyle: { display: 'none' }, // Hide tab bar since dashboard has custom nav
          }}
        />
        <Tabs.Screen
          name="tab-two"
          options={{
            title: 'Trips',
            tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          }}
        />
        <Tabs.Screen
          name="rider-profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
            tabBarStyle: { height: 0, display: 'none' }, // Hide default tab bar since profile has custom nav
          }}
        />
      </Tabs>
    </RoleGuard>
  );
}
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
//         screenOptions={({ route }) => {
//           const hiddenRoutes = ['rider-dashboard', 'search', 'rider-found'];
//           const isHidden = hiddenRoutes.includes(route.name);

//           return {
//             headerShown: false,
//             tabBarActiveTintColor: '#38bdf8',
//             tabBarInactiveTintColor: '#64748b',

//             tabBarStyle: isHidden
//               ? { display: 'none' }
//               : {
//                   borderTopWidth: 3,
//                   borderTopColor: '#000',
//                   backgroundColor: '#f1f5f9',
//                   height: 65,
//                   paddingBottom: 8,
//                   paddingTop: 8,
//                 },
//           };
//         }}
//       >
//         {/* HOME */}
//         <Tabs.Screen
//           name="rider-dashboard"
//           options={{
//             title: 'Home',
//             tabBarIcon: ({ color }) => (
//               <TabBarIcon name="home" color={color} />
//             ),
//           }}
//         />

//         {/* ACTIVITY */}
//         <Tabs.Screen
//           name="activity"
//           options={{
//             title: 'Activity',
//             tabBarIcon: ({ color }) => (
//               <TabBarIcon name="document-text" color={color} />
//             ),
//           }}
//         />

//         {/* MESSAGES */}
//         <Tabs.Screen
//           name="messages"
//           options={{
//             title: 'Messages',
//             tabBarIcon: ({ color }) => (
//               <TabBarIcon name="chatbubble-ellipses" color={color} />
//             ),
//           }}
//         />

//         {/* PROFILE */}
//         <Tabs.Screen
//           name="rider-profile"
//           options={{
//             title: 'Profile',
//             tabBarIcon: ({ color }) => (
//               <TabBarIcon name="person" color={color} />
//             ),
//           }}
//         />

//         {/* HIDDEN */}
//         <Tabs.Screen name="search" options={{ href: null }} />
//         <Tabs.Screen name="rider-found" options={{ href: null }} />
//       </Tabs>
//     </RoleGuard>
//   );
// }