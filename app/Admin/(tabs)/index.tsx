import { View, Text } from 'react-native';

export default function AdminOverviewScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold text-violet-700">Admin overview</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        Monitor platform health, KPIs, and alerts.
      </Text>
    </View>
  );
}
