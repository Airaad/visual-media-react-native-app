import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { fetchMovieDetails } from "@/services/searchapi";
import { useLocalSearchParams, useRouter } from "expo-router";
import useFetch from "@/hooks/useFetch";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data: movie, loading, error } = useFetch(() =>
    fetchMovieDetails(id.toString())
  );

  return (
    <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 pt-10 bg-black">
      <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}} className="w-full h-[500px] mt-2"/>
      <View className="flex-row mt-6 gap-2 p-3 items-center">
      <FontAwesome size={23} name="film" color='#ffffff'/>
      <Text className="text-white font-semibold text-2xl">{movie?.title}</Text>
      </View>
    

      <View className="flex-row gap-2 px-3">
        {movie?.genres.map((item : any) => (<View key={item.id} className="flex-row gap-2"><Text className="text-gray-400">{item.name}</Text><Text className="text-white">|</Text></View>))}
      </View>
      
      
      <View className="flex-row items-center">
      <Text className="text-white text-lg font-semibold p-3">⭐ {Math.round(movie?.vote_average/2)}/5</Text>
      <Text className="text-white text-lg font-semiblod p-3">⏳ Runtime {movie?.runtime}</Text>
      <Text className="text-white text-lg font-semiblod p-3">{(movie?.release_date)}</Text>
      </View>
      <Text className="text-white text-lg font-thick px-3 pb-16">{movie?.overview}</Text>

    </ScrollView>
  );
};

export default DetailsPage;
