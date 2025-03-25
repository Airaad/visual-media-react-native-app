import { View, Text, FlatList } from "react-native";
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
    <FlatList
      data={movies}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ContentOnlyCard title={item.title} poster={item.poster_path} />
      )}
      columnWrapperStyle={{
        //Styles the rows when numColumns is used.
        justifyContent: "flex-start",
        gap: 20,
        marginBottom: 20,
      }}
      className="mt-2 mr-1 px-6 py-10"
    />
  );
};

export default ShowMoviesOnly;
