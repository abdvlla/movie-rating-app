import { useState } from "react";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import { ColumnDisplay } from "../home/column-display";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

export const Rated = () => {
  const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

  const {
    data: ratedMovies = { results: [] },
    isLoading: isLoadingRatedMovies,
  } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  const {
    data: ratedTvShows = { results: [] },
    isLoading: isLoadingRatedTvShows,
  } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShows,
  });

  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }

  if (isLoadingRatedMovies || isLoadingRatedTvShows) {
    return <div>Loading...</div>;
  }

  if (!ratedMovies.results.length && !ratedTvShows.results.length) {
    return <div>No rated items found.</div>;
  }

  return (
    <div>
      <div className="flex justify-center space-x-2 text-lg font-bold mt-5">
        <button
          className={
            activeTabs === DisplayType.Movies
              ? "border-1 bg-yellow-600 w-24 h-10 rounded-full"
              : "border-1 w-24 h-10 rounded-full"
          }
          onClick={() => setActiveTabs(DisplayType.Movies)}
        >
          Movies
        </button>

        <button
          className={
            activeTabs === DisplayType.TvShows
              ? "border-1 bg-yellow-600 w-24 h-10 rounded-full"
              : "border-1 w-24 h-10 rounded-full"
          }
          onClick={() => setActiveTabs(DisplayType.TvShows)}
        >
          TV Shows
        </button>
      </div>
      {activeTabs === DisplayType.Movies ? (
        <div>
          <h2 className="text-2xl m-5">Movies you rated</h2>
          <ColumnDisplay
            data={ratedMovies.results}
            displayType={DisplayType.Movies}
            isRated
          />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl m-5">TV shows you rated</h2>
          <ColumnDisplay
            data={ratedTvShows.results}
            displayType={DisplayType.TvShows}
            isRated
          />
        </div>
      )}
    </div>
  );
};
