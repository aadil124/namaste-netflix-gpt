import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../Redux/moviesSlice";

const useMovieTrailer = (movieId) => {
  console.log("movieId", movieId);

  const dispatch = useDispatch();
  const getMoviesTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("json", json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log("filterData", filterData);
    dispatch(addMovieTrailer(filterData));
  };

  useEffect(() => {
    getMoviesTrailerVideo();
  }, []);
};

export default useMovieTrailer;
