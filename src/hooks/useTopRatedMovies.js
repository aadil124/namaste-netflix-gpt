import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../Redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviesList = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMoviesList();
  }, []);
};

export default useTopRatedMovies;
