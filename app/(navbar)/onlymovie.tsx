import Navbar from "@/components/Navbar";
import ShowMoviesOnly from "@/components/ShowMoviesOnly";
import { View } from "react-native";

export default function OnlyMovie() {
  return (
    <View className="flex-1 bg-black">
      <Navbar />
      <ShowMoviesOnly />
    </View>
  );
}
