import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import {TvContentCard} from "./ContentCard";
import useFetch from "@/hooks/useFetch";

interface TvListProps {
  title: string;
  fetchFunc: () => Promise<Tv[]>; // Function returning a Promise of tv shows
  paddingBottom?: string;
}
const TvList = ({ title, fetchFunc, paddingBottom }: TvListProps) => {
  const { data: tvShow, loading, error } = useFetch(() => fetchFunc());
  return (
    <View className="mt-10 px-6">
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" className="my-24" />
      ) : error ? (
        <Text className="text-red-500 text-lg mt-10">
          Error: {error?.message}
        </Text>
      ) : (
        <>
          <Text className="text-white mb-5 font-bold text-xl">{title}</Text>
          <View className={`flex-1 ${paddingBottom}`}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={tvShow}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TvContentCard poster={item.poster_path} id={item.id} />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default TvList;
