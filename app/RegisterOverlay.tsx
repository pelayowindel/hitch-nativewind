import React from "react";
import { View, Text, TouchableWithoutFeedback, Modal } from "react-native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SlipButton from "../components/ui/SlipButton";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function RegisterOverlay({ visible, onClose }: Props) {
  const router = useRouter();

  return (
    <Modal transparent animationType="fade" visible={visible}>
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

            <Text className="text-black text-lg font-bold">REGISTER AS</Text>
          </View>

          {/* Body */}
          <View className="p-8 items-center">
            <SlipButton
              text="COMMUTER"
              color="#19D226"
              icon={<FontAwesome6 name="user" size={18} color="black" />}
              widthClassName="w-[260px]"
              buttonClassName="py-4 rounded-sm border-2 border-black flex-row justify-center items-center"
              shadowClassName="absolute bg-black rounded-sm"
              shadowStyle={{ opacity: 0.1 }}
              textClassName="font-bold text-black"
              onPress={() => {
                onClose();
                router.push("/confirm_registration");
              }}
            />

            <Text className="my-6 font-medium text-black">OR</Text>

            <SlipButton
              text="REGISTER AS DRIVER"
              color="#FF8C00"
              icon={<FontAwesome6 name="motorcycle" size={18} color="black" />}
              widthClassName="w-[260px]"
              buttonClassName="py-4 rounded-sm border-2 border-black flex-row justify-center items-center"
              shadowClassName="absolute bg-black rounded-sm"
              shadowStyle={{ opacity: 0.1 }}
              textClassName="font-bold text-black"
              onPress={() => {
                onClose();
                router.push("./Driver/registration");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
