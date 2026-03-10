import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function SearchScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-slate-200">
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Map area */}
        <View className="relative h-72 bg-slate-300">
          <View className="absolute inset-0 bg-slate-200 opacity-60" />

          {/* Searching banner */}
          <View className="absolute left-5 right-5 top-6 flex-row items-center justify-between rounded-xl border-[3px] border-black bg-white px-4 py-3 ">
            <View className="flex-row items-center gap-2">
              <View className="h-3 w-3 rounded-full border-[2px] border-black bg-yellow-400" />
              <Text className="text-xs font-extrabold uppercase tracking-[0.25em] text-black">
                Searching Area...
              </Text>
            </View>
          </View>

          {/* Map icons */}
          <View className="absolute left-8 top-24">
            <View className="h-9 w-9 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[3px_3px_0_0_#000]">
              <MaterialCommunityIcons name="motorbike" size={18} color="black" />
            </View>
          </View>
          <View className="absolute right-10 top-28">
            <View className="h-9 w-9 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[3px_3px_0_0_#000]">
              <MaterialCommunityIcons name="motorbike" size={18} color="black" />
            </View>
          </View>
          <View className="absolute right-6 top-44">
            <View className="h-9 w-9 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[3px_3px_0_0_#000]">
              <Ionicons name="settings" size={18} color="black" />
            </View>
          </View>

          {/* Center avatar */}
          <View className="absolute left-1/2 top-24 -translate-x-10">
            <View className="h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-black bg-yellow-300 shadow-[4px_4px_0_0_#000]">
              <Ionicons name="person" size={30} color="black" />
            </View>
          </View>
        </View>

        {/* Card */}
        <View className="mx-5 -mt-6 rounded-3xl border-[3px] border-black bg-white px-5 pt-6 pb-6 shadow-[8px_8px_0_0_#000]">
          <Text className="text-3xl font-extrabold uppercase leading-tight text-black">
            Finding{'\n'}Driver
          </Text>

          {/* Status row */}
          <View className="mt-3 flex-row items-center gap-2">
            <Pressable
              onPress={() => router.push('/Rider/rider-found')}
              className="rounded-md border-[2px] border-black bg-blue-500 px-2 py-1 active:opacity-80"
            >
              <Text className="text-[10px] font-extrabold uppercase tracking-wide text-white">
                Status
              </Text>
            </Pressable>
            <Text className="text-xs font-semibold text-slate-700">
              Scanning nearby radius...
            </Text>
          </View>

          {/* Matching progress */}
          <View className="mt-4">
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-xs font-extrabold uppercase tracking-wider text-black">
                Matching
              </Text>
              <View className="rounded-md border-[2px] border-black bg-yellow-300 px-2 py-0.5">
                <Text className="text-[10px] font-extrabold text-black">65%</Text>
              </View>
            </View>
            <View className="h-3 overflow-hidden rounded-md border-[2px] border-black bg-white">
              <View className="h-full w-2/3 bg-black" />
            </View>
          </View>

          {/* Driver + time cards */}
          <View className="mt-4 flex-row gap-3">
            <View className="flex-1 flex-row items-center gap-3 rounded-xl border-[3px] border-black bg-white px-3 py-3 shadow-[4px_4px_0_0_#000]">
              <View className="h-10 w-10 items-center justify-center rounded-md border-[3px] border-black bg-yellow-300">
                <MaterialCommunityIcons name="motorbike" size={18} color="black" />
              </View>
              <View>
                <Text className="text-sm font-extrabold uppercase text-black">Moto</Text>
                <Text className="text-xs text-slate-600">$5.50 • 2.4km</Text>
              </View>
            </View>

            <View className="w-24 items-center justify-center rounded-xl border-[3px] border-black bg-black px-3 py-3 shadow-[4px_4px_0_0_#000]">
              <Text className="text-xl font-extrabold text-white">04</Text>
              <Text className="text-xs font-extrabold uppercase text-white">Min</Text>
            </View>
          </View>

          {/* Pickup / Dropoff */}
          <View className="mt-4 rounded-xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000]">
            <View className="flex-row items-start gap-3">
              <View className="mt-1 h-4 w-4 rounded-sm border-[2px] border-black bg-black" />
              <View className="flex-1">
                <Text className="text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Pickup
                </Text>
                <Text className="text-sm font-extrabold text-black">
                  GrandCentral Terminal
                </Text>
              </View>
            </View>

            <View className="my-3 h-px bg-slate-300" />

            <View className="flex-row items-start gap-3">
              <View className="mt-1 h-4 w-4 rounded-sm border-[2px] border-black bg-white" />
              <View className="flex-1">
                <Text className="text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Dropoff
                </Text>
                <Text className="text-sm font-extrabold text-black">
                  Central Park Zoo
                </Text>
              </View>
            </View>
          </View>

          {/* Cancel button */}
          <Pressable
            onPress={() => router.back()}
            className="mt-4 flex-row items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-rose-500 px-5 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-1"
          >
            <Ionicons name="close" size={18} color="white" />
            <Text className="text-base font-extrabold uppercase tracking-[0.2em] text-white">
              Cancel
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

