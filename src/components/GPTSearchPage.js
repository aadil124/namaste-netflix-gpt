import React from "react";
import GPTSreachBar from "./GPTSreachBar";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="min-h-screen w-screen object-cover fixed top-0 left-0 -z-10"
        />
      </div>
      <GPTSreachBar />
      <div>GPTSearchPage</div>
    </>
  );
};

export default GPTSearchPage;
