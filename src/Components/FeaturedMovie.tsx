import { Movie } from "@/types/Movie";

type FeaturedMovieProps = {
  data: Movie;
};

const FeaturedMovie = ({ data }: FeaturedMovieProps) => {
  const {
    Title,
    Plot,
    Awards,
    imdbRating,
    Actors,
    Director,
    Poster,
    Genre,
    Year,
  } = data;
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <div className="relative flex items-center">
          <img
            src={Poster}
            alt="ui/ux review check"
            className="h-1/2 w-1/2 object-cover object-center"
          />
        </div>
        <div
          className={`bg-cover bg-center bg-[url('${Poster}')] absolute inset-0 h-full w-full`}
        ></div>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {Title}
          </h5>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {imdbRating}
          </p>
        </div>
        <div className="text-gray-500 font-semibold text-sm">{Genre}</div>

        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          {Plot}
        </p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
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
          {Awards !== "N/A" ? (
            <p className="italic bg-yellow-300 rounded-lg outline-dashed outline-yellow-200 px-4 py-2 font-bold">
              {Awards}
            </p>
          ) : null}
        </div>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-yellow-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          More information
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
