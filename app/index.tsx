import { Href, Link, Stack } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

const tenants: { name: string; href: Href }[] = [
  { name: 'LogIn', href: '/LogIn' as const },
  { name: 'Rider', href: '/Rider' as const },
  { name: 'Driver', href: '/Driver' as const },
  { name: 'Admin', href: '/Admin' as const },
];

export default function TenantChooser() {
  return (
    <View className="flex-1 justify-center bg-slate-100 px-6">
      <Stack.Screen options={{ title: 'Choose tenant', headerShown: true }} />
      <Text className="mb-6 text-center text-2xl font-bold text-slate-900">
        Pick a workspace
      </Text>
      {tenants.map((tenant) => (
        <Link key={tenant.name} href={tenant.href} asChild>
          <Pressable className="mb-3 rounded-lg bg-blue-600 py-4">
            <Text className="text-center text-lg font-semibold text-white">
              {tenant.name}
            </Text>
          </Pressable>
        </Link>
      ))}
      <Text className="mt-4 text-center text-sm text-slate-500">
        Each tenant has its own tab navigation.
      </Text>
    </View>
  );
}
