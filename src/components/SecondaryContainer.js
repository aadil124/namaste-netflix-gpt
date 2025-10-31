import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <div className="relative z-20 bg-gradient-to-b from-black via-gray-900 to-black pt-10 pb-10">
      <div className="px-3 sm:px-6">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
