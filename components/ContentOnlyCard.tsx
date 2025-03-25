import { View, Text, Image, TouchableOpacity } from "react-native";
interface MovieProps {
  title: string;
  poster: string;
}

export default function ContentOnlyCard({ title, poster }: MovieProps) {
  return (
    <TouchableOpacity className="w-[30%]">
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
