import { useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRef, useState } from 'react';
import LeafletMap, { LeafletMapRef } from '../(tabs)/LeafletMap';

export default function SearchScreen() {
  const router = useRouter();

  const mapRef = useRef<LeafletMapRef>(null);
  const [destination, setDestination] = useState('');

  // ✅ SAME SEARCH AS DASHBOARD
  const handleSearch = async () => {
    if (!destination.trim()) {
      Alert.alert('Error', 'Enter destination');
      return;
    }

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`,
        {
          headers: {
            'User-Agent': 'hitch-app',
            'Accept-Language': 'en',
          },
        }
      );

      const data = await res.json();

      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        mapRef.current?.flyTo(lat, lon);
      } else {
        Alert.alert('Location not found');
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Search failed');
    }
  };

  return (
    <View className="flex-1 bg-white">

      {/* ================= MAP ================= */}
      <View className="absolute inset-0">
        <LeafletMap ref={mapRef} />
      </View>

      {/* ================= SEARCH BAR ================= */}
      <View className="absolute top-14 left-5 right-5 z-30">
        <View className="flex-row items-center rounded-xl border-[3px] border-black bg-white px-4 py-3">

          <TextInput
            value={destination}
            onChangeText={setDestination}
            placeholder="Search location..."
            className="flex-1 text-sm font-bold"
            onSubmitEditing={handleSearch}
          />

          <Pressable onPress={handleSearch}>
            <Ionicons name="search" size={20} />
          </Pressable>

        </View>
      </View>

      {/* ================= FLOAT ICONS ================= */}
      <View className="absolute left-8 top-32 z-30">
        <View className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white">
          <MaterialCommunityIcons name="motorbike" size={20} />
        </View>
      </View>

      <View className="absolute right-10 top-36 z-30">
        <View className="h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white">
          <MaterialCommunityIcons name="motorbike" size={20} />
        </View>
      </View>

      {/* ================= CENTER USER ================= */}
      <View className="absolute left-1/2 top-32 -translate-x-10 z-30">
        <View className="h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-black bg-yellow-300">
          <Ionicons name="person" size={30} />
        </View>
      </View>

      {/* ================= BOTTOM CARD ================= */}
      <ScrollView
        className="absolute bottom-0 left-0 right-0 z-30"
        contentContainerClassName="pb-10"
      >
        <View className="mx-5 rounded-3xl border-[3px] border-black bg-white px-5 pt-6 pb-6">

          <Text className="text-3xl font-extrabold uppercase">
            Finding{'\n'}Driver
          </Text>

          <View className="mt-3 flex-row items-center gap-2">
            <Pressable
              onPress={() => router.push('/Rider/rider-found')}
              className="rounded-md border-[2px] border-black bg-blue-500 px-2 py-1"
            >
              <Text className="text-[10px] text-white font-extrabold">
                STATUS
              </Text>
            </Pressable>
            <Text className="text-xs font-semibold">
              Scanning nearby radius...
            </Text>
          </View>

          {/* Progress */}
          <View className="mt-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-xs font-bold">Matching</Text>
              <Text className="text-xs font-bold">65%</Text>
            </View>
            <View className="h-3 bg-gray-200 rounded">
              <View className="h-3 bg-black w-2/3 rounded" />
            </View>
          </View>

          {/* Ride Info */}
          <View className="mt-4 flex-row gap-3">
            <View className="flex-1 flex-row items-center gap-3 border p-3 rounded-xl">
              <MaterialCommunityIcons name="motorbike" size={20} />
              <Text className="font-bold">Moto • 2.4km</Text>
            </View>

            <View className="w-20 bg-black rounded-xl items-center justify-center">
              <Text className="text-white font-bold text-lg">04</Text>
              <Text className="text-white text-xs">MIN</Text>
            </View>
          </View>

          {/* Cancel */}
          <Pressable
            onPress={() => router.back()}
            className="mt-5 bg-red-500 p-4 rounded-xl items-center"
          >
            <Text className="text-white font-bold">CANCEL</Text>
          </Pressable>

        </View>
      </ScrollView>

    </View>
  );
}