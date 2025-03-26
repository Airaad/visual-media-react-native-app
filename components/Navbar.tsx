import { View, Text } from "react-native";
import React from "react";
import { Link, usePathname } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <View className="w-full pt-10">
      <View className="flex-row justify-between items-center p-6">
        <Text className="text-[#1CEE87] font-semibold text-3xl">FlexHive</Text>
        <FontAwesome size={33} name="user-circle" color="#1CEE87" />
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
