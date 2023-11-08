import { Movie } from "@/types/Movie";
import { Link } from "react-router-dom";

type SearchItemProps = {
  data: Movie;
};

const SearchItem = ({ data }: SearchItemProps) => {
  const { imdbID, Title, Poster, Year, Rating, Type, Plot, Genre, Actors } =
    data;
  return (
    <Link
      to={`/movie/${imdbID}`}
      state={data}
      className="flex flex-row p-4 hover:bg-slate-300 bg-slate-200 rounded-xl my-4"
    >
      <div className="w-1/5">
        <img src={Poster} className="w-full " />
      </div>

      <div className="w-full pl-4 flex flex-col relative">
        <h3 className="text-gray-700 font-bold text-2xl hover:text-gray-900 hover:cursor-pointer">
          {Title}
        </h3>
        <div className="inline-flex">
          <span className="text-muted-foreground font-s">{Year}</span>
          <div className="flex items-center ml-4">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {Rating}
            </p>
          </div>
        </div>

        <span className="absolute right-0 top-0 bg-orange-300 text-gray-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {Type}
        </span>
        <span>{Plot}</span>
        <div className="flex justify-between mt-auto font-semibold text-sm">
          <span>{Genre}</span>
          <span>{Actors}</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
