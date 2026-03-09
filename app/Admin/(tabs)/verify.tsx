import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const InfoBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <View className="border border-gray-400 rounded-md p-2 flex-1 m-1">
      <Text className="text-[10px] text-gray-500">{label}</Text>
      <Text className="text-blue-600 font-semibold mt-1">{value}</Text>
    </View>
  );
};

const UploadBox = ({ label, image }: { label: string; image?: string }) => {
  return (
    <View className="flex-1 m-1">
      <View className="border border-gray-400 rounded-md h-24 items-center justify-center bg-white">
        {image ? (
          <Image
            source={{ uri: image }}
            className="w-16 h-16"
            resizeMode="contain"
          />
        ) : (
          <Text className="text-xs text-gray-500">{label}</Text>
        )}
      </View>
      <Text className="text-xs text-center mt-1">{label}</Text>
    </View>
  );
};

export default function DriverVerification() {
  return (
    <View className="flex-1 bg-gray-200 p-3">

      {/* Upper-right X Button */}
      <View className="absolute top-3 right-3 w-6 h-6 border border-black rounded-sm items-center justify-center bg-white">
        <Text className="text-xs font-bold">X</Text>
      </View>

      {/* Header */}
      <View className="flex-row items-center mb-3 mt-4">

        {/* Driver Image */}
        <View className="w-14 h-14 border border-gray-400 rounded-md items-center justify-center bg-white mr-3">
          <Image
            source={{ uri: "https://via.placeholder.com/60" }}
            className="w-12 h-12 rounded-sm"
          />
        </View>

        {/* Applicant Info */}
        <View>
          <Text className="text-xs text-gray-500">VERIFYING APPLICANT</Text>
          <Text className="text-lg font-bold">JOHN DOE</Text>
        </View>

      </View>

      {/* Info Row */}
      <View className="flex-row">
        <InfoBox label="DRIVER LICENSE NO." value="NO- 12345678" />
        <InfoBox label="DATE OF BIRTH" value="2003 - 09 - 03" />
      </View>

      {/* Address */}
      <View className="border border-gray-400 rounded-md p-2 m-1">
        <Text className="text-[10px] text-gray-500">ADDRESS</Text>
        <Text className="font-semibold mt-1">
          RANDOM PLACE, BOGO CITY, CEBU
        </Text>
      </View>

      {/* Upload Section */}
      <View className="flex-row">
        <UploadBox label="LICENSE (FRONT)" image="https://via.placeholder.com/80" />
        <UploadBox label="LICENSE (BACK)" />
      </View>

      <View className="flex-row">
        <UploadBox label="OR / CR" />
        <UploadBox label="NBI CLEARANCE" />
      </View>

      {/* Background Check */}
      <View className="border border-gray-400 rounded-md p-3 m-1 flex-row justify-between items-center bg-white">
        <View className="flex-row items-center">
          <Text className="text-green-600 mr-2">✔</Text>
          <View>
            <Text className="font-semibold">BACKGROUND CHECK</Text>
            <Text className="text-xs text-gray-500">
              No criminal record found
            </Text>
          </View>
        </View>
        <Text className="text-green-600 font-bold">PASSED</Text>
      </View>

      {/* Buttons */}
      <View className="flex-row mt-3">
        <TouchableOpacity className="flex-1 bg-red-500 py-3 rounded-md mr-1">
          <Text className="text-center text-white font-bold">REJECT</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-blue-600 py-3 rounded-md ml-1">
          <Text className="text-center text-white font-bold">
            APPROVED DRIVER
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}