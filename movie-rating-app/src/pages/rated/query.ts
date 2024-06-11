export const fetchRatedMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
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

  export const fetchRatedTvShows = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
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