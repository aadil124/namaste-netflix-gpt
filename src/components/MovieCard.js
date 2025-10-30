import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-2 transform transition-transform hover:scale-105 cursor-pointer">
      <img
        alt="movie poster"
        src={`${IMAGE_URL}${posterPath}`}
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
