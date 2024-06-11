export const mutationLogin = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QwY2JjMWI1MmI3ZTBhNDg4YzlkMzEwYjU1MWM5ZiIsInN1YiI6IjY0MWRlMTFhYmVmYjA5MDA4OGJlN2Y2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDJEmVMVseTklbHTHx3iYlp2q1sWelB86AeeohqhDlA'
        }
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch guest session ID");
    }
  
    return res.json();
  }
  