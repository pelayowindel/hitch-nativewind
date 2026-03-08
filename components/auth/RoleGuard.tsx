import React from 'react';
import { Redirect } from 'expo-router';
import { AppRole, useSupabase } from '../../contexts/SupabaseContext';

interface RoleGuardProps {
  allowedRole: AppRole;
  children: React.ReactNode;
}

export default function RoleGuard({ allowedRole, children }: RoleGuardProps) {
  const { user, role, isLoading } = useSupabase();

  if (isLoading) {
    return null;
  }

  if (!user || role !== allowedRole) {
    return <Redirect href="/LogIn" />;
  }

  return <>{children}</>;
}
