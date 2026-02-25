import { View, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

/* =======================
   PROPS TYPE
======================= */
type FloatingLoadingProps = {
  visible: boolean;
  label?: string;
};

export default function FloatingLoading({
  visible,
  label = "SUBMITTING...",
}: FloatingLoadingProps) {
  const floatAnim = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    if (visible) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: -10,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      floatAnim.setValue(0);
    }
  }, [visible, floatAnim]);

  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <Animated.View
        style={{
          transform: [{ translateY: floatAnim }],
          backgroundColor: "white",
          padding: 24,
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "black",
        }}
      >
        <MaterialCommunityIcons
          name="motorbike"
          size={48}
          color="black"
        />
        <Text className="mt-2 font-bold text-center">
          {label}
        </Text>
      </Animated.View>
    </View>
  );
}