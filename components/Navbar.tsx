import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Link, usePathname, useRouter, Redirect } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAuth } from "@/context/AuthProvider";
import { supabase } from "@/utils/supabase";

const Navbar = () => {
  const[loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const handleSignOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert("Error", error.message);
      }
      router.replace("/")
    } catch (error) {
      Alert.alert("Error", "Failed to sign out");
    }finally{
      setLoading(false);
    }
  };
  return (
    <View className="w-full pt-10">
      <View className="flex-row justify-between items-center p-6">
        <Text className="text-[#1CEE87] font-semibold text-3xl">FlexHive</Text>
        {isAuthenticated ? (
          // <FontAwesome size={33} name="user-circle" color="#1CEE87" />
          <TouchableOpacity
            className="bg-green-500 p-3 rounded-2xl"
            onPress={handleSignOut}
            disabled={loading}
          >
            <Text className="text-white text-md font-semibold">{loading ? "Signing Out" : "Sign Out"}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-green-500 p-3 rounded-2xl"
            onPress={() => router.push("/authscreen")}
          >
            <Text className="text-white text-md font-semibold">Sign in</Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-row gap-2 px-6 mb-10">
        <Link href="/">
          <View
            className={`px-4 py-2 rounded-full ${
              pathname === "/" ? "bg-white" : ""
            }`}
          >
            <Text
              className={`${
                pathname === "/" ? "text-black" : "text-white"
              } text-lg font-semibold`}
            >
              All
            </Text>
          </View>
        </Link>
        <Link href="/onlymovie">
          <View
            className={`px-4 py-2 rounded-full ${
              pathname === "/onlymovie" ? "bg-white" : ""
            }`}
          >
            <Text
              className={`${
                pathname === "/onlymovie" ? "text-black" : "text-white"
              } text-lg font-semibold`}
            >
              Movies
            </Text>
          </View>
        </Link>
        <Link href="/onlytv">
          <View
            className={`px-4 py-2 rounded-full ${
              pathname === "/onlytv" ? "bg-white" : ""
            }`}
          >
            <Text
              className={`${
                pathname === "/onlytv" ? "text-black" : "text-white"
              } text-lg font-semibold`}
            >
              TV
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default Navbar;
