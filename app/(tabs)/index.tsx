import { StyleSheet, Text, View } from 'react-native';


export default function TabOneScreen() {
  return (
      <View className="flex-1 items-center justify-center text-red-600 bg-slate-200">
        <Text className="text-2xl font-bold text-blue-600">
          Hello NativeWind!
        </Text>
        <Text className="text-2xl font-bold text-blue-600">
          Hello NativeWind! hahaha error ni run bweset
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
