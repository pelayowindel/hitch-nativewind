import { View, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

type UploadingBarProps = {
  visible: boolean;
  label?: string;
};

export default function UploadingBar({
  visible,
  label = "UPLOADING...",
}: UploadingBarProps) {
  const barAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0.4)).current;
  const bikeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Progress bar loop
      Animated.loop(
        Animated.sequence([
          Animated.timing(barAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: false,
          }),
          Animated.timing(barAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
        ])
      ).start();

      // Pulse text opacity loop
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0.4,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Bike rides along the bar
      Animated.loop(
        Animated.sequence([
          Animated.timing(bikeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: false,
          }),
          Animated.timing(bikeAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
        ])
      ).start();
    } else {
      barAnim.setValue(0);
      pulseAnim.setValue(0.4);
      bikeAnim.setValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  const barWidth = barAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  // Bike position follows the bar (offset left so icon sits on top of the fill edge)
  const bikeLeft = bikeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "88%"],
  });

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
      <View
        style={{
          backgroundColor: "white",
          padding: 24,
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "black",
          width: 260,
          alignItems: "center",
        }}
      >
        {/* Motorcycle icon */}
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: "#f97316",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
            borderWidth: 2,
            borderColor: "black",
          }}
        >
          <MaterialCommunityIcons name="motorbike" size={30} color="black" />
        </View>

        {/* Pulsing label */}
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            opacity: pulseAnim,
            letterSpacing: 0.5,
            marginBottom: 12,
          }}
        >
          {label}
        </Animated.Text>

        {/* Bar track + riding bike */}
        <View style={{ width: "100%", marginBottom: 8 }}>
          {/* Bike riding on top of bar */}
          <Animated.View
            style={{
              position: "absolute",
              top: -18,
              left: bikeLeft,
              zIndex: 1,
            }}
          >
            <MaterialCommunityIcons name="motorbike" size={18} color="#f97316" />
          </Animated.View>

          {/* Bar track */}
          <View
            style={{
              width: "100%",
              height: 10,
              backgroundColor: "#e5e7eb",
              borderRadius: 99,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            {/* Animated fill */}
            <Animated.View
              style={{
                height: "100%",
                width: barWidth,
                backgroundColor: "#f97316",
                borderRadius: 99,
              }}
            />
          </View>
        </View>

        {/* Sub label */}
        <Text style={{ fontSize: 10, color: "#6b7280", marginTop: 4 }}>
          Please wait...
        </Text>
      </View>
    </View>
  );
}