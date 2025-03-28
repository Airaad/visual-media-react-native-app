import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface MovieProps {
  id: number;
  title: string;
  poster: string;
}

export default function ContentOnlyCard({ title, poster, id }: MovieProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="w-[30%]"
      onPress={() => router.push(`/details/${id}`)}
    >
      <View className="rounded-xl overflow-hidden shadow-lg">
        <Image
          source={{
            uri: poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-52"
          resizeMode="cover"
        />
      </View>
      <Text
        className="text-white font-semibold text-sm mt-2 pb-4 tracking-wide"
        numberOfLines={1}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
