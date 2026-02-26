import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RideRequestScreen() {
  return (
    <View className="flex-1 bg-slate-300">
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <View className="pt-10 px-6">
          <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
            Ride Request and Scheduling
          </Text>
        </View>

        {/* Hero image area with menu + notification */}
        <View className="mt-4 mx-4 h-44 overflow-hidden rounded-3xl border-[3px] border-black bg-slate-400">
          <View className="absolute inset-0 opacity-40 bg-slate-500" />

          <View className="flex-row items-center justify-between px-4 pt-4">
            <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
              <Ionicons name="menu" size={20} color="black" />
            </Pressable>

            <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-red-500 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
              <Ionicons name="notifications" size={20} color="white" />
            </Pressable>
          </View>
        </View>

        {/* Card body */}
        <View className="mt-4 mx-4 rounded-3xl border-[3px] border-black bg-black px-4 pt-4 pb-6 shadow-[8px_8px_0_0_#000]">
          {/* Ride now / Schedule toggle */}
          <View className="mb-4 flex-row rounded-xl border-[2px] border-slate-600 bg-slate-900 p-1">
            <Pressable className="flex-1 items-center justify-center rounded-lg bg-yellow-400 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
              <View className="flex-row items-center gap-2">
                <Ionicons name="bicycle" size={16} color="black" />
                <Text className="text-xs font-extrabold uppercase tracking-wide text-black">
                  Ride Now
                </Text>
              </View>
            </Pressable>

            <Pressable className="ml-2 flex-1 items-center justify-center rounded-lg border-[2px] border-slate-500 bg-slate-900 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
              <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-200">
                Schedule
              </Text>
            </Pressable>
          </View>

          {/* Current location */}
          <Pressable className="mb-3 flex-row items-center rounded-xl border-[2px] border-slate-500 bg-slate-900 px-4 py-4 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[2px] border-slate-400 bg-slate-800">
              <Ionicons name="navigate" size={18} color="#e5e7eb" />
            </View>
            <View className="flex-1">
              <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Current Location
              </Text>
            </View>
          </Pressable>

          {/* Where to */}
          <Pressable className="mb-4 flex-row items-center rounded-xl border-[2px] border-slate-500 bg-slate-900 px-4 py-4 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-md border-[2px] border-slate-400 bg-slate-800">
              <Ionicons name="flag-outline" size={18} color="#e5e7eb" />
            </View>
            <View className="flex-1">
              <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Where to?
              </Text>
            </View>
            <Pressable className="h-8 w-8 items-center justify-center rounded-md border-[2px] border-black bg-emerald-400">
              <Ionicons name="add" size={18} color="black" />
            </Pressable>
          </Pressable>

          {/* Quick access */}
          <View className="mb-2">
            <Text className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-300">
              Quick Access
            </Text>
            <View className="flex-row justify-between gap-2">
              <Pressable className="flex-1 items-center justify-center rounded-lg border-[2px] border-slate-500 bg-slate-900 px-3 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
                <Text className="text-[11px] font-extrabold uppercase tracking-wide text-slate-100">
                  Home
                </Text>
              </Pressable>
              <Pressable className="flex-1 items-center justify-center rounded-lg border-[2px] border-slate-500 bg-slate-900 px-3 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
                <Text className="text-[11px] font-extrabold uppercase tracking-wide text-slate-100">
                  Office
                </Text>
              </Pressable>
              <Pressable className="flex-1 items-center justify-center rounded-lg border-[2px] border-slate-500 bg-slate-900 px-3 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
                <Text className="text-[11px] font-extrabold uppercase tracking-wide text-slate-100">
                  Gym
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Safety message */}
          <Pressable className="mt-4 rounded-xl border-[2px] border-slate-500 bg-slate-900 px-4 py-4 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
            <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-100">
              Safety First
            </Text>
            <Text className="mt-1 text-[11px] text-slate-300">
              Helmet provided • 1 Passenger Max
            </Text>
          </Pressable>
        </View>

        {/* Find rider button */}
        <View className="mt-5 mx-4 mb-4">
          <Pressable className="flex-row items-center justify-between rounded-xl border-[3px] border-black bg-yellow-400 px-5 py-4 shadow-[6px_6px_0_0_#000] active:translate-y-1">
            <Text className="text-base font-extrabold uppercase tracking-[0.25em] text-black">
              Find Rider
            </Text>
            <Ionicons name="arrow-forward" size={20} color="black" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

