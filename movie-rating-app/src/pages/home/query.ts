const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
  
    return res.json();
  };
  
  export const fetchTvShows = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch TV shows");
    }
  
    return res.json();
  };