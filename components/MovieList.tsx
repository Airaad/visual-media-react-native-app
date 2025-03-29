import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import {MovieContentCard} from "./ContentCard";
import useFetch from "@/hooks/useFetch";

interface MovieListProps {
  title: string;
  fetchFunc: () => Promise<Movie[]>; // Function returning a Promise of movies
  paddingBottom?: string;
}
const MovieList = ({ title, fetchFunc, paddingBottom }: MovieListProps) => {
  const { data: movies, loading, error } = useFetch(() => fetchFunc());
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
              contentContainerStyle={{}} //The contentContainerStyle prop in FlatList is used to style the inner content of the list, not the list container itself. It is useful when you want to control the layout inside the FlatList rather than the FlatList component itself.
              data={movies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <MovieContentCard poster={item.poster_path} id={item.id} />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default MovieList;
