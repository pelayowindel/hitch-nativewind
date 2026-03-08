import React from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";

type SlipCardProps = {
  children: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  contentStyle?: StyleProp<ViewStyle>;
  shadowClassName?: string;
  shadowStyle?: StyleProp<ViewStyle>;
  shadowTop?: number;
  shadowLeft?: number;
};

export default function SlipCard({
  children,
  containerClassName = "",
  contentClassName = "",
  contentStyle,
  shadowClassName = "absolute bg-black rounded-md",
  shadowStyle,
  shadowTop = 4,
  shadowLeft = 4,
}: SlipCardProps) {
  return (
    <View className={`relative ${containerClassName}`}>
      <View
        className={shadowClassName}
        style={[
          { width: "100%", height: "100%", top: shadowTop, left: shadowLeft },
          shadowStyle,
        ]}
      />
      <View
        className={`bg-white border-2 border-black rounded-md ${contentClassName}`}
        style={contentStyle}
      >
        {children}
      </View>
    </View>
  );
}
