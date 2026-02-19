import { View, Text } from 'react-native';

export default function AdminUsersScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-semibold text-violet-700">Users</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        Manage riders, drivers, permissions, and escalations.
      </Text>
    </View>
  );
}
