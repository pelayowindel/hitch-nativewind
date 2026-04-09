import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    if (role === "driver") return "/Driver/driver-dashboard";
    return "/Rider/rider-dashboard";
  };

  const handleDriverFlow = async (userId: string) => {
    try {

      const { data: driver } = await supabase
        .from("drivers")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (!driver) {
        Alert.alert(
          "Complete Your Profile",
          "Please complete your driver profile to continue.",
          [
            {
              text: "OK",
              onPress: () =>
                router.replace("/Driver/driverregistration"),
            },
          ]
        );
        return;
      }

      const { data: vehicle } = await supabase
        .from("vehicles")
        .select("*")
        .eq("driver_id", driver.id)
        .maybeSingle();

      if (!vehicle) {
        Alert.alert(
          "Vehicle Required",
          "Please add your vehicle information to continue.",
          [
            {
              text: "OK",
              onPress: () => router.replace("/Driver/vehicleinfo"),
            },
          ]
        );
        return;
      }

      const { data: docs } = await supabase
        .from("driver_documents")
        .select("*")
        .eq("driver_id", driver.id)
        .maybeSingle();

      if (!docs) {
        Alert.alert(
          "Documents Required",
          "Please upload your required documents to continue.",
          [
            {
              text: "OK",
              onPress: () =>
                router.replace("/Driver/driverdocuments"),
            },
          ]
        );
        return;
      }

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

      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .maybeSingle();

      const role = (roleRow?.role ?? "rider") as AppRole;

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


          <View className="bg-[#D9D9D9] p-6 mb-8 rounded-xl">
            <Text className="text-center text-2xl text-black">
              Hop in – Log In to Your Account
            </Text>
          </View>

          <Text className="text-sm mb-2 text-black">Email</Text>
          <FloatingInput value={email} onChangeText={setEmail} />

          <Text className="text-sm mb-2 mt-6 text-black">Password</Text>
          <FloatingInput value={password} onChangeText={setPassword} secure />

          <View className="flex-row justify-between items-center mt-6 mb-8">
            <View className="flex-row items-center">
              <View className="w-4 h-4 mr-2 border-2 border-black" />
              <Text className="text-xs text-black">Remember me</Text>
            </View>

            <Text className="text-xs text-black">
              Forgot Password?
            </Text>
          </View>

          <SlipButton
            text={isLoggingIn ? "LOGGING IN..." : "LOG IN"}
            color="#FF8C00"
            widthClassName="w-[66%]"
            containerClassName="items-center mb-4"
            disabled={isLoggingIn}
            onPress={isLoggingIn ? undefined : handleLogin}
          />

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-black" />
            <Text className="mx-3 text-xs text-black">OR</Text>
            <View className="flex-1 h-[1px] bg-black" />
          </View>

          <SlipButton text="Continue With Google" color="#FF8C00" />
          <SlipButton text="Continue With Apple" color="#FF8C00" />

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