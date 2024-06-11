import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchTvShowDetails } from "./query";
import BackButton from "../../components/BackButton";

export const TvShow = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid Tv Show</div>;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["tvShow", id],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return (
      <div role="status" className="flex mx-auto justify-center mt-10">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error loading TV show details</div>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-8 p-5 rounded-xl">
      <BackButton />
      <h2 className="text-3xl font-bold m-6 text-gray-50">{data.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title || "TV Show Poster"}
            className="object-cover mx-auto"
          />
        </div>
        <div className="text-left">
          <ul className="font-bold">
            First air date:
            <li className="text-gray-300 font-normal">{data.first_air_date}</li>
          </ul>
          <ul className="font-bold mt-2">
            Rating:
            <li className="text-yellow-500 font-normal">
              {data.vote_average.toFixed(1)} ({data.vote_count} votes)
            </li>
          </ul>
          <ul className="font-bold mt-2">
            Plot:
            <li className="text-gray-300 font-normal">{data.overview}</li>
          </ul>
          <ul className="font-bold mt-2">
            TV Show ID:
            <li className="text-gray-300 font-normal">{data.id}</li>
          </ul>

          <ul className="font-bold mt-2">
            Genres(s):
            <li className="text-gray-300 font-normal">
              {" "}
              {data.genres
                .map((genre: { name: string }) => genre.name)
                .join(", ")}
            </li>
          </ul>
          <ul className="font-bold mt-2">
            Episode runtime:
            <li className="text-gray-300 font-normal">
              {data.episode_run_time.join(", ")} minutes
            </li>
          </ul>
          <ul className="font-bold mt-2">
            Language:
            <li className="text-gray-300 font-normal">
              {data.original_language.toUpperCase()}
            </li>
          </ul>
          <ul className="font-bold mt-2">
            Production companies:
            <li className="text-gray-300 font-normal">
              {" "}
              {data.production_companies
                .map((company: { name: string }) => company.name)
                .join(", ")}
            </li>
          </ul>

          <ul className="font-bold mt-2">
            Popularity:
            <li className="text-gray-300 font-normal">{data.popularity}</li>
          </ul>

          <ul className="font-bold mt-2">
            Voter average:
            <li className="text-gray-300 font-normal">{data.vote_average}</li>
          </ul>
          <ul className="font-bold mt-2">
            Number of seasons:
            <li className="text-gray-300 font-normal">
              {data.number_of_seasons}
            </li>
          </ul>
          <ul className="font-bold mt-2">
            Number of episodes:
            <li className="text-gray-300 font-normal">
              {data.number_of_episodes}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
