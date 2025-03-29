import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CardProps {
  id: number;
  poster: string;
}

export function MovieContentCard({ poster, id }: CardProps) {
  return (
    <Link href={{
      pathname: '/movie-details/[id]',
      params: { id: id },
    }} asChild>
    <TouchableOpacity
      className="mr-4 w-40"
    >
      <View className="rounded-xl overflow-hidden shadow-lg">
        <Image
          source={{
            uri: poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-56"
          resizeMode="cover"
        />
      </View>
      <View className="pb-1" />
    </TouchableOpacity>
    </Link>
  );
}

export function TvContentCard({ poster, id }: CardProps) {
  return (
    <Link href={{
      pathname: '/tv-details/[id]',
      params: { id: id },
    }} asChild>
    <TouchableOpacity
      className="mr-4 w-40"
    >
      <View className="rounded-xl overflow-hidden shadow-lg">
        <Image
          source={{
            uri: poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-56"
          resizeMode="cover"
        />
      </View>
      <View className="pb-1" />
    </TouchableOpacity>
    </Link>
  );
}
