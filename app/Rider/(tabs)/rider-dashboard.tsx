
import { useRouter, type Href } from 'expo-router';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RiderDashboardScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-slate-100">
      {/* Map Background - Simplified representation */}
      <View className="absolute inset-0 bg-slate-200 opacity-50" />

      {/* Top Header Icons */}
      <View className="absolute top-12 left-0 right-0 z-10 flex-row items-center justify-between px-6">
        {/* Hamburger Menu */}
        <Pressable className="h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] active:translate-y-1">
          <Ionicons name="menu" size={24} color="black" />
        </Pressable>

        {/* Shield Icon */}
        <Pressable className="h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-red-500 shadow-[4px_4px_0_0_#000] active:translate-y-1">
          <Ionicons name="shield" size={24} color="white" />
        </Pressable>
      </View>

      {/* Motorcycle Icons on Map */}
      <View className="absolute top-32 left-16 z-10">
        <View className="h-8 w-8 items-center justify-center rounded-lg border-[2px] border-black bg-white shadow-[2px_2px_0_0_#000]">
          <MaterialCommunityIcons name="motorbike" size={16} color="black" />
        </View>
      </View>
      <View className="absolute top-40 right-20 z-10">
        <View className="h-8 w-8 items-center justify-center rounded-lg border-[2px] border-black bg-white shadow-[2px_2px_0_0_#000]">
          <MaterialCommunityIcons name="motorbike" size={16} color="black" />
        </View>
      </View>

      {/* Main Content Card */}
      <View className="absolute bottom-20 left-6 right-6 rounded-t-[32px] border-[4px] border-black bg-white px-6 pt-6 pb-8 shadow-[8px_8px_0_0_#000]">
        {/* Header Section */}
        <View className="mb-6 flex-row items-start justify-between">
          <View className="flex-1">
            <Text className="mb-1 text-xs font-extrabold uppercase tracking-wider text-black underline">
              Good Evening
            </Text>
            <Text className="text-3xl font-extrabold uppercase tracking-tight text-black">
              Where To, Alex?
            </Text>
          </View>

          {/* Profile Icon Button */}
          <Pressable
            onPress={() => router.push('/Rider/rider-profile' as '/Rider/rider-profile')}
            className="ml-4 h-14 w-14 items-center justify-center rounded-xl border-[3px] border-black bg-amber-100 shadow-[4px_4px_0_0_#000] active:translate-y-1"
          >
            <Ionicons name="person" size={28} color="#1e293b" />
          </Pressable>
        </View>

        {/* Destination Input Field */}
        <View className="mb-6">
          <View className="flex-row items-center rounded-xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="search" size={20} color="#64748b" />
            <TextInput
              placeholder="Enter Destination"
              placeholderTextColor="#64748b"
              className="ml-3 flex-1 text-base font-semibold text-black"
            />
          </View>
        </View>

        {/* Quick Action Buttons */}
        <View className="mb-6 flex-row gap-3">
          <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Ionicons name="home" size={20} color="black" />
            <Text className="text-sm font-extrabold uppercase tracking-wide text-black">
              Home
            </Text>
          </Pressable>

          <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Ionicons name="briefcase" size={20} color="black" />
            <Text className="text-sm font-extrabold uppercase tracking-wide text-black">
              Work
            </Text>
          </Pressable>

          <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Ionicons name="star" size={20} color="black" />
            <Text className="text-sm font-extrabold uppercase tracking-wide text-black">
              G
            </Text>
          </Pressable>
        </View>

        {/* Request Ride Button */}
        <Pressable
          onPress={() => router.push('/Rider/ride-request' as Href)}
          className="flex-row items-center justify-center gap-3 rounded-xl border-[3px] border-black bg-black px-6 py-5 shadow-[4px_4px_0_0_#000] active:translate-y-1"
        >
          <Text className="text-lg font-extrabold uppercase tracking-wide text-white">
            Request Ride
          </Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </Pressable>
      </View>

      {/* Bottom Navigation Bar - safe area */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable className="items-center gap-1 py-2" hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons name="home" size={24} color="black" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wide text-black">
              Home
            </Text>
          </Pressable>

          <Pressable 
            onPress={() => router.push('/Rider/tab-two' as '/Rider/tab-two')}
            className="items-center gap-1 py-2"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Ionicons name="document-text" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600">
              Activity
            </Text>
          </Pressable>

          <Pressable className="items-center gap-1 py-2" hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons name="chatbubble-ellipses" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600">
              Messages
            </Text>
          </Pressable>

          <Pressable 
            onPress={() => router.push('/Rider/rider-profile' as '/Rider/rider-profile')}
            className="items-center gap-1 py-2"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Ionicons name="person-outline" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600">
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
