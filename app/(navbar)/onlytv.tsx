import ShowTvOnly from "@/components/ShowTvOnly";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnlyTv() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ShowTvOnly />
    </SafeAreaView>
  );
}
