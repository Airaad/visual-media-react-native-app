import HeaderSlide from "@/components/HeaderSlide";
import MovieList from "@/components/MovieList";
import TvList from "@/components/TvList";
import { fetchMovies, fetchTopRatedMovies } from "@/services/movieapi";
import { fetchTopRatedTv, fetchTvShows } from "@/services/tvapi";
import { ImageBackground, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-black">
      <HeaderSlide />
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
