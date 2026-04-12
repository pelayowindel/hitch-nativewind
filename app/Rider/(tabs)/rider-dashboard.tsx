import { useRouter, type Href } from 'expo-router';
import { Pressable, Text, TextInput, View, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRef, useState } from 'react';
import LeafletMap, { LeafletMapRef } from './LeafletMap';

export default function RiderDashboardScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const mapRef = useRef<LeafletMapRef>(null);
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ WORKING SEARCH FUNCTION
  const handleSearch = async () => {
    if (!destination.trim()) {
      Alert.alert('Error', 'Please enter a destination');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`,
        {
          headers: {
            'User-Agent': 'hitch-app',
            'Accept-Language': 'en',
          },
        }
      );

      const data = await response.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        mapRef.current?.flyTo(lat, lon);
      } else {
        Alert.alert('Not Found', 'Location not found');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to search location');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1">

      {/* ================= MAP ================= */}
      <View className="absolute inset-0">
        <LeafletMap ref={mapRef} />
      </View>

      {/* ================= HEADER ================= */}
      <View className="absolute top-14 left-0 right-0 z-30 flex-row justify-between px-6">

        <Pressable className="h-12 w-12 items-center justify-center rounded-2xl bg-white shadow">
          <Ionicons name="menu" size={24} />
        </Pressable>

        <Pressable className="h-12 w-12 items-center justify-center rounded-2xl bg-red-500 shadow">
          <Ionicons name="shield" size={22} color="white" />
        </Pressable>

      </View>

      {/* ================= ZOOM BUTTONS ================= */}
      <View className="absolute top-40 left-4 z-30">

        <Pressable
          onPress={() => mapRef.current?.zoomIn()}
          className="bg-white p-3 rounded-t-xl border"
        >
          <Text className="text-lg font-bold">+</Text>
        </Pressable>

        <Pressable
          onPress={() => mapRef.current?.zoomOut()}
          className="bg-white p-3 rounded-b-xl border"
        >
          <Text className="text-lg font-bold">-</Text>
        </Pressable>

      </View>

      {/* ================= FLOAT ICON ================= */}
      <View className="absolute top-40 left-20 z-30">
        <MaterialCommunityIcons name="motorbike" size={26} />
      </View>

      {/* ================= SEARCH CARD ================= */}
      <View className="absolute bottom-24 left-6 right-6 bg-white p-6 rounded-3xl z-30 shadow">

        <Text className="text-xl font-bold mb-3">Where to?</Text>

        <TextInput
          value={destination}
          onChangeText={setDestination}
          placeholder="Enter destination"
          className="border p-3 rounded mb-4"
          onSubmitEditing={handleSearch}
        />

        <Pressable
          onPress={handleSearch}
          disabled={loading}
          className={`p-4 rounded ${loading ? 'bg-gray-400' : 'bg-black'}`}
        >
          <Text className="text-white text-center font-bold">
            {loading ? 'Searching...' : 'Search Location'}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/Rider/search' as Href)}
          className="mt-3 bg-blue-500 p-4 rounded"
        >
          <Text className="text-white text-center font-bold">
            Request Ride
          </Text>
        </Pressable>

      </View>

      {/* ================= BOTTOM NAV ================= */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 z-40"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View className="flex-row justify-between">

          <Pressable className="flex-1 items-center py-2">
            <Ionicons name="home" size={24} color="black" />
            <Text className="text-xs font-bold">Home</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/Rider/tab-two' as Href)}
            className="flex-1 items-center py-2"
          >
            <Ionicons name="document-text" size={24} color="#64748b" />
            <Text className="text-xs text-slate-500">Activity</Text>
          </Pressable>

          <Pressable className="flex-1 items-center py-2">
            <Ionicons name="chatbubble" size={24} color="#64748b" />
            <Text className="text-xs text-slate-500">Messages</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/Rider/rider-profile' as Href)}
            className="flex-1 items-center py-2"
          >
            <Ionicons name="person" size={24} color="#64748b" />
            <Text className="text-xs text-slate-500">Profile</Text>
          </Pressable>

        </View>
      </View>

    </View>
  );
}