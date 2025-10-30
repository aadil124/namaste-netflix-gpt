import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // we can make here one custom hook also
  // const dispatch = useDispatch();
  // const getNowPlayingMoviesList = async () => {
  //   const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  //   const data = await fetch(url, API_OPTIONS);
  //   const json = await data.json();
  //   dispatch(addNowPlayingMovies(json.results));
  //   console.log("data", json.results);
  // };

  // useEffect(() => {
  //   getNowPlayingMoviesList();
  // }, []);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
