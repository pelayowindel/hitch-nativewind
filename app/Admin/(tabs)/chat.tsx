import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

/* =============================
   SLIP CHAT BUBBLE
============================= */
function SlipBubble({
  children,
  color = "white",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <View className="relative">
      <View
        className="absolute bg-black rounded-xl"
        style={{ width: "100%", height: "100%", top: 3, left: 3 }}
      />
      <View
        style={{ backgroundColor: color }}
        className="border-[2px] border-black rounded-xl px-4 py-3"
      >
        {children}
      </View>
    </View>
  );
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: "me" | "other" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), sender: "me" },
    ]);

    setInput("");
  };

  const handleQuickReply = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: message, sender: "me" },
    ]);
  };

  return (
    <View className="flex-1 bg-[#e6e0db]">
      {/* HEADER */}
      <View className="flex-row items-center px-4 py-3 bg-[#e6e0db]">
        <TouchableOpacity onPress={() => Alert.alert("Back", "Go back")}>
          <Ionicons name="arrow-back" size={26} />
        </TouchableOpacity>

        <View className="flex-row items-center ml-3 flex-1">
          <View className="w-9 h-9 bg-gray-300 rounded-full" />
          <View className="ml-3">
            <Text className="font-semibold text-lg">JUAN DELA CRUZ</Text>

            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
              <Text className="text-xs text-gray-600">Driver • 4.9</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="mx-2"
          onPress={() => Alert.alert("Report", "Report pressed")}
        >
          <MaterialIcons name="report" size={26} color="red" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Call", "Calling...")}>
          <Feather name="phone-call" size={26} color="#007aff" />
        </TouchableOpacity>
      </View>

      {/* CHAT BODY */}
      <ScrollView className="flex-1 px-4">
        {messages.map((msg) => (
          <View
            key={msg.id}
            className={`my-2 ${
              msg.sender === "me" ? "items-end" : "items-start"
            }`}
          >
            <View className="max-w-[75%]">
              <SlipBubble color={msg.sender === "me" ? "#7ec8ff" : "white"}>
                <Text className={msg.sender === "me" ? "text-black" : ""}>
                  {msg.text}
                </Text>
              </SlipBubble>
              <Text
                className={`text-[10px] text-gray-500 mt-1 ${
                  msg.sender === "me" ? "text-right" : "ml-1"
                }`}
              >
                {msg.sender === "me" ? "You" : "Juan"} • now
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* QUICK REPLY BUTTONS */}
      <View className="flex-row justify-evenly px-3 pb-2">
        <TouchableOpacity
          className="bg-white px-4 py-2 rounded-md shadow"
          onPress={() => handleQuickReply("Im here 👋")}
        >
          <Text className="text-sm">Im here 👋</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white px-4 py-2 rounded-md shadow"
          onPress={() => handleQuickReply("Where are you")}
        >
          <Text className="text-sm">Where are you</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white px-4 py-2 rounded-md shadow"
          onPress={() => handleQuickReply("On my way 🏃")}
        >
          <Text className="text-sm">On my way 🏃</Text>
        </TouchableOpacity>
      </View>

      {/* MESSAGE INPUT */}
      <View className="flex-row items-center px-3 pb-5">
        <TextInput
          className="flex-1 bg-white rounded-md px-3 py-2 shadow"
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          className="ml-3 bg-[#007aff] w-10 h-10 rounded-full items-center justify-center"
          onPress={handleSend}
        >
          <Feather name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}