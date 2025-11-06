import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMoviesList = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies;
