// //  Example authentication screen using Supabase
// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { supabase } from '../lib/supabase';

// export default function AuthScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
    
//     if (error) {
//       Alert.alert('Sign Up Error', error.message);
//     } else {
//       Alert.alert('Success', 'Check your email for confirmation!');
//     }
//     setLoading(false);
//   };

//   const handleSignIn = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
    
//     if (error) {
//       Alert.alert('Sign In Error', error.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <View className="flex-1 justify-center p-6 bg-white">
//       <Text className="text-3xl font-bold mb-8 text-center">Welcome</Text>
      
//       <TextInput
//         className="border border-gray-300 rounded-lg p-4 mb-4"
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
      
//       <TextInput
//         className="border border-gray-300 rounded-lg p-4 mb-6"
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
      
//       <TouchableOpacity
//         className="bg-blue-500 rounded-lg p-4 mb-3"
//         onPress={handleSignIn}
//         disabled={loading}
//       >
//         <Text className="text-white text-center font-semibold">
//           {loading ? 'Loading...' : 'Sign In'}
//         </Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity
//         className="bg-gray-200 rounded-lg p-4"
//         onPress={handleSignUp}
//         disabled={loading}
//       >
//         <Text className="text-gray-800 text-center font-semibold">
//           Sign Up
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
