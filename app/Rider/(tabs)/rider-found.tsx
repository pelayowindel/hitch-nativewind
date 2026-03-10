import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function RiderFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <View className="px-5 pt-6">
          <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
            In-Ride Tracking and Safety
          </Text>
        </View>

        {/* Map area */}
        <View className="mx-4 mt-4 overflow-hidden rounded-3xl border-[3px] border-black bg-slate-300">
          
          {/* Map placeholder */}
          <View className="h-[220px] bg-slate-200" />

          {/* En Route card */}
          <View className="absolute left-4 top-4 rounded-xl border-[3px] border-black bg-white px-3 py-2 shadow-[4px_4px_0_0_#000]">
            <View className="flex-row items-center gap-2">
              <View className="h-7 w-7 items-center justify-center rounded-md border-[2px] border-black bg-yellow-300">
                <MaterialCommunityIcons name="motorbike" size={16} color="black" />
              </View>

              <View>
                <Text className="text-[10px] font-extrabold uppercase tracking-wider text-black">
                  En Route
                </Text>
                <Text className="text-lg font-extrabold text-black">
                  12 MIN
                </Text>
                <Text className="text-[10px] text-slate-600">
                  To destination
                </Text>
              </View>
            </View>
          </View>

          {/* ETA */}
          <View className="absolute right-4 top-4 rounded-xl border-[3px] border-black bg-yellow-300 px-3 py-3 shadow-[4px_4px_0_0_#000]">
            <Text className="text-base font-extrabold text-black">
              16:45
            </Text>
            <Text className="text-[10px] font-extrabold uppercase tracking-wider text-black">
              ETA
            </Text>
          </View>

          {/* Map tools */}
          <View className="absolute right-4 top-24 gap-2">
            <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[3px_3px_0_0_#000]">
              <Ionicons name="navigate" size={18} color="black" />
            </Pressable>
    
            <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white shadow-[3px_3px_0_0_#000]">
              <Ionicons name="layers" size={18} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Driver Card (Pressable) */}
        <Pressable
          onPress={() => router.push("/Rider/ride-complete")}
          className="mx-4 mt-4 rounded-2xl border-[3px] border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_#000]"
        >
          <View className="flex-row items-center gap-3">

            <View className="h-12 w-12 items-center justify-center rounded-lg border-[3px] border-black bg-slate-100">
              <Ionicons name="person" size={22} color="black" />
            </View>

            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Juan Dela Cruz
              </Text>

              <View className="mt-1 flex-row items-center gap-2">
                <View className="rounded-md border-[2px] border-black bg-white px-2 py-0.5">
                  <Text className="text-[10px] font-extrabold text-black">
                    4.9★
                  </Text>
                </View>

                <Text className="text-[10px] font-semibold uppercase text-slate-600">
                  Yamaha Nmax
                </Text>
              </View>
            </View>

            <View className="rounded-md border-[3px] border-black bg-slate-100 px-2 py-1">
              <Text className="text-[10px] font-extrabold uppercase text-black">
                ABC 123
              </Text>
            </View>

          </View>
        </Pressable>

        {/* Destination */}
        <View className="mx-4 mt-4 rounded-2xl border-[3px] border-black bg-white px-4 py-4 shadow-[4px_4px_0_0_#000]">
          <View className="flex-row items-start gap-3">

            <View className="mt-1 h-3 w-3 rounded-sm border-[2px] border-black bg-black" />

            <View className="flex-1">
              <Text className="text-base font-extrabold uppercase text-black">
                Ayala Avenue
              </Text>

              <Text className="text-xs text-slate-600">
                Makati City, Metro Manila
              </Text>
            </View>

          </View>
        </View>

        {/* Progress */}
        <View className="mx-4 mt-4">

          <View className="mb-2 flex-row justify-between">
            <Text className="text-[11px] font-semibold uppercase text-slate-700">
              3.2 km left
            </Text>

            <Text className="text-[11px] font-semibold uppercase text-slate-700">
              65%
            </Text>
          </View>

          <View className="h-3 overflow-hidden rounded-md border-[2px] border-black bg-white">
            <View className="h-full w-2/3 bg-lime-400" />
          </View>

        </View>

        {/* Action Buttons */}
        <View className="mx-4 mt-5 flex-row flex-wrap justify-between">

          <Pressable className="w-[23%] items-center justify-center rounded-xl border-[3px] border-black bg-white py-3 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="chatbubble-ellipses" size={18} color="black" />
            <Text className="mt-1 text-[10px] font-extrabold uppercase text-black">
              Chat
            </Text>
          </Pressable>

          <Pressable className="w-[23%] items-center justify-center rounded-xl border-[3px] border-black bg-white py-3 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="call" size={18} color="black" />
            <Text className="mt-1 text-[10px] font-extrabold uppercase text-black">
              Call
            </Text>
          </Pressable>

          <Pressable className="w-[23%] items-center justify-center rounded-xl border-[3px] border-black bg-white py-3 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="share" size={18} color="black" />
            <Text className="mt-1 text-[10px] font-extrabold uppercase text-black">
              Share
            </Text>
          </Pressable>

          <Pressable className="w-[23%] items-center justify-center rounded-xl border-[3px] border-black bg-white py-3 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="shield-checkmark" size={18} color="black" />
            <Text className="mt-1 text-[10px] font-extrabold uppercase text-black">
              Tools
            </Text>
          </Pressable>

        </View>

        {/* SOS Button */}
        <View className="mx-4 mt-6">
          <Pressable className="flex-row items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-rose-500 py-4 shadow-[4px_4px_0_0_#000]">
            <Ionicons name="alert-circle" size={18} color="white" />

            <View>
              <Text className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">
                SOS Alert
              </Text>

              <Text className="text-[10px] font-semibold text-white">
                Emergency Help
              </Text>
            </View>

          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}