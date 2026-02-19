import { View, Text } from 'react-native';

export default function RiderHomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-6">
      <Text className="text-2xl font-bold text-sky-700">Rider home</Text>
      <Text className="mt-3 text-center text-base text-slate-600">
        Book a ride, track your trips, and manage payments.
      </Text>
    </View>
  );
}
