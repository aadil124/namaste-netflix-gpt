import React, { useEffect } from "react";
import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoviesList = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
