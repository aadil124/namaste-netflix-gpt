import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <section className="px-2">
      <h2 className="text-2xl font-semibold px-2 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-3 p-2">
        <div className="flex">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-gray-500 px-2">No movies are available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
