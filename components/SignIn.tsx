import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../utils/supabase";

export default function SignIn({ onSwitchAuth }: { onSwitchAuth: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  }

  return (
    <View className="flex-1 p-12 mt-40">
      <Text className="text-green-500 text-center text-3xl font-semibold mb-10">
        Sign In
      </Text>
      <View className="w-full items-center">
        <TextInput
          className="rounded-lg w-[300px] h-[50px] px-5 text-black bg-gray-200 border-1 mb-10"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="rounded-lg w-[300px] h-[50px] px-5 text-black bg-gray-200 border-1 mb-5"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-green-500 w-[200px] h-[50px] rounded-full items-center justify-center"
          onPress={handleSignIn}
          disabled={loading}
        >
          <Text className="text-white text-xl font-semibold">
            {loading ? "Signing in..." : "Sign In"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="mt-5 text-white text-center">
        Don't have an account?{" "}
        <Text className="font-semibold text-blue-500 text-lg" onPress={onSwitchAuth}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}
