const apiKey = import.meta.env.VITE_API_KEY;

export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch shows");
    }
  
    return res.json();
  };