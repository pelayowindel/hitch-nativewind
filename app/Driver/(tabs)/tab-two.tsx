import { View, Text } from 'react-native';

export default function DriverEarningsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-semibold text-amber-600">Earnings</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        Review payouts, incentives, and weekly summaries.
      </Text>
    </View>
  );
}
