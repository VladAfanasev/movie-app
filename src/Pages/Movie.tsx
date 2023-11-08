import { useLocation } from "react-router-dom";
type MoviePageProps = {};

const MoviePage = ({}: MoviePageProps) => {
  let { state } = useLocation();
  const { Title, Plot, Awards, Rating, Actors, Director, Poster, Genre, Year } =
    state;
  return (
    <div className="lg:grid lg:grid-cols-5 md:grid-cols-none lg:h-full min-h-screen text-slate-100">
      <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg">
        <h1 className="text-5xl font-extrabold text-slate-100">{Title}</h1>
        <div className="flex mt-4">
          <h2 className="font-bold text-lg text-slate-100 ">{Genre}</h2>
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
            <p className="ml-2 text-sm font-bold text-slate-100">{Rating}</p>
          </div>
        </div>
        <p className="text-lg text-slate-100 text-justify pt-2">{Plot}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="flex flex-col my-2">
          <span className="text-xs text-gray-500 font-semibold">
            Release Date
          </span>
          {Year}
        </p>
        <p className="flex flex-col my-2">
          <span className="text-xs text-gray-500 font-semibold">
            Directed by
          </span>
          {Director}
        </p>
        <p className="flex flex-col">
          <span className="text-xs text-gray-500 font-semibold">Actors</span>
          {Actors}
        </p>
        {Awards !== "N/A" ? <p>{Awards}</p> : null}
      </div>

      <div className="hidden relative lg:block  lg:col-span-3 max-h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={Poster}
          alt=""
        />
      </div>
    </div>
  );
};

export default MoviePage;
