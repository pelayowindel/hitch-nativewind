import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RiderProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-slate-300">
      {/* Header */}
      <View
        className="flex-row items-center justify-between border-[3px] border-black bg-slate-100 px-4 py-4"
        style={{ paddingTop: Math.max(insets.top, 12) }}
      >
        <Pressable
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white active:translate-y-0.5"
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </Pressable>

        <Text className="text-base font-extrabold uppercase tracking-[0.2em] text-black">
          Rider Profile
        </Text>

        <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white active:translate-y-0.5">
          <Ionicons name="pencil" size={20} color="black" />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: Math.max(insets.bottom + 120, 140), // ✅ FIXED OVERLAP
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View className="mt-8 items-center">
          <View className="relative">
            <View className="absolute bottom-[-4px] right-[-4px] h-32 w-32 rounded-full bg-sky-400 opacity-30" />
            <View className="h-32 w-32 rounded-full border-[2px] border-black bg-yellow-300" />
            <View className="absolute bottom-2 right-[-6px] rounded-md border-[3px] border-black bg-black px-3 py-1 rotate-[-8deg]">
              <Text className="text-xs font-extrabold uppercase tracking-wide text-white">
                Online
              </Text>
            </View>
          </View>

          <Text className="mt-5 text-2xl font-extrabold uppercase tracking-wide text-black">
            John Doe
          </Text>

          <View className="mt-2 rounded-full border-[2px] border-black bg-sky-400 px-5 py-2">
            <Text className="text-xs font-extrabold uppercase tracking-[0.25em] text-black">
              Elite Passenger
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View className="mt-8 flex-row gap-3">
          <Pressable className="flex-1 items-center rounded-2xl border-[3px] border-black bg-slate-100 px-3 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Text className="text-xl font-extrabold text-black">54</Text>
            <View className="mt-1 flex-row items-center gap-1">
              <MaterialCommunityIcons name="bike" size={16} color="#38bdf8" />
              <Text className="text-[11px] font-extrabold uppercase tracking-wide text-black">
                Rides
              </Text>
            </View>
          </Pressable>

          <Pressable className="flex-1 items-center rounded-2xl border-[3px] border-black bg-slate-100 px-3 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Text className="text-xl font-extrabold text-black">4.9</Text>
            <View className="mt-1 flex-row items-center gap-1">
              <Ionicons name="star" size={16} color="#38bdf8" />
              <Text className="text-[11px] font-extrabold uppercase tracking-wide text-black">
                Ratings
              </Text>
            </View>
          </Pressable>

          <Pressable className="flex-1 items-center rounded-2xl border-[3px] border-black bg-slate-100 px-3 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <Text className="text-xl font-extrabold text-black">1.2k</Text>
            <View className="mt-1 flex-row items-center gap-1">
              <Ionicons name="location" size={16} color="#38bdf8" />
              <Text className="text-[11px] font-extrabold uppercase tracking-wide text-black">
                Km
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Menu */}
        <View className="mt-8 gap-3">
          <Pressable className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000]">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="wallet" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Wallet
              </Text>
              <Text className="text-xs text-slate-700">
                $124.50 Available
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => router.push('/Rider/tab-two')}
            className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000]"
          >
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="time" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Ride History
              </Text>
              <Text className="text-xs text-slate-700">
                Last ride: Yesterday
              </Text>
            </View>
          </Pressable>
        </View>

        {/* SOS */}
        <Pressable className="mt-8 rounded-2xl border-[3px] border-black bg-rose-500 py-4">
          <Text className="text-center font-extrabold text-white">
            SOS / Emergency
          </Text>
        </Pressable>
      </ScrollView>

      {/* YOUR CUSTOM NAVBAR (UNCHANGED) */}
      <View
        className="border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => router.push('/Rider/rider-dashboard')}>
            <Ionicons name="home" size={24} color="black" />
            <Text className="text-[10px] font-extrabold">Home</Text>
          </Pressable>

          <Pressable>
            <Ionicons name="document-text" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold text-slate-600">
              Activity
            </Text>
          </Pressable>

          <Pressable>
            <Ionicons name="chatbubble-ellipses" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold text-slate-600">
              Messages
            </Text>
          </Pressable>

          <Pressable>
            <Ionicons name="person-outline" size={24} color="#64748b" />
            <Text className="text-[10px] font-extrabold text-slate-600">
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}