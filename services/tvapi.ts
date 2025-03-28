const TMDB_CONFIG = {
    Base_url: "https://api.themoviedb.org/3",
    Api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
  };
  
  export const fetchTvShows = async ({
    query,
  }: {
    query: string;
  }): Promise<Tv[]> => {
    const endpoint = query
      ? `${TMDB_CONFIG.Base_url}/search/tv?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.Base_url}/discover/tv?sort_by=popularity.desc&include_adult=true`;
  
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch tv shows: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.results;
  };
  
  export const fetchTopRatedTv = async (): Promise<Tv[]> => {
    const endpoint = `${TMDB_CONFIG.Base_url}/discover/tv?sort_by=vote_count.desc&include_adult=true`;
  
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch tv shows: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.results;
  };
  