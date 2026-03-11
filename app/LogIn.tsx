import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import RegisterOverlay from "./RegisterOverlay";
import FloatingInput from "../components/ui/FloatingInput";
import SlipButton from "../components/ui/SlipButton";
import useAppFonts from "../hooks/useAppFonts";
import { supabase } from "../lib/supabase";
import { AppRole } from "../contexts/SupabaseContext";

export default function LoginScreen() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }

  const getRouteForRole = (role: AppRole): Href => {
    if (role === "driver") return "/Driver/driver-dashboard";
    if (role === "admin") return "/Admin";
    return "/Rider/rider-dashboard";
  };

  const handleLogin = async () => {
    if (isLoggingIn) return;

    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing credentials", "Enter your email and password.");
      return;
    }

    try {
      setIsLoggingIn(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Login failed", error.message);
        return;
      }

      const userId = data.user?.id;
      if (!userId) {
        Alert.alert("Login failed", "No user session returned.");
        return;
      }

      const { data: roleRow, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .single();

      if (roleError) {
        Alert.alert(
          "Role error",
          "Logged in, but could not load your role. Continuing as rider."
        );
        router.replace(getRouteForRole("rider"));
        return;
      }

      const role = (roleRow?.role ?? "rider") as AppRole;
      router.replace(getRouteForRole(role));
    } catch (_error) {
      Alert.alert("Network error", "Could not log in right now. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#E8E8E8]">
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 mx-6 my-10 rounded-2xl p-6">

          {/* Title */}
          <View className="bg-[#D9D9D9] p-6 mb-8 rounded-xl">
            <Text
              className="text-center text-2xl text-black"
              style={{ fontFamily: "PlusJakarta-Bold" }}
            >
              Hop in – Log In to Your Rider Account
            </Text>
          </View>

          {/* Email */}
          <Text
            className="text-sm mb-2 text-black"
            style={{ fontFamily: "PlusJakarta-Medium" }}
          >
            Email
          </Text>
          <FloatingInput
            value={email}
            onChangeText={setEmail}
            inputStyle={{ fontFamily: "PlusJakarta-Regular" }}
          />

          {/* Password */}
          <Text
            className="text-sm mb-2 mt-6 text-black"
            style={{ fontFamily: "PlusJakarta-Medium" }}
          >
            Password
          </Text>
          <FloatingInput
            value={password}
            onChangeText={setPassword}
            secure
            inputStyle={{ fontFamily: "PlusJakarta-Regular" }}
          />

          {/* Remember */}
          <View className="flex-row justify-between items-center mt-6 mb-8">
            <View className="flex-row items-center">
              <View
                className={`w-4 h-4 mr-2 border-2 border-black ${
                  remember ? "bg-black" : "bg-white"
                }`}
              />
              <Text
                className="text-xs text-black"
                style={{ fontFamily: "PlusJakarta-Regular" }}
              >
                Remember me
              </Text>
            </View>

            <Text
              className="text-xs text-black"
              style={{ fontFamily: "PlusJakarta-Regular" }}
            >
              Forget Password ?
            </Text>
          </View>

          {/* Buttons */}
          <SlipButton
            text={isLoggingIn ? "LOGGING IN..." : "LOG IN"}
            color="#FF8C00"
            widthClassName="w-[66%]"
            containerClassName="items-center mb-4"
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
            textStyle={{ fontFamily: "PlusJakarta-Bold" }}
            disabled={isLoggingIn}
            onPress={isLoggingIn ? undefined : handleLogin}
          />

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-black" />
            <Text
              className="mx-3 text-xs text-black"
              style={{ fontFamily: "PlusJakarta-Medium" }}
            >
              OR
            </Text>
            <View className="flex-1 h-[1px] bg-black" />
          </View>

          <SlipButton
            text="Continue With Google"
            color="#FF8C00"
            icon={<AntDesign name="google" size={16} color="black" />}
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
            textStyle={{ fontFamily: "PlusJakarta-Bold" }}
          />

          <SlipButton
            text="Continue With Apple"
            color="#FF8C00"
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
            textStyle={{ fontFamily: "PlusJakarta-Bold" }}
          />

          {/* Register */}
          <View className="flex-row justify-center mt-6">
            <Text
              className="text-base text-black"
              style={{ fontFamily: "PlusJakarta-Regular" }}
            >
              Don't Have An Account?{" "}
            </Text>
            <Text
              className="text-base text-[#FF8C00]"
              style={{ fontFamily: "PlusJakarta-Bold" }}
              onPress={() => setShowRegister(true)}
            >
              Register
            </Text>
            <RegisterOverlay
              visible={showRegister}
              onClose={() => setShowRegister(false)}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}

