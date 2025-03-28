import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CardProps {
  id: number;
  poster: string;
}

export default function ContentCard({ poster, id }: CardProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="mr-4 w-40"
      onPress={() => router.push(`/details/${id}`)}
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
  );
}
