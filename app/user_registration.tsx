import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
        style={{
          width: "100%",
          height: "100%",
          top: 4,
          left: 4,
        }}
      />
      <View className="bg-white border-[3px] border-black rounded-md p-3">
        {children}
      </View>
    </View>
  );
}

export default function UserRegistration() {
  const [gender, setGender] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const genders = ["MALE", "FEMALE"];

  return (
    <View className="flex-1 bg-[#D9D9D9]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={true}>
        <View className="px-4 py-6">
          {/* PAGE TITLE */}
          <Text className="text-gray-500 text-xs mb-4">user registration</Text>

          {/* HEADER */}
          <View className="flex-row items-center mb-6 pb-2 border-b border-black">
            {/* ←←← ARROW BACK BUTTON WITH IONICON →→→ */}
            <TouchableOpacity
              className="p-2 bg-gray-300 rounded"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
            {/* ←←← END OF ARROW BACK BUTTON →→→ */}

            <Text className="flex-1 text-center text-lg font-semibold tracking-wider">
              REGISTRATION
            </Text>

            <View className="w-8" />
          </View>

          {/* SECTION TITLE */}
          <View className="items-center mb-4">
            <Text className="font-bold text-lg">PERSONAL INFO</Text>
            <Text className="text-gray-600 text-xs">
              Let’s start with your basic details
            </Text>
          </View>

          {/* FORM */}
          <View className="gap-4">
            {/* NAME ROW */}
            <View className="flex-row gap-3">
              <View className="flex-1">
                <Text className="font-semibold mb-1">FIRST NAME</Text>
                <SlipCard>
                  <TextInput placeholder="Juan" />
                </SlipCard>
              </View>

              <View className="flex-1">
                <Text className="font-semibold mb-1">LAST NAME</Text>
                <SlipCard>
                  <TextInput placeholder="Dela Cruz" />
                </SlipCard>
              </View>
            </View>

            {/* GENDER DROPDOWN */}
            <View>
              <Text className="font-semibold mb-1">GENDER</Text>
              <SlipCard>
                <View>
                  <Pressable
                    onPress={() => setDropdownOpen(!dropdownOpen)}
                    className="flex-row justify-between items-center"
                  >
                    <Text className="font-bold">{gender || "Select Gender"}</Text>
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
                          <Text className="text-center font-bold">{item}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </SlipCard>
            </View>

            {/* ADDRESS */}
            <View>
              <Text className="font-semibold mb-1">ADDRESS</Text>
              <SlipCard>
                <TextInput placeholder="Random Place - Bogo City, Cebu" />
              </SlipCard>
            </View>

            {/* DATE OF BIRTH */}
            <View>
              <Text className="font-semibold mb-1">DATE OF BIRTH</Text>
              <SlipCard>
                <TextInput placeholder="01/27/2000" />
              </SlipCard>
              <Text className="text-gray-700 text-[11px] mt-1">
                You must be at least 18 years old to drive
              </Text>
            </View>

            {/* MOBILE NUMBER */}
            <View>
              <Text className="font-semibold mb-1">Mobile Number</Text>
              <View className="flex-row gap-3">
                {/* COUNTRY CODE */}
                <View className="w-24">
                  <SlipCard>
                    <TextInput
                      value="+63"
                      editable={false}
                      className="text-center font-bold"
                    />
                  </SlipCard>
                </View>

                {/* PHONE NUMBER */}
                <View className="flex-1">
                  <SlipCard>
                    <TextInput
                      placeholder="123 456 7834"
                      keyboardType="number-pad"
                      maxLength={12}
                      className="font-semibold"
                    />
                  </SlipCard>
                </View>
              </View>
            </View>

            {/* EMAIL */}
            <View>
              <Text className="font-semibold mb-1">EMAIL ADDRESS</Text>
              <SlipCard>
                <TextInput placeholder="juan06@gmail.com" />
              </SlipCard>
            </View>

            {/* REGISTER BUTTON */}
            <Pressable
              onPress={() => router.push("/confirm_registration")}
              className="bg-[#00FF38] border-2 border-black p-4 mt-4 rounded-sm shadow-md"
            >
              <Text className="text-center font-bold text-lg">REGISTER</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}