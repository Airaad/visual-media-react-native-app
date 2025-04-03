import HeaderSlide from "@/components/HeaderSlide";
import MovieList from "@/components/MovieList";
import TvList from "@/components/TvList";
import { fetchMovies, fetchTopRatedMovies } from "@/services/movieapi";
import { fetchTopRatedTv, fetchTvShows } from "@/services/tvapi";
import { ScrollView } from "react-native";
import { View, Text, Alert, Button } from "react-native";
import { supabase } from "@/utils/supabase";

export default function Index() {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        Alert.alert('Error', error.message)
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out')
    }
  }
  return (
    <ScrollView className="flex-1 bg-black">
      <HeaderSlide />
      <Button title="Sign Out" onPress={handleSignOut} />
      <MovieList
        title={`Popular Movies`}
        fetchFunc={() => fetchMovies({ query: "" })}
      />
      <TvList
        title={`Popular on TV`}
        fetchFunc={() => fetchTvShows({ query: "" })}
      />
      <MovieList
        title={`Top Rated Movies`}
        fetchFunc={() => fetchTopRatedMovies()}
      />
      <TvList
        title={`Top Rated Tv Shows`}
        fetchFunc={() => fetchTopRatedTv()}
        paddingBottom="pb-20"
      />
    </ScrollView>
  );
}
