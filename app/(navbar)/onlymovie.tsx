import ShowMoviesOnly from "@/components/ShowMoviesOnly";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnlyMovie() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ShowMoviesOnly />
    </SafeAreaView>
  );
}
