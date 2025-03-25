import { View, Text, Image, TouchableOpacity } from "react-native";
interface MovieProps {
  title: string;
  poster: string;
}

export default function ContentCard({ title, poster }: MovieProps) {
  return (
    <TouchableOpacity className="mr-4 w-40">
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
      <Text className="text-white text-center mt-2 text-md font-semibold pb-5">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
