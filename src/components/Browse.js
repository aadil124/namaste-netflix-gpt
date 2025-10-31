import React, { Suspense, lazy } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";

const SecondaryContainer = lazy(() => import("./SecondaryContainer"));

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <MainContainer />
      <Suspense fallback={<p className="text-center p-4">Loading movies...</p>}>
        <SecondaryContainer />
      </Suspense>
    </div>
  );
};

export default Browse;
