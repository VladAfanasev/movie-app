import FeaturedMovie from "@/Components/FeaturedMovie";
import { Movie } from "@/types/Movie";
import { useEffect, useState } from "react";
type FeaturedProps = {};

const Featured = ({}: FeaturedProps) => {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch initial search results for the search term
    fetch(
      `https://www.omdbapi.com/?apikey=6c3a2d45&s=movie&plot=full&type=movie`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          const imdbIds = data.Search.slice(0, 2).map(
            (result: Movie) => result.imdbID,
          );
          fetchMovieDetails(imdbIds);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, []);

  const fetchMovieDetails = (imdbIds: string[]) => {
    const moviePromises = imdbIds.map((imdbId) => {
      return fetch(
        `https://www.omdbapi.com/?apikey=6c3a2d45&i=${imdbId}&plot=full`,
      ).then((response) => response.json());
    });

    Promise.all(moviePromises)
      .then((moviesData: Movie[]) => {
        setMovieData(moviesData);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };
  return (
    <div className="container mt-8 grid grid-cols-2 gap-8">
      {movieData.map((movie, index) => (
        <FeaturedMovie data={movie} key={index} />
      ))}
    </div>
  );
};

export default Featured;
