export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QwY2JjMWI1MmI3ZTBhNDg4YzlkMzEwYjU1MWM5ZiIsInN1YiI6IjY0MWRlMTFhYmVmYjA5MDA4OGJlN2Y2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDJEmVMVseTklbHTHx3iYlp2q1sWelB86AeeohqhDlA`
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
  
    return res.json();
  };