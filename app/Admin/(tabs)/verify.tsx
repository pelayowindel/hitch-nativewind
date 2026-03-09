import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from "react-native";

export default function VerifyApplicant() {
  const handleReject = () => {
    Alert.alert("Rejected", "You pressed the Reject button.");
  };

  const handleApprove = () => {
    Alert.alert("Approved", "You pressed the Approved Driver button.");
  };

  return (
    <ScrollView className="flex-1 bg-gray-800 p-4" contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center space-x-2">
          <View className="w-10 h-10 bg-white rounded-full justify-center items-center">
            {/* ID Icon Placeholder */}
            <Text className="text-black font-extrabold text-lg">ID</Text>
          </View>
          <Text className="text-white font-extrabold text-xl uppercase">JOHN DOE</Text>
        </View>
        <TouchableOpacity className="border border-gray-600 rounded px-2 py-1">
          <Text className="text-gray-400 text-xl font-semibold">×</Text>
        </TouchableOpacity>
      </View>

      {/* Driver License No */}
      <View className="border border-gray-600 rounded-md bg-gray-700 p-3 mb-3">
        <Text className="text-gray-400 uppercase font-semibold text-xs">DRIVER LICENSE NO.</Text>
        <Text className="text-blue-400 font-extrabold text-lg mt-1">N02 - 12345678</Text>
      </View>

      {/* Date of Birth */}
      <View className="border border-gray-600 rounded-md bg-gray-700 p-3 mb-3">
        <Text className="text-gray-400 uppercase font-semibold text-xs">DATE OF BIRTH</Text>
        <Text className="text-white font-extrabold text-lg mt-1">2003 - 09 - 03</Text>
      </View>

      {/* Address */}
      <View className="border border-gray-600 rounded-md bg-gray-700 p-3 mb-6">
        <Text className="text-gray-400 uppercase font-semibold text-xs">ADDRESS</Text>
        <Text className="text-white font-extrabold text-sm mt-1">
          RANDOM PLACE, BOGO CITY , CEBU
        </Text>
      </View>

      {/* License (front and back) */}
      <View className="flex-row space-x-3 mb-4">
        {/* Front */}
        <View className="flex-1 border border-gray-600 rounded-md bg-gray-700 p-1">
          <Image
            source={{ uri: "https://via.placeholder.com/150x90.png?text=License+Front" }}
            className="w-full h-24 rounded-md"
            resizeMode="contain"
          />
          <Text className="text-gray-400 text-xs mt-1 text-center">LICENSE (FRONT)</Text>
        </View>

        {/* Back */}
        <View className="flex-1 border border-gray-600 rounded-md bg-gray-700 p-1">
          <Image
            source={{ uri: "https://via.placeholder.com/150x90.png?text=License+Back" }}
            className="w-full h-24 rounded-md"
            resizeMode="contain"
          />
          <Text className="text-gray-400 text-xs mt-1 text-center">LICENSE (BACK)</Text>
        </View>
      </View>

      {/* OR/CR and NBI Clearance placeholders */}
      <View className="flex-row space-x-3 mb-6">
        <View className="flex-1 border border-gray-600 rounded-md bg-gray-700 h-24" />
        <View className="flex-1 border border-gray-600 rounded-md bg-gray-700 h-24" />
      </View>

      {/* Background Check */}
      <View className="flex-row items-center border border-gray-600 rounded-md bg-gray-700 p-3 mb-6">
        <View className="bg-green-600 rounded-full w-5 h-5 justify-center items-center mr-3">
          <Text className="text-white font-bold text-xs">✓</Text>
        </View>
        <Text className="flex-1 text-gray-400 text-xs font-semibold">
          BACKGROUND CHECK <Text className="text-xs">(no criminal record found)</Text>
        </Text>
        <Text className="text-green-500 font-extrabold text-xs">PASSED</Text>
      </View>

      {/* Buttons */}
      <View className="flex-row space-x-3">
        <TouchableOpacity
          onPress={handleReject}
          className="flex-1 bg-red-600 rounded-md py-3 justify-center items-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-extrabold uppercase text-base">REJECT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleApprove}
          className="flex-1 bg-blue-600 rounded-md py-3 justify-center items-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-extrabold uppercase text-base">APPROVED DRIVER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}