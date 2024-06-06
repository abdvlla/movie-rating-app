export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzA0NzQ0MmE2Y2JmN2VlY2Q1YTE3MTIxYTFjMWViZSIsInN1YiI6IjY0MWRlMTFhYmVmYjA5MDA4OGJlN2Y2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGSURAve9aQqMsg3cCJBv-FgkLQqZJiDm5bgv_mjBOc'
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
  
    return res.json();
  };