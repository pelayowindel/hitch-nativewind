import React, { useState } from "react";
import {
  Pressable,
  View,
  Text,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

type SlipButtonProps = {
  text: string;
  color: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  containerClassName?: string;
  widthClassName?: string;
  buttonClassName?: string;
  textClassName?: string;
  shadowClassName?: string;
  shadowStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function SlipButton({
  text,
  color,
  icon,
  onPress,
  disabled = false,
  containerClassName = "items-center mb-4",
  widthClassName = "w-full",
  buttonClassName = "py-4 rounded-md border-2 border-black flex-row justify-center items-center",
  textClassName = "text-black text-lg",
  shadowClassName = "absolute bg-black rounded-md",
  shadowStyle,
  textStyle,
}: SlipButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={containerClassName}
    >
      <View className={`relative ${widthClassName}`}>
        {!pressed && !disabled && (
          <View
            className={shadowClassName}
            style={[{ width: "100%", height: "100%", top: 4, left: 4 }, shadowStyle]}
          />
        )}

        <View
          className={buttonClassName}
          style={{
            backgroundColor: color,
            transform: pressed ? [{ translateX: 2 }, { translateY: 2 }] : [],
            opacity: disabled ? 0.7 : 1,
          }}
        >
          {icon ? <View className="mr-2">{icon}</View> : null}
          <Text className={textClassName} style={textStyle}>
            {text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
