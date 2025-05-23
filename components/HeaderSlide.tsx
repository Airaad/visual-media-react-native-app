import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/movieapi";
import Navbar from "./Navbar";

const HeaderSlide = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <>
      <Navbar />
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : error ? (
        <Text className="text-red-500 text-lg mt-10">Error:{error?.message}</Text>
      ) : (
        <View className="w-full h-[500px] overflow-hidden px-6 rounded-xl">
          <ImageBackground
            source={{
              uri: movies
                ? `https://image.tmdb.org/t/p/w500${movies[0]?.poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            resizeMode="cover"
            className="w-full h-full overflow-hidden rounded-xl"
          >
            <LinearGradient
              colors={["rgba(0, 0, 0, 0)", "transparent"]}
              className="absolute w-full h-[250px]"
            />
          </ImageBackground>
        </View>
      )}
    </>
  );
};

export default HeaderSlide;
