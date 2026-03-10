import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function RideCompleteScreen() {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const feedbackTags = ["Safe Driver", "Clean Bike", "Great Chat", "Fast Route"];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-[#e5dacb]"
      contentContainerClassName="px-5 pb-12 pt-6"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Pressable className="h-12 w-12 items-center justify-center border-2 border-black bg-white rounded-md">
          <Ionicons name="close" size={20} />
        </Pressable>

        <Text className="text-xl font-extrabold uppercase tracking-wider">
          Ride Complete
        </Text>

        <View className="w-12" />
      </View>

      {/* Driver Card */}
      <View className="border-[3px] border-black bg-white p-5 shadow-[6px_6px_0_0_#000] rounded-md mb-6">
        <View className="items-center relative">

          <View className="absolute -top-5 bg-black px-4 py-1 rounded-md">
            <Text className="text-[10px] font-bold text-white uppercase">
              Your Driver
            </Text>
          </View>

          {/* Avatar */}
          <View className="h-24 w-24 items-center justify-center border-[3px] border-black bg-[#f1d4b5] mt-6 rounded-full">
            <Ionicons name="person" size={50} />
          </View>

          <Text className="text-xl font-extrabold mt-3 uppercase">
            Marcus Ray
          </Text>

          <Text className="text-sm text-gray-600 mt-1">
            🏍 Yamaha NMAX • ABC-1234
          </Text>

          {/* Divider */}
          <View className="h-[2px] bg-black w-full my-5" />

          {/* Ride info */}
          <View className="flex-row justify-around w-full px-2">
            <View className="items-center">
              <Text className="text-xs text-gray-500 uppercase">Time</Text>
              <Text className="font-bold text-lg">24m</Text>
            </View>

            <View className="w-[2px] bg-black" />

            <View className="items-center">
              <Text className="text-xs text-gray-500 uppercase">Cost</Text>
              <Text className="font-bold text-lg">$12.50</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Rating */}
      <Text className="mt-2 mb-3 font-extrabold uppercase text-base">
        How was your ride?
      </Text>

      <View className="border-[3px] border-black bg-white p-5 items-center shadow-[5px_5px_0_0_#000] rounded-md mb-6">
        <View className="flex-row gap-3 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Pressable key={i} onPress={() => setRating(i)}>
              <Ionicons
                name={i <= rating ? "star" : "star-outline"}
                size={30}
                color="#facc15"
              />
            </Pressable>
          ))}
        </View>

        <Text className="font-bold text-gray-700 text-sm">
          {rating === 0
            ? "Good!"
            : rating <= 2
            ? "Needs Improvement"
            : rating <= 4
            ? "Good!"
            : "Excellent!"}
        </Text>
      </View>

      {/* Feedback tags */}
      <Text className="font-extrabold uppercase text-sm mb-2">
        Select Feedback
      </Text>

      <View className="flex-row flex-wrap gap-3 mb-6">
        {feedbackTags.map((item) => (
          <Pressable
            key={item}
            onPress={() => toggleTag(item)}
            className={`px-5 py-3 border-[3px] shadow-[3px_3px_0_0_#000] rounded-md ${
              selectedTags.includes(item)
                ? "bg-green-600 border-green-700"
                : "bg-white border-black"
            }`}
          >
            <Text
              className={`text-sm font-bold uppercase ${
                selectedTags.includes(item) ? "text-white" : "text-black"
              }`}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Notes */}
      <Text className="mt-2 mb-2 font-extrabold uppercase text-sm">
        Add a note (optional)
      </Text>

      <View className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0_0_#000] rounded-md mb-6">
        <TextInput
          placeholder="Tell us more about your experience..."
          multiline
          className="text-sm"
          style={{ minHeight: 80 }}
        />
      </View>

      {/* Tip */}
      <View className="flex-row items-center justify-between border-[3px] border-black bg-white p-4 rounded-md shadow-[4px_4px_0_0_#000] mb-6">
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 bg-green-500 items-center justify-center border-2 border-black rounded-md">
            <Text className="font-bold text-white">$</Text>
          </View>

          <Text className="text-sm font-bold">Add a tip for Marcus?</Text>
        </View>

        <View className="flex-row gap-3">
          {["$1", "$3", "$5"].map((tip) => (
            <Pressable
              key={tip}
              className="bg-black px-4 py-2 rounded-md shadow-[2px_2px_0_0_#000]"
            >
              <Text className="text-white text-sm font-bold">{tip}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Submit */}
      <Pressable className="bg-blue-500 border-[3px] border-black py-4 rounded-md items-center shadow-[6px_6px_0_0_#000] mb-6">
        <Text className="text-white font-extrabold uppercase tracking-widest text-base">
          Submit Feedback →
        </Text>
      </Pressable>

      <Pressable className="items-center mb-10">
        <Text className="text-sm text-gray-600 font-bold uppercase">
          Skip Feedback
        </Text>
      </Pressable>
    </ScrollView>
  );
}