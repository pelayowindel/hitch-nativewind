import React from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { AppRole, useSupabase } from '../../contexts/SupabaseContext';

interface RoleGuardProps {
  allowedRole: AppRole;
  children: React.ReactNode;
}

export default function RoleGuard({ allowedRole, children }: RoleGuardProps) {
  const { user, role, isLoading } = useSupabase();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-200">
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  if (!user || role !== allowedRole) {
    return <Redirect href="/LogIn" />;
  }

  return <>{children}</>;
}
