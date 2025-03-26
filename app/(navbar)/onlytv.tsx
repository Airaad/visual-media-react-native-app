import Navbar from "@/components/Navbar";
import ShowTvOnly from "@/components/ShowTvOnly";
import { View } from "react-native";

export default function OnlyTv() {
  return (
    <View className="flex-1 bg-black">
      <Navbar />
      <ShowTvOnly />
    </View>
  );
}
