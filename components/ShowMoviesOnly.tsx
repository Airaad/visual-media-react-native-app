import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { fetchMovies, fetchTopRatedMovies } from "@/services/movieapi";
import useFetch from "@/hooks/useFetch";
import ContentOnlyCard from "./ContentOnlyCard";

const ShowMoviesOnly = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" className="my-52" />
      ) : error ? (
        <Text className="text-red-500 text-lg mt-10">{error?.message}</Text>
      ) : (
        <FlatList
          data={movies}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ContentOnlyCard
              title={item.title}
              poster={item.poster_path}
              id={item.id}
            />
          )}
          columnWrapperStyle={{
            //Styles the rows when numColumns is used.
            justifyContent: "flex-start",
            gap: 20,
            marginBottom: 20,
          }}
          className="mr-1 px-3"
        />
      )}
    </>
  );
};

export default ShowMoviesOnly;
