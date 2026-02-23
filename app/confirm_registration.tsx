import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* =============================
   SLIP CARD (Drop Shadow Wrapper)
============================= */
function SlipCard({
  children,
  styleClass = "",
}: {
  children: React.ReactNode;
  styleClass?: string;
}) {
  return (
    <View className={`relative ${styleClass}`}>
      {/* Shadow Layer */}
      <View
        className="absolute bg-black rounded-md"
        style={{
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />
      {/* Main Card */}
      <View className="bg-white border-2 border-black rounded-md">{children}</View>
    </View>
  );
}

const RegistrationScreen: React.FC = () => {
  const router = useRouter();

  // ────────── DEFAULT EMAIL & PASSWORD ──────────
  const [email, setEmail] = useState<string>("demo@gmail.com");
  const [password, setPassword] = useState<string>("123");
  const [confirmPassword, setConfirmPassword] = useState<string>("123");
  // ──────────────────────────────────────────────

  // Navigate to login
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    router.push("/LogIn");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200 px-6">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center mt-4 mb-6">
        <TouchableOpacity
          className="p-2 bg-gray-300 rounded"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>

        <Text className="flex-1 text-center text-lg font-semibold tracking-wider">
          REGISTRATION
        </Text>

        <View className="w-8" />
      </View>

      <View className="border-b border-black mb-6" />

      {/* Subtitle */}
      <Text className="text-center font-semibold mb-8">
        COMPLETE TO LOG IN
      </Text>

      {/* Email */}
      <Text className="mb-2 text-xs font-semibold">EMAIL ADDRESS</Text>
      <SlipCard styleClass="mb-6">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="juan06@gmail.com"
          className="px-4 py-3"
        />
      </SlipCard>

      {/* Password */}
      <Text className="mb-2 text-xs font-semibold">PASSWORD</Text>
      <SlipCard styleClass="mb-6">
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="px-4 py-3"
        />
      </SlipCard>
0
      {/* Confirm Password */}
      <Text className="mb-2 text-xs font-semibold">CONFIRM PASSWORD</Text>
      <SlipCard styleClass="mb-12">
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="px-4 py-3"
        />
      </SlipCard>

      {/* Continue Button */}
      <SlipCard>
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-[#00FF38] py-4 items-center"
        >
          <Text className="font-bold text-black tracking-wide">
            CONTINUE TO LOG IN
          </Text>
        </TouchableOpacity>
      </SlipCard>
    </SafeAreaView>
  );
};

export default RegistrationScreen;