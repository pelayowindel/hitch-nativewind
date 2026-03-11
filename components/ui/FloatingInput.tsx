import React, { useRef } from "react";
import {
  Animated,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from "react-native";

type FloatingInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  inputStyle?: StyleProp<TextStyle>;
  shadowClassName?: string;
  shadowStyle?: StyleProp<ViewStyle>;
  inputProps?: Omit<TextInputProps, "value" | "onChangeText" | "secureTextEntry" | "onFocus" | "onBlur">;
};

export default function FloatingInput({
  value,
  onChangeText,
  secure = false,
  containerClassName = "relative mb-6",
  wrapperClassName = "bg-white rounded-2xl border-2 border-black px-4 py-3",
  inputClassName = "text-black",
  inputStyle,
  shadowClassName = "absolute bg-black rounded-2xl",
  shadowStyle,
  inputProps,
}: FloatingInputProps) {
  const lift = useRef(new Animated.Value(0)).current;

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
    <View className={containerClassName}>
      <View
        className={shadowClassName}
        style={[{ width: "100%", height: "100%", top: 3, left: 3 }, shadowStyle]}
      />

      <Animated.View style={{ transform: [{ translateY: lift }] }}>
        <View className={wrapperClassName}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secure}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputClassName}
            style={inputStyle}
            {...inputProps}
          />
        </View>
      </Animated.View>
    </View>
  );
}
