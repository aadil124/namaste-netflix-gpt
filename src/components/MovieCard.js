import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 sm:w-48 flex-shrink-0 transform transition-transform hover:scale-105 cursor-pointer">
      <img
        loading="lazy"
        alt="movie poster"
        src={
          posterPath
            ? `${IMAGE_URL}${posterPath}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
