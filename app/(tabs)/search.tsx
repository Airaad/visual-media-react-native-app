import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { fetchSearch } from "@/services/searchapi";
import ContentOnlyCard from "@/components/ContentOnlyCard";
import Navbar from "@/components/Navbar";

const Search = () => {
  const [searchQuery, setSearcQuery] = useState<string>("");
  const { data, loading, error, refetch, reset } = useFetch(
    () => fetchSearch({ query: searchQuery }),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-black">
      <Navbar />
      <FlatList
        data={data}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <ContentOnlyCard
            title={item.title || item.name}
            poster={item.poster_path}
          />
        )}
        columnWrapperStyle={{
          //Styles the rows when numColumns is used.
          justifyContent: "flex-start",
          gap: 20,
          marginBottom: 30,
        }}
        className="mr-1 px-3"
        ListHeaderComponent={
          <>
            <View>
              <TextInput
                placeholder="Search for a movie or tv"
                value={searchQuery}
                onChangeText={setSearcQuery}
                className="bg-white h-16 w-[360px] mx-auto mb-4 rounded-full px-5"
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && data?.length! > 0 && (
              <Text className="text-xl text-white font-bold px-3 mb-10">
                Search Results for{" "}
                <Text className="text-accent">{`"${searchQuery}"`}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          //This component will be shown when the list is empty
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim()
                  ? "Not found what you are looking for"
                  : "Start typing to search for content"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
