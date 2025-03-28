const TMDB_CONFIG = {
  Base_url: "https://api.themoviedb.org/3",
  Api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchSearch = async ({
  query,
}: {
  query: string;
}): Promise<any> => {
  const endpoint = `${
    TMDB_CONFIG.Base_url
  }/search/multi?query=${encodeURIComponent(query)}`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

export const fetchDetails = async (contentId: string): Promise<any> => {
  const endpoint = `${TMDB_CONFIG.Base_url}/movie/${contentId}?api_key=${TMDB_CONFIG.Api_key}`;
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch the details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching content details:", error);
    throw error;
  }
};
