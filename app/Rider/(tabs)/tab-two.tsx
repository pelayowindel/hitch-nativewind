import { View, Text } from 'react-native';

export default function RiderTripsScreen() {
  return (
    <View className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="border-b-[3px] border-black bg-white px-4 py-4">
        <Text className="text-center text-lg font-extrabold uppercase tracking-wide text-slate-900">
          Ride History
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-sky-700">Trips</Text>
        <Text className="mt-3 text-center text-base text-slate-600">
          View your ride history and trip details.
        </Text>
      </View>
    </View>
  );
}
