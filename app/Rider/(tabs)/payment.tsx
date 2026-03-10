import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PaymentScreen() {
  return (
    <View className="flex-1 bg-slate-200">
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between border-b-[3px] border-black bg-slate-100 px-4 py-4">
          <Pressable className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white active:translate-y-0.5">
            <Ionicons name="arrow-back" size={20} color="black" />
          </Pressable>
          <Text className="text-base font-extrabold uppercase tracking-[0.25em] text-black">
            Payment
          </Text>
          <View className="h-10 w-10" />
        </View>

        {/* Wallet card */}
        <View className="mx-4 mt-5 rounded-3xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[6px_6px_0_0_#000]">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-[11px] font-extrabold uppercase tracking-wider text-black">
                My Wallet
              </Text>
              <Text className="mt-1 text-3xl font-extrabold text-black">$45.50</Text>
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-lg border-[3px] border-black bg-yellow-300">
              <Ionicons name="wallet" size={20} color="black" />
            </View>
          </View>

          <View className="mt-4 flex-row gap-3">
            <Pressable className="flex-1 items-center justify-center rounded-lg border-[3px] border-black bg-green-400 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
              <Text className="text-xs font-extrabold uppercase tracking-wider text-black">
                + Top Up
              </Text>
            </Pressable>
            <Pressable className="flex-1 items-center justify-center rounded-lg border-[3px] border-black bg-slate-800 py-3 shadow-[3px_3px_0_0_#000] active:translate-y-0.5">
              <Text className="text-xs font-extrabold uppercase tracking-wider text-white">
                History
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Saved methods */}
        <View className="mx-4 mt-6">
          <View className="flex-row items-center gap-2">
            <View className="h-4 w-1 rounded-sm bg-black" />
            <Text className="text-xs font-extrabold uppercase tracking-wider text-black">
              Saved Methods
            </Text>
          </View>

          <Pressable className="mt-3 flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-green-400">
              <Ionicons name="cash" size={18} color="black" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-extrabold uppercase text-black">Cash</Text>
              <Text className="text-xs text-slate-600">Default method</Text>
            </View>
            <View className="h-5 w-5 rounded-full border-[3px] border-black bg-white" />
          </Pressable>

          <Pressable className="mt-3 flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-orange-400">
              <Ionicons name="card" size={18} color="black" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-extrabold uppercase text-black">Visa</Text>
              <Text className="text-xs text-slate-600">**** 4242</Text>
              <Text className="text-[10px] text-slate-500">Expires 12/25</Text>
            </View>
            <View className="h-5 w-5 rounded-full border-[3px] border-black bg-white" />
          </Pressable>

          <Pressable className="mt-3 flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-sky-400">
              <Ionicons name="logo-paypal" size={18} color="black" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-extrabold uppercase text-black">PayPal</Text>
              <Text className="text-xs text-slate-600">rider@email.com</Text>
            </View>
            <View className="h-5 w-5 rounded-full border-[3px] border-black bg-white" />
          </Pressable>
        </View>

        {/* Add new */}
        <View className="mx-4 mt-6">
          <View className="flex-row items-center gap-2">
            <View className="h-4 w-1 rounded-sm bg-black" />
            <Text className="text-xs font-extrabold uppercase tracking-wider text-black">
              Add New
            </Text>
          </View>

          <Pressable className="mt-3 flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white">
              <Ionicons name="card" size={18} color="black" />
            </View>
            <Text className="flex-1 text-sm font-extrabold uppercase text-black">
              Credit or Debit Card
            </Text>
            <Ionicons name="chevron-forward" size={18} color="black" />
          </Pressable>

          <Pressable className="mt-3 flex-row items-center rounded-2xl border-[3px] border-black bg-slate-100 px-4 py-4 shadow-[4px_4px_0_0_#000] active:translate-y-0.5">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white">
              <Ionicons name="link" size={18} color="black" />
            </View>
            <Text className="flex-1 text-sm font-extrabold uppercase text-black">
              Link E-Wallet
            </Text>
            <Ionicons name="chevron-forward" size={18} color="black" />
          </Pressable>
        </View>

        {/* Footer badge */}
        <View className="mx-4 mt-6 items-center">
          <View className="flex-row items-center gap-2 rounded-lg border-[3px] border-black bg-white px-3 py-2 shadow-[3px_3px_0_0_#000]">
            <Ionicons name="lock-closed" size={14} color="black" />
            <Text className="text-[10px] font-extrabold uppercase tracking-wider text-black">
              Secured by Stripe
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

