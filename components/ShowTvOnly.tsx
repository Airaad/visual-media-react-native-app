import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { fetchTvShows } from "@/services/tvapi";
import ContentOnlyCard from "./ContentOnlyCard";

const ShowTvOnly = () => {
  const {
    data: tv,
    loading,
    error,
  } = useFetch(() => fetchTvShows({ query: "" }));
  return (
    <FlatList
      data={tv}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ContentOnlyCard title={item.name} poster={item.poster_path} />
      )}
      columnWrapperStyle={{
        //Styles the rows when numColumns is used.
        justifyContent: "flex-start",
        gap: 20,
        marginBottom: 20,
      }}
      className="mr-1 px-3"
    />
  );
};

export default ShowTvOnly;
