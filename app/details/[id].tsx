import { View, Text } from "react-native";
import React from "react";
import { fetchDetails } from "@/services/searchapi";
import { useLocalSearchParams, useRouter } from "expo-router";
import useFetch from "@/hooks/useFetch";

const DetailsPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const{data, loading, error} = useFetch(() => fetchDetails(id.toString()));
  console.log(data);
  
  return (
    <View>
      <Text>DetailsPage: {id}</Text>
    </View>
  );
};

export default DetailsPage;
