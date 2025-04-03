import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

const Profile = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/authscreen" />;
  }
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
