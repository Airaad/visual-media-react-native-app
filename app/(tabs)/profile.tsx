import { View, Text, Alert, TextInput, Button, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
import { supabase } from "@/utils/supabase";

const Profile = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/authscreen" />;
  }
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");
      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function updateProfile({ username }: { username: string }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");
      const updates = {
        id: session?.user.id,
        username,
        updated_at: new Date(),
      };
      const { error } = await supabase.from("profiles").upsert(updates);
      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 gap-5 bg-black justify-center items-center">
      <Text className="text-2xl font-bold text-green-500">
        Update Your Profile
      </Text>
      <TextInput
        editable={false}
        value={session?.user.email}
        placeholder="email"
        autoCapitalize="none"
        className="rounded-lg w-[350px] h-[50px] px-5 text-gray-500 bg-gray-200 border-1"
      />

      <TextInput
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="username"
        autoCapitalize="none"
        className="rounded-lg w-[350px] h-[50px] px-5 text-black bg-gray-200 border-1"
      />

      <Pressable
        onPress={() => updateProfile({ username })}
        disabled={loading}
        className="bg-green-500 w-[200px] h-[50px] rounded-full items-center justify-center"
      >
        <Text className="text-white text-xl font-semibold">
          {loading ? "Saving" : "Save"}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => supabase.auth.signOut()}
        disabled={loading}
        className="bg-red-500 w-[200px] h-[50px] rounded-full items-center justify-center"
      >
        <Text className="text-white text-xl font-semibold">Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
