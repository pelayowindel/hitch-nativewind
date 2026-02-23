import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
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

/* =============================
   SLIP BUTTON
============================= */
function SlipButton({
  text,
  icon,
  color,
  onPress,
}: {
  text: string;
  icon?: React.ReactNode;
  color: string;
  onPress?: () => void;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <View className="items-center mb-4">
        <View className="relative w-full">
          {/* Slip Shadow */}
          {!pressed && (
            <View
              className="absolute bg-black rounded-md"
              style={{
                width: "100%",
                height: "100%",
                top: 4,
                left: 4,
                opacity: 10,
              }}
            />
          )}
          {/* Button Body */}
          <View
            className="py-4 rounded-md border-2 border-black flex-row justify-center items-center"
            style={{
              backgroundColor: color,
              transform: pressed ? [{ translateX: 2 }, { translateY: 2 }] : [],
            }}
          >
            {icon && <View className="mr-2">{icon}</View>}
            <Text className="font-bold text-black text-lg">{text}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    <SafeAreaView className="flex-1 bg-gray-200 px-6 pt-12">
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
      <Text className="text-center font-semibold mb-8">COMPLETE TO LOG IN</Text>

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

      {/* Continue Button as SlipButton */}
      <SlipButton
        text="CONTINUE TO LOG IN"
        color="#00FF38"
        onPress={handleRegister}
      />
    </SafeAreaView>
  );
};

export default RegistrationScreen;