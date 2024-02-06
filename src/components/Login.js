import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  checkValidDataForSignIn,
  checkValidDataForSignUp,
} from "../utils/validate";

const Login = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showToggleSignIn, setShowToggleSignIn] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(null);

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);

  const handleToggleSignIn = () => {
    setShowToggleSignIn(!showToggleSignIn);
  };
  const handleLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  const handleButtonClick = () => {
    // console.log(userEmail);
    // console.log(userPassword);

    //firstly validate form data i.e. name ,email ID , password
    const errMessage = showToggleSignIn
      ? checkValidDataForSignIn(
          userEmail.current.value,
          userPassword.current.value
        )
      : checkValidDataForSignUp(
          userName.current.value,
          userEmail.current.value,
          userPassword.current.value
        );
    setShowErrorMessage(errMessage);
    console.log(errMessage);

    //secondly we have to do SignIn or Sign Up
  };

  return (
    <>
      {/* Header  */}
      <Header />
      {/* Body background_Image  */}
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_Image"
        />
      </div>
      {/* Form for SignIn and Signup */}
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 bg-black opacity-85 my-36 mx-auto right-0 left-0 p-5 text-white rounded-lg"
        >
          <div className="mr-6 ml-4">
            <h1 className="p-2 text-3xl font-bold">
              {showToggleSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!showToggleSignIn && (
              <>
                <input
                  ref={userName}
                  type="text"
                  placeholder="Enter Full Name"
                  className="m-2 p-3 w-full rounded-md bg-gray-700"
                />
              </>
            )}

            <input
              ref={userEmail}
              type="text"
              placeholder="Enter Email"
              className="m-2 p-3 w-full rounded-md bg-gray-700"
            />
            <input
              ref={userPassword}
              type="password"
              placeholder="Enter Password"
              className="m-2 p-3 w-full rounded-md  bg-gray-700"
            />
            <p className="text-md font-semibold text-red-500 mx-2">
              {showErrorMessage}
            </p>
            <div>
              <button
                className="bg-red-500 m-2  py-3 px-4 rounded-md w-full text-md font-bold"
                onClick={handleButtonClick}
              >
                {showToggleSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
          <div className="text-center p-2">
            <Link to="/forgotpassword">
              <h1>Forgot Password?</h1>
            </Link>
          </div>
          <div className="ml-4 p-2 ">
            <p className="mb-3">
              <span className=" text-gray-400">
                {showToggleSignIn ? "New to Netflix?" : "Already Registered?"}
              </span>

              <span
                className="font-bold cursor-pointer p-2"
                onClick={handleToggleSignIn}
              >
                {showToggleSignIn ? "Sign up now." : "Sign In"}
              </span>
            </p>
            <p className="text-sm text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span
                onClick={handleLearnMore}
                className="cursor-pointer font-semibold text-blue-500"
              >
                Learn more.
              </span>
            </p>
            {showLearnMore && (
              <p className="text-sm text-gray-400 mt-5">
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google).
                <span
                  onClick={handleLearnMore}
                  className="cursor-pointer font-semibold text-blue-500"
                >
                  Show less...
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
