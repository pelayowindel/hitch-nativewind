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

  if (!fontsLoaded) return null;

  const getRouteForRole = (role: AppRole): Href => {
    if (role === "admin") return "/Admin";
    if (role === "driver") return "/Driver/driver-dashboard"; // fallback only
    return "/Rider/rider-dashboard";
  };

  // 🔥 DRIVER FLOW
  const handleDriverFlow = async (userId: string) => {
    try {
      // 1. Driver Info
      const { data: driver } = await supabase
        .from("drivers")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (!driver) {
        router.replace("/Driver/driverregistration");
        return;
      }

      // 2. Vehicle Info
      const { data: vehicle } = await supabase
        .from("vehicles")
        .select("*")
        .eq("driver_id", driver.id)
        .maybeSingle();

      if (!vehicle) {
        router.replace("/Driver/vehicleinfo");
        return;
      }

      // 3. Documents
      const { data: docs } = await supabase
        .from("driver_documents")
        .select("*")
        .eq("driver_id", driver.id)
        .maybeSingle();

      if (!docs) {
        router.replace("/Driver/driverdocuments");
        return;
      }

      // 4. Review
      if (!driver.is_reviewed) {
        router.replace("/Driver/driverdocreview");
        return;
      }

      // ✅ Done
      router.replace("/Driver/driver-dashboard");

    } catch (error) {
      Alert.alert("Error", "Failed to load driver progress.");
    }
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

      // 🔑 Get role
      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .maybeSingle();

      const role = (roleRow?.role ?? "rider") as AppRole;

      // 🔥 ROLE HANDLING
      if (role === "driver") {
        await handleDriverFlow(userId);
      } else {
        router.replace(getRouteForRole(role));
      }

    } catch (_error) {
      Alert.alert("Network error", "Could not log in right now.");
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
          {/* Login */}
          <SlipButton
            text={isLoggingIn ? "LOGGING IN..." : "LOG IN"}
            color="#FF8C00"
            widthClassName="w-[66%]"
            containerClassName="items-center mb-4"
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
            disabled={isLoggingIn}
            onPress={isLoggingIn ? undefined : handleLogin}
          />

          {/* OR */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-black" />
            <Text className="mx-3 text-xs text-black">OR</Text>
            <View className="flex-1 h-[1px] bg-black" />
          </View>

          {/* Social */}
          <SlipButton
            text="Continue With Google"
            color="#FF8C00"
            icon={<AntDesign name="google" size={16} color="black" />}
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
          />

          <SlipButton
            text="Continue With Apple"
            color="#FF8C00"
            buttonClassName="py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            shadowClassName="absolute bg-black rounded-2xl"
            shadowStyle={{ top: 3, left: 3 }}
            textClassName="text-black"
          />

          {/* Register */}
          <View className="flex-row justify-center mt-6">
            <Text>Don't Have An Account? </Text>
            <Text
              className="text-[#FF8C00]"
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