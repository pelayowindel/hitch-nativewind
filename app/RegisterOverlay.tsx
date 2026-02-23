import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Modal,
} from "react-native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function RegisterOverlay({ visible, onClose }: Props) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
    >
      {/* Dark Background */}
      <View className="flex-1 bg-black/40 justify-center items-center">

        {/* Modal Card */}
        <View className="w-[90%] bg-[#D9D9D9] rounded-xl border-2 border-black overflow-hidden">

          {/* Header */}
          <View className="flex-row items-center justify-center p-4 border-b-2 border-black relative">

            {/* Close Button */}
            <TouchableWithoutFeedback onPress={onClose}>
              <View className="absolute left-4 bg-red-500 w-8 h-8 justify-center items-center border-2 border-black">
                <AntDesign name="close" size={16} color="black" />
              </View>
            </TouchableWithoutFeedback>

            <Text className="text-black text-lg font-bold">
              REGISTER AS
            </Text>
          </View>

          {/* Body */}
          <View className="p-8 items-center">

            <SlipButton
              text="COMMUTER"
              color="#19D226"
              icon={<FontAwesome6 name="user" size={18} color="black" />}
            />

            <Text className="my-6 font-medium text-black">OR</Text>

            <SlipButton
              text="REGISTER AS DRIVER"
              color="#FF8C00"
              icon={<FontAwesome6 name="motorcycle" size={18} color="black" />}
              onPress={() => {
                onClose();
                router.push("./Driver/driverregistration");
              }}
            />

          </View>
        </View>
      </View>
    </Modal>
  );
}

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

        <View className="relative w-[260px]">

          {/* Slip Shadow */}
          {!pressed && (
            <View
              className="absolute bg-black rounded-sm"
              style={{
                width: "100%",
                height: "100%",
                top: 4,
                left: 4,
                opacity: 10,
              }}
            />
          )}

          <View
            className="py-4 rounded-sm border-2 border-black flex-row justify-center items-center"
            style={{
              backgroundColor: color,
              transform: pressed
                ? [{ translateX: 2 }, { translateY: 2 }]
                : [],
            }}
          >
            {icon && <View className="mr-2">{icon}</View>}
            <Text className="font-bold text-black">{text}</Text>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
  
}
