import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <section className="px-3 sm:px-6 mb-6">
      <h2 className="text-2xl font-semibold mb-3 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scroll-smooth space-x-3 p-2">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))
        ) : (
          <p className="text-gray-400">No movies available</p>
        )}
      </div>
    </section>
  );
};

export default MovieList;
