import React, { Suspense, lazy } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const SecondaryContainer = lazy(() => import("./SecondaryContainer"));

const Browse = () => {
  const showGPTSearchPage = useSelector(
    (store) => store.GPTSreachPage.toggelGPTSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className=" min-h-screen text-white">
      <Header />
      {showGPTSearchPage ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <Suspense
            fallback={<p className="text-center p-4">Loading movies...</p>}
          >
            <SecondaryContainer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Browse;
