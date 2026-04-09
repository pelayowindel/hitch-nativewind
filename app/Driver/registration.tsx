import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import FloatingLoading from "../../constants/floatingloading";
import useAppFonts from "../../hooks/useAppFonts";
import { supabase } from "../../lib/supabase";

const SIGNUP_RETRY_COOLDOWN_MS = 60_000;

export default function DriverRegistration() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [retryAt, setRetryAt] = useState<number | null>(null);

  const fontsLoaded = useAppFonts();

  useEffect(() => {
    if (!retryAt) return;

    const timeoutMs = Math.max(0, retryAt - Date.now());
    const timer = setTimeout(() => setRetryAt(null), timeoutMs);

    return () => clearTimeout(timer);
  }, [retryAt]);

  if (!fontsLoaded) {
    return null;
  }

  const handleContinue = async () => {
    if (loading) return;

    const isCoolingDown = !!retryAt && retryAt > Date.now();
    if (isCoolingDown) {
      const secondsLeft = Math.ceil((retryAt - Date.now()) / 1000);
      Alert.alert("Please wait", `Too many attempts. Try again in ${secondsLeft}s.`);
      return;
    }

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Missing fields", "Email, password, and confirm password are required.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Password and confirm password must match.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            requested_role: "driver",
          },
        },
      });

      if (error) {
        const isRateLimited =
          error.status === 429 ||
          error.code === "over_email_send_rate_limit" ||
          error.message?.toLowerCase().includes("rate limit");

        if (isRateLimited) {
          setRetryAt(Date.now() + SIGNUP_RETRY_COOLDOWN_MS);
          Alert.alert(
            "Email limit reached",
            "Please wait about 60 seconds before requesting another signup email."
          );
          return;
        }

        Alert.alert("Signup failed", error.message);
        return;
      }


      Alert.alert("Account created", "You can now log in.", [
        { text: "OK", onPress: () => router.push("/LogIn") },
      ]);
    } catch (_error) {
      Alert.alert("Network error", "Could not register right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="flex-1 px-4 pt-6">

        {/* Header */}
        <View className="flex-row items-center mb-6">
          <View className="absolute top-1 left-1 h-full bg-black rounded-lg"
            style={{ width: 35 }} />
          <Pressable className="w-10 h-10 bg-white rounded border border-black shadow-lg"
            style={{ borderWidth: 2 }}
            onPress={() => router.push("/LogIn")}>
            <Text className="text-2xl text-center text-black font-bold">←</Text>
          </Pressable>
          <Text
            className="flex-1 text-center text-black text-xl"
            style={{ fontFamily: "PlusJakarta-Bold" }}
          >
            REGISTRATION
          </Text>
        </View>

        {/* Account Credentials */}
        <View className="flex-1 mt-6">
          <Text className="text-xl font-bold mb-1">ACCOUNT DETAILS</Text>
          <Text className="text-gray-500 mb-4">
            Create your login credentials
          </Text>

          {/* Email */}
          <View className="mb-6">
            <Text className="mb-1 font-semibold">EMAIL ADDRESS</Text>
            <TextInput
              className="bg-white border border-black rounded px-4 py-4"
              style={{ borderWidth: 2 }}
              placeholder="juan06@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}
          <View className="mb-6">
            <Text className="mb-1 font-semibold">PASSWORD</Text>
            <TextInput
              className="bg-white border border-black rounded px-4 py-4"
              style={{ borderWidth: 2 }}
              placeholder="Enter password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Confirm Password */}
          <View className="mb-6">
            <Text className="mb-1 font-semibold">CONFIRM PASSWORD</Text>
            <TextInput
              className="bg-white border border-black rounded px-4 py-4"
              style={{ borderWidth: 2 }}
              placeholder="Confirm password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          {/* Continue Button */}
          <View className="relative mt-auto">
            {/* Shadow */}
            <View
              className="absolute rounded-lg"
              style={{
                top: 5,
                left: 4,
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
              }}
            />

            <Pressable
              className="bg-orange-500 py-4 rounded items-center border border-black"
              style={{ borderWidth: 2 }}
              onPress={loading || (retryAt !== null && retryAt > Date.now()) ? undefined : handleContinue}
            >
              <Text className="font-bold text-black">
                {loading
                  ? "CREATING ACCOUNT..."
                  : retryAt && retryAt > Date.now()
                    ? "PLEASE WAIT"
                    : "CONTINUE"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <FloatingLoading visible={loading} label="LOADING...." />
    </SafeAreaView>
  );
}