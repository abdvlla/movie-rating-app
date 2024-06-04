import { useState } from "react";

enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  return (
    <div>
      <div className="flex justify-center space-x-2 text-lg font-bold mt-5">
        <button
          className={
            displayType === DisplayType.Movies
              ? "border-1 bg-yellow-600 w-24 h-10 rounded-full"
              : "border-1 w-24 h-10"
          }
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </button>

        <button
          className={
            displayType === DisplayType.TvShows
              ? "border-1 bg-yellow-600 w-24 h-10 rounded-full"
              : "border-1 w-24 h-10"
          }
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TV Shows
        </button>
      </div>
    </div>
  );
};

export default Home;
