import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  //we can make here one custom hook also
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
