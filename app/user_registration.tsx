import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

/* =============================
   SLIP CARD
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
      <View
        className="absolute bg-black rounded-md"
        style={{ width: "100%", height: "100%", top: 4, left: 4 }}
      />
      <View className="bg-white border-[3px] border-black rounded-md p-3">
        {children}
      </View>
    </View>
  );
}

/* =============================
   SLIP BUTTON
============================= */
function SlipButton({
  text,
  color,
  onPress,
}: {
  text: string;
  color: string;
  onPress?: () => void;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View className="items-center mb-4">
        <View className="relative w-full">
          {!pressed && (
            <View
              className="absolute bg-black rounded-md"
              style={{ width: "100%", height: "100%", top: 4, left: 4 }}
            />
          )}
          <View
            className="py-4 rounded-md border-2 border-black flex-row justify-center items-center"
            style={{
              backgroundColor: color,
              transform: pressed ? [{ translateX: 2 }, { translateY: 2 }] : [],
            }}
          >
            <Text
              style={{ fontFamily: "PlusJakarta-Bold" }}
              className="text-black text-lg"
            >
              {text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/* =============================
   USER REGISTRATION
============================= */
export default function UserRegistration() {
  const [gender, setGender] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const genders = ["MALE", "FEMALE"];

  // ===== Load Custom Fonts =====
  const [fontsLoaded] = useFonts({
    "PlusJakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Optionally, add a loading indicator
  }

  const handleRegister = () => {
    setIsRegistering(true);
    setModalVisible(true);

    setTimeout(() => {
      setIsRegistering(false); // Show "Registered Successfully"
    }, 2000);
  };

  const handleProceed = () => {
    setModalVisible(false);
    router.push("/LogIn");
  };

  return (
    <View className="flex-1 bg-[#D9D9D9]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={true}>
        <View className="px-4 py-6">
          <Text
            style={{ fontFamily: "PlusJakarta-Regular" }}
            className="text-gray-500 text-xs mb-4"
          >
            user registration
          </Text>

          {/* HEADER */}
          <View className="flex-row items-center mb-6 pb-2 border-b border-black">
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

          {/* SECTION TITLE */}
          <View className="items-center mb-4">
            <Text style={{ fontFamily: "PlusJakarta-Bold" }} className="text-lg">
              PERSONAL INFO
            </Text>
            <Text
              style={{ fontFamily: "PlusJakarta-Regular" }}
              className="text-gray-600 text-xs"
            >
              Let’s start with your basic details
            </Text>
          </View>

          {/* FORM */}
          <View className="gap-4">
            {/* NAME ROW */}
            <View className="flex-row gap-3">
              <View className="flex-1">
                <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                  FIRST NAME
                </Text>
                <SlipCard>
                  <TextInput
                    placeholder="Juan"
                    style={{ fontFamily: "PlusJakarta-Regular" }}
                  />
                </SlipCard>
              </View>

              <View className="flex-1">
                <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                  LAST NAME
                </Text>
                <SlipCard>
                  <TextInput
                    placeholder="Dela Cruz"
                    style={{ fontFamily: "PlusJakarta-Regular" }}
                  />
                </SlipCard>
              </View>
            </View>

            {/* GENDER DROPDOWN */}
            <View>
              <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                GENDER
              </Text>
              <SlipCard>
                <View>
                  <Pressable
                    onPress={() => setDropdownOpen(!dropdownOpen)}
                    className="flex-row justify-between items-center"
                  >
                    <Text style={{ fontFamily: "PlusJakarta-Bold" }}>
                      {gender || "Select Gender"}
                    </Text>
                    <Text className="text-lg">{dropdownOpen ? "▲" : "▼"}</Text>
                  </Pressable>

                  {dropdownOpen && (
                    <View className="mt-2 border-t border-black">
                      {genders.map((item) => (
                        <Pressable
                          key={item}
                          onPress={() => {
                            setGender(item);
                            setDropdownOpen(false);
                          }}
                          className="p-3 border-b border-black last:border-b-0"
                        >
                          <Text style={{ fontFamily: "PlusJakarta-Bold" }} className="text-center">
                            {item}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </SlipCard>
            </View>

            {/* ADDRESS */}
            <View>
              <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                ADDRESS
              </Text>
              <SlipCard>
                <TextInput
                  placeholder="Random Place - Bogo City, Cebu"
                  style={{ fontFamily: "PlusJakarta-Regular" }}
                />
              </SlipCard>
            </View>

            {/* DATE OF BIRTH */}
            <View>
              <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                DATE OF BIRTH
              </Text>
              <SlipCard>
                <TextInput
                  placeholder="01/27/2000"
                  style={{ fontFamily: "PlusJakarta-Regular" }}
                />
              </SlipCard>
              <Text
                style={{ fontFamily: "PlusJakarta-Regular" }}
                className="text-gray-700 text-[11px] mt-1"
              >
                You must be at least 18 years old to drive
              </Text>
            </View>

            {/* MOBILE NUMBER */}
            <View>
              <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                Mobile Number
              </Text>
              <View className="flex-row gap-3">
                <View className="w-24">
                  <SlipCard>
                    <TextInput
                      value="+63"
                      editable={false}
                      style={{ fontFamily: "PlusJakarta-Bold", textAlign: "center" }}
                    />
                  </SlipCard>
                </View>

                <View className="flex-1">
                  <SlipCard>
                    <TextInput
                      placeholder="123 456 7834"
                      keyboardType="number-pad"
                      maxLength={12}
                      style={{ fontFamily: "PlusJakarta-Bold" }}
                    />
                  </SlipCard>
                </View>
              </View>
            </View>

            {/* EMAIL */}
            <View>
              <Text style={{ fontFamily: "PlusJakarta-Medium" }} className="mb-1">
                EMAIL ADDRESS
              </Text>
              <SlipCard>
                <TextInput
                  placeholder="juan06@gmail.com"
                  style={{ fontFamily: "PlusJakarta-Regular" }}
                />
              </SlipCard>
            </View>

            {/* REGISTER BUTTON */}
            <SlipButton text="REGISTER" color="#00FF38" onPress={handleRegister} />
          </View>
        </View>
      </ScrollView>

      {/* =============================
          REGISTERING MODAL
      ============================= */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white border-2 border-black rounded-md p-6 w-full relative">
            {isRegistering ? (
              <>
                <Text style={{ fontFamily: "PlusJakarta-Bold" }} className="text-center text-lg mb-4">
                  Registering...
                </Text>
                <Text style={{ fontFamily: "PlusJakarta-Regular" }} className="text-center text-gray-700 mb-4">
                  Please wait while we create your account.
                </Text>
                <ActivityIndicator size="large" color="#00FF38" />
              </>
            ) : (
              <>
                <Text style={{ fontFamily: "PlusJakarta-Bold" }} className="text-center text-lg mb-4">
                  Registered Successfully!
                </Text>
                <Text style={{ fontFamily: "PlusJakarta-Regular" }} className="text-center text-gray-700 mb-6">
                  Your account has been created.
                </Text>
                <TouchableOpacity
                  className="bg-green-400 py-3 rounded-md border-2 border-black"
                  onPress={handleProceed}
                >
                  <Text style={{ fontFamily: "PlusJakarta-Bold" }} className="text-center text-black">
                    OK
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}