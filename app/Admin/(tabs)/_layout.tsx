import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import RoleGuard from '../../../components/auth/RoleGuard';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function AdminTabsLayout() {
  return (
    <RoleGuard allowedRole="admin">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#7c3aed',
          headerTitle: 'Admin',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Overview',
            tabBarIcon: ({ color }) => <TabBarIcon name="line-chart" color={color} />,
          }}
        />
        <Tabs.Screen
          name="tab-two"
          options={{
            title: 'Users',
            tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
          }}
        />
      </Tabs>
    </RoleGuard>
  );
}
