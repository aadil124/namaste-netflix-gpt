import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { logEvent } from "firebase/analytics";

const VideoBackground = ({ movieId }) => {
  const getMoviesTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log("filterData", filterData);
  };

  useEffect(() => {
    getMoviesTrailerVideo();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GIyS5jXMip8?si=K2Zd0MzSndpxvxj8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
