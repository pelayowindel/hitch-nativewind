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
      {/* Header - safe area so back button and title are below status bar */}
      <View
        className="flex-row items-center justify-between border-[3px] border-black bg-slate-100 px-4 py-4"
        style={{ paddingTop: Math.max(insets.top, 12) }}
      >
        <Pressable
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white active:translate-y-0.5"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </Pressable>

        <Text className="text-base font-extrabold uppercase tracking-[0.2em] text-black">
          Rider Profile
        </Text>

        <Pressable
          className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white active:translate-y-0.5"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="pencil" size={20} color="black" />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar + status */}
        <View className="mt-8 items-center">
          <View className="relative">
            {/* Light blue shadow effect */}
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

        {/* List items */}
        <View className="mt-8 gap-3">
          <Pressable className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="wallet" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Wallet
              </Text>
              <Text className="mt-0.5 text-xs font-medium text-slate-700">
                $124.50 Available
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#38bdf8" />
          </Pressable>

          <Pressable
            onPress={() => router.push('/Rider/tab-two')}
            className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1"
          >
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="time" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Ride History
              </Text>
              <Text className="mt-0.5 text-xs font-medium text-slate-700">
                Last ride: Yesterday
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#38bdf8" />
          </Pressable>

          <Pressable className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="shield-checkmark" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Safety Settings
              </Text>
              <Text className="mt-0.5 text-xs font-medium text-slate-700">
                Contacts &amp; Monitoring
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#38bdf8" />
          </Pressable>

          <Pressable className="flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[3px] border-black bg-white">
              <Ionicons name="settings" size={18} color="#38bdf8" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Settings
              </Text>
              <Text className="mt-0.5 text-xs font-medium text-slate-700">
                App preferences
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#38bdf8" />
          </Pressable>
        </View>

        {/* SOS button */}
        <Pressable className="mt-8 rounded-2xl border-[3px] border-black bg-rose-500 py-4 shadow-[0_6px_0_#000] active:translate-y-1">
          <View className="flex-row items-center justify-center gap-2">
            <Ionicons name="call" size={18} color="white" />
            <Text className="text-sm font-extrabold uppercase tracking-[0.3em] text-white">
              SOS / Emergency
            </Text>
          </View>
        </Pressable>
      </ScrollView>

      {}
      <View
        className="border-t-[4px] border-black bg-white px-6 pt-4"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => router.push('/Rider/rider-dashboard' as '/Rider/rider-dashboard')}
            className="items-center gap-1 py-2"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Ionicons name="home" size={24} color="black" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wide text-black">
              Home
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/Rider/tab-two')}
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

          <Pressable className="items-center gap-1 py-2" hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
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
