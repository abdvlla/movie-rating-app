import { Link } from "react-router-dom";
import { DisplayType } from ".";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  rating?: number;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?: boolean;
}

export const ColumnDisplay = (props: Props) => {
  const { data, displayType, isRated } = props;
  const [rating, setRating] = useState<number>(0);

  const onSuccess = () => {
    toast.success("Rated successfully!");
  };

  const onError = () => {
    toast.error("Error! Rate did not go through.");
  };

  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError,
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["rateTvShow"],
    mutationFn: (id: number) => rateTvShow(id, rating),
    onSuccess,
    onError,
  });

  const rate =
    displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;

  const handleRateSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: number
  ) => {
    e.preventDefault();
    rate(id);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 grid-flow-row-dense">
        {data.map((displayData: DisplayData) => (
          <div key={displayData.id}>
            <div className="rounded-md shadow-lg bg-black">
              <Link
                to={`/${
                  displayType === DisplayType.Movies ? "movie" : "tvshow"
                }/${displayData.id}`}
              >
                <div className="grid grid-cols-1">
                  <div className="h-fit w-full relative">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${displayData.poster_path}`}
                      alt={displayData.title || displayData.name || "Poster"}
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                  <div className="h-18 p-9">
                    <h3 className="text-l font-bold text-gray-50">
                      {displayData.title || displayData.name}
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
            <div
              className="py-2 mt-2 inline-block bg-gray-200 border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 mb-2"
              data-hs-input-number=""
            >
              <div className="flex items-center flex-cols-2 px-2 space-x-4">
                <form onSubmit={(e) => handleRateSubmit(e, displayData.id)}>
                  <input
                    className="p-0 w-12 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white font-semibold bg-gray-200"
                    type="number"
                    defaultValue={isRated ? displayData.rating : 0}
                    min="0"
                    max="10"
                    step="0.5"
                    onChange={(e) => setRating(Number(e.target.value))}
                    data-hs-input-number-input=""
                  />
                  <button
                    type="submit"
                    className="text-slate-900 font-semibold"
                  >
                    Rate
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
