import React from "react";
import { translatedLanguageKeys } from "../utils/language";
import { useSelector } from "react-redux";

const GPTSreachBar = () => {
  const langKey = useSelector((store) => store.languageConfig.langKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <div className="bg-black rounded-2xl bg-transparent">
        <input
          type="text"
          placeholder={translatedLanguageKeys?.[langKey]?.placeholder}
          className="py-2 px-4 m-2 rounded-lg w-80 border border-black"
        ></input>
        <button className="py-2 px-4 m-2 bg-red-500 hover:bg-red-700 font-semibold rounded-lg">
          {translatedLanguageKeys?.[langKey]?.search}
        </button>
      </div>
    </div>
  );
};

export default GPTSreachBar;
