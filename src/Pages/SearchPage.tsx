import { useRef, useState } from "react";
import { Movie } from "@/types/Movie";
import Search from "@/Components/Search";
import SearchItem from "@/Components/SearchItem";
type SearchPageProps = {};

const SearchPage = ({}: SearchPageProps) => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const ulRef = useRef<HTMLUListElement | null>(null);

  return (
    <>
      <div className="container max-w-3xl my-14 ">
        <Search setSearchResults={setSearchResults} />
        <div className="mt-4">
          {searchResults.length > 0 ? (
            <>
              <h1 className="text-lg font-bold text-white">Search results</h1>
              <div className="overflow-y-auto">
                <ul ref={ulRef}>
                  {searchResults.map((result) => {
                    return (
                      <li key={result.imdbID}>
                        <SearchItem data={result} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
