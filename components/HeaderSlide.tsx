import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/movieapi";
import { Link } from "expo-router";

const HeaderSlide = () => {
    const { data: movies, loading, error } = useFetch(() => fetchMovies({query:""}));
  return (
    <>
    <View className="w-full pt-10">
        <View className="flex-row justify-between items-center p-6">
          <Text className="text-white font-bold text-3xl">FlexHive</Text>
          <FontAwesome size={33} name="user-circle" color='#ffffff' />
        </View>

        <View className="flex-row gap-12 px-6 my-2 mb-10">
          <Link href='/onlymovie'><Text className="text-white text-lg font-semibold">Movies</Text></Link>
          <Link href='/onlytv'><Text className="text-white text-lg font-semibold">TV</Text></Link>
        </View>
      </View>


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

      
    </>
  );
};

export default HeaderSlide;
