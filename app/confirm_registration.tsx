import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Animated,
  Easing,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { supabase } from "../lib/supabase";
import SlipCard from "../components/ui/SlipCard";
import SlipButton from "../components/ui/SlipButton";
import useAppFonts from "../hooks/useAppFonts";

const RegistrationScreen: React.FC = () => {
  const router = useRouter();
  const SIGNUP_RETRY_COOLDOWN_MS = 60_000;

  /* =============================
     STATE
  ============================= */
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [retryAt, setRetryAt] = useState<number | null>(null);

  /* =============================
     LOAD FONTS
  ============================= */
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null; // Optional: Add loading indicator
  }

  /* =============================
     ANIMATIONS
  ============================= */
  const loadingFloatAnim = useRef(new Animated.Value(0)).current;
  const modalFloatAnim = useRef(new Animated.Value(0)).current;

  const startFloating = (anim: Animated.Value, amplitude = 20, duration = 800) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -amplitude,
          duration: duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: amplitude,
          duration: duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startFloating(loadingFloatAnim);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (verifying) {
      startFloating(modalFloatAnim, 15, 600);
    } else {
      modalFloatAnim.setValue(0);
    }
  }, [verifying]);

  useEffect(() => {
    if (!retryAt) return;

    const timeoutMs = Math.max(0, retryAt - Date.now());
    const timer = setTimeout(() => setRetryAt(null), timeoutMs);

    return () => clearTimeout(timer);
  }, [retryAt]);

  /* =============================
     HANDLERS
  ============================= */
  const handleRegister = async () => {
    const isCoolingDown = !!retryAt && retryAt > Date.now();

    if (isCoolingDown) {
      const secondsLeft = Math.ceil((retryAt - Date.now()) / 1000);
      alert(`Too many attempts. Please wait ${secondsLeft}s before trying again.`);
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!email.trim() || !password.trim()) {
      alert("Email and password are required");
      return;
    }

    try {
      setRegistering(true);

      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (error) {
        const isRateLimited =
          error.status === 429 ||
          error.code === "over_email_send_rate_limit" ||
          error.message?.toLowerCase().includes("rate limit");

        if (isRateLimited) {
          setRetryAt(Date.now() + SIGNUP_RETRY_COOLDOWN_MS);
          alert("Email send limit reached. Please wait about 60 seconds, then try again.");
          return;
        }

        alert(error.message);
        return;
      }

      alert("Registration successful. Please log in.");
      router.replace("/LogIn");
    } catch (_err) {
      alert("Unable to register right now. Please try again.");
    } finally {
      setRegistering(false);
    }
  };

  const handleVerify = () => {
    setVerifying(true);

    setTimeout(() => {
      setVerifying(false);

      if (verificationCode === "123456") {
        setModalVisible(false);
        router.push("/user_registration");
      } else {
        alert("Invalid verification code");
      }
    }, 1500);
  };

  /* =============================
     RENDER LOADING SCREEN
  ============================= */
  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-200">
        <Animated.View style={{ transform: [{ translateY: loadingFloatAnim }] }}>
          <MaterialCommunityIcons name="motorbike" size={80} color="#000000" />
        </Animated.View>
        <Text
          style={{ fontFamily: "PlusJakarta-Bold" }}
          className="mt-6 text-black text-lg"
        >
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  /* =============================
     RENDER REGISTRATION FORM
  ============================= */
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

        <Text
          style={{ fontFamily: "PlusJakarta-Bold" }}
          className="flex-1 text-center text-lg tracking-wider"
        >
          REGISTRATION
        </Text>

        <View className="w-8" />
      </View>

      <View className="border-b border-black mb-6" />

      <Text
        style={{ fontFamily: "PlusJakarta-Medium" }}
        className="text-center mb-8 text-lg"
      >
        COMPLETE TO LOG IN
      </Text>

      {/* Email */}
      <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-2 text-xs">
        EMAIL ADDRESS
      </Text>
      <SlipCard containerClassName="mb-6">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="juan06@gmail.com"
          className="px-4 py-3"
          style={{ fontFamily: "PlusJakarta-Regular" }}
        />
      </SlipCard>

      {/* Password */}
      <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-2 text-xs">
        PASSWORD
      </Text>
      <SlipCard containerClassName="mb-6">
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="px-4 py-3"
          style={{ fontFamily: "PlusJakarta-Regular" }}
        />
      </SlipCard>

      {/* Confirm Password */}
      <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-2 text-xs">
        CONFIRM PASSWORD
      </Text>
      <SlipCard containerClassName="mb-12">
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="px-4 py-3"
          style={{ fontFamily: "PlusJakarta-Regular" }}
        />
      </SlipCard>

      <SlipButton
        text={
          registering
            ? "CREATING ACCOUNT..."
            : retryAt && retryAt > Date.now()
            ? "PLEASE WAIT"
            : "CONTINUE"
        }
        color="#00FF38"
        textStyle={{ fontFamily: "PlusJakarta-Bold" }}
        disabled={registering || (retryAt !== null && retryAt > Date.now())}
        onPress={registering || (retryAt !== null && retryAt > Date.now()) ? undefined : handleRegister}
      />

      {/* Verification Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white border-2 border-black rounded-md p-6 w-full relative">
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ position: "absolute", top: 12, right: 12, zIndex: 10 }}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            <Text
              style={{ fontFamily: "PlusJakarta-Bold" }}
              className="text-center mb-4 text-lg"
            >
              ENTER VERIFICATION CODE
            </Text>

            <TextInput
              value={verificationCode}
              onChangeText={setVerificationCode}
              placeholder="Enter 6-digit code"
              keyboardType="numeric"
              className="border-2 border-black rounded-md px-4 py-3 mb-6"
              style={{ fontFamily: "PlusJakarta-Regular" }}
            />

            {verifying ? (
              <View className="flex-row justify-center items-center">
                <Animated.View style={{ transform: [{ translateY: modalFloatAnim }] }}>
                  <MaterialCommunityIcons name="motorbike" size={48} color="#000000" />
                </Animated.View>
                <Text
                  style={{ fontFamily: "PlusJakarta-Bold" }}
                  className="ml-4 text-black"
                >
                  Verifying...
                </Text>
              </View>
            ) : (
              <SlipButton
                text="VERIFY"
                color="#00FF38"
                onPress={handleVerify}
                textStyle={{ fontFamily: "PlusJakarta-Bold" }}
              />
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegistrationScreen;