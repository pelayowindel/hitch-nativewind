import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function AdminOverviewScreen() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View className="flex-1 bg-white px-6 py-10">
      <View className="mb-8">
        <Text className="text-2xl font-bold text-violet-700">Admin overview</Text>
        <Text className="mt-3 text-base text-slate-600">
          Monitor platform health, KPIs, and alerts.
        </Text>
      </View>

      <View className="space-y-4">
        <TextInput
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
          placeholder="Full name"
          placeholderTextColor="#9CA3AF"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
          placeholder="Address"
          placeholderTextColor="#9CA3AF"
          value={address}
          onChangeText={setAddress}
        />

        <View className="flex-row gap-3">
          <TextInput
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
            placeholder="Height (cm)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <TextInput
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
            placeholder="Weight (kg)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
      </View>

      <TouchableOpacity className="mt-8 rounded-xl bg-violet-700 px-4 py-3 active:bg-violet-800">
        <Text className="text-center text-base font-semibold text-white">Save</Text>
      </TouchableOpacity>
    </View>
  );
}
