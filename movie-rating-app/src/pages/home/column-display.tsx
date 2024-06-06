import { Link } from "react-router-dom";
import { DisplayType } from ".";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export const ColumnDisplay = (props: Props) => {
  const { data, displayType } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((displayData: DisplayData) => (
        <div key={displayData.id} className=" rounded-md shadow-lg bg-black">
          <Link
            to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${
              displayData.id
            } `}
          >
            <div className="grid grid-cols-1">
              <div className="h-full w-full relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${displayData.poster_path}`}
                  alt={displayData.title || displayData.name || "Poster"}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="h-18 p-9">
                <h3 className="text-xl font-bold text-gray-50">
                  {displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name}
                </h3>
                <p className="text-gray-200 font-semibold">
                  Release Date: {displayData.release_date}
                </p>
                <p className="text-yellow-600">
                  Rating: {displayData.vote_average.toFixed(1)} (
                  {displayData.vote_count} votes)
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
