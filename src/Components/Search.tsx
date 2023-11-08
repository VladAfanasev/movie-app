import { useEffect, useRef, useState } from "react";
import { Movie } from "@/types/Movie";
import { Input } from "@/Components/ui/input";

type SearchProps = {
  setSearchResults: (results: Movie[]) => void;
};
export default function Search({ setSearchResults }: SearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [fullPlot, setFullPlot] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/" && inputRef.current) {
        if (
          !(event.target instanceof HTMLInputElement) ||
          !event.target?.matches("input[type=text], input[type=search]")
        ) {
          event.preventDefault(); // Prevent '/' from being typed
          inputRef.current.focus(); // Focus on the Search input
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // Fetch initial search results for the search term
    if (searchTerm) {
      fetch(
        `https://www.omdbapi.com/?apikey=6c3a2d45&s=${searchTerm}&plot=full&p=1&type=movie`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            const imdbIds = data.Search.slice(0, 5).map(
              (result: Movie) => result.imdbID,
            );
            fetchMovieDetails(imdbIds);
          } else {
            setSearchResults([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, fullPlot]);

  const fetchMovieDetails = (imdbIds: string[]) => {
    const moviePromises = imdbIds.map((imdbId) => {
      return fetch(
        `https://www.omdbapi.com/?apikey=6c3a2d45&i=${imdbId}&plot=${
          fullPlot ? "full" : "short"
        }`,
      ).then((response) => response.json());
    });

    Promise.all(moviePromises)
      .then((moviesData) => {
        // Now you have detailed information for each movie
        const searchResults: Movie[] = moviesData.map((movieData) => ({
          imdbID: movieData.imdbID,
          Title: movieData.Title,
          Poster: movieData.Poster,
          Actors: movieData.Actors,
          Rating: movieData.imdbRating,
          Year: movieData.Year,
          Type: movieData.Type,
          Plot: movieData.Plot,
          Awards: movieData.Awards,
          Genre: movieData.Genre,
          Director: movieData.Director,
          imdbRating: movieData.ImdbRating,
        }));

        setSearchResults(searchResults);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setSearchResults([]);
      });
  };

  return (
    <form className="flex">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <Input
          type="search"
          placeholder={'Hit "/" to search'}
          className="md:w-[100px] lg:w-[500px] min-h-[60px] block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="default-search"
        />
      </div>
      <div className="block mt-auto mx-4">
        <span className="flex text-sm text-white font-semibold">
          Show full plot
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            onChange={() => setFullPlot(!fullPlot)}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
            {fullPlot ? "Yes" : "No"}
          </span>
        </label>
      </div>
    </form>
  );
}
