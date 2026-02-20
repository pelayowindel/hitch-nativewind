import React, { useState } from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, StatusBar, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import RegisterOverlay from "./RegisterOverlay";

export default function LoginScreen() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const [fontsLoaded] = useFonts({
    "PlusJakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
          <FloatingInput value={email} onChangeText={setEmail} />

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
          <BrutalButton text="LOG IN" small />

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

          <BrutalButton
            text="Continue With Google"
            icon={<AntDesign name="google" size={16} color="black" />}
          />

          <BrutalButton text="Continue With Apple" />

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

/* =========================================
   FLOATING INPUT (Tiny Slip Shadow)
========================================= */

function FloatingInput({
  value,
  onChangeText,
  secure = false,
}: {
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
}) {
  const lift = useState(new Animated.Value(0))[0];

  const handleFocus = () => {
    Animated.timing(lift, {
      toValue: -2,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(lift, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="relative mb-6">
      <View
        className="absolute bg-black rounded-2xl"
        style={{
          width: "100%",
          height: "100%",
          top: 3,
          left: 3,
          opacity: 10, 
        }}
      />

      <Animated.View
        style={{
          transform: [{ translateY: lift }],
        }}
      >
        <View className="bg-white rounded-2xl border-2 border-black px-4 py-3">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secure}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text-black"
            style={{ fontFamily: "PlusJakarta-Regular" }}
          />
        </View>
      </Animated.View>
    </View>
  );
}

/* =========================================
   BUTTON (Slip Shadow + Font)
========================================= */

function BrutalButton({
  text,
  icon,
  small = false,
}: {
  text: string;
  icon?: React.ReactNode;
  small?: boolean;
}) {
  const [pressed, setPressed] = useState(false);
  const widthStyle = small ? "66%" : "100%";

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View className="items-center mb-4">
        <View style={{ width: widthStyle }} className="relative">

          {!pressed && (
            <View
              className="absolute bg-black rounded-2xl"
              style={{
                width: "100%",
                height: "100%",
                top: 3,
                left: 3,
                opacity: 10,
              }}
            />
          )}

          <View
            className="bg-[#FF8C00] py-3 rounded-2xl border-2 border-black flex-row justify-center items-center"
            style={{
              transform: pressed
                ? [{ translateX: 2 }, { translateY: 2 }]
                : [],
            }}
          >
            {icon && <View className="mr-2">{icon}</View>}
            <Text
              className="text-black"
              style={{ fontFamily: "PlusJakarta-Bold" }}
            >
              {text}
            </Text>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

