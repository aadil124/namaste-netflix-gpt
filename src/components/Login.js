import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  checkValidDataForSignIn,
  checkValidDataForSignUp,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [learnMore, setLearnMore] = useState(false);
  const [error, setError] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignIn = () => setIsSignIn(!isSignIn);
  const toggleLearnMore = () => setLearnMore(!learnMore);

  const handleAuth = async () => {
    const err = isSignIn
      ? checkValidDataForSignIn(
          emailRef.current.value,
          passwordRef.current.value
        )
      : checkValidDataForSignUp(
          nameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
        );

    setError(err);
    if (err) return;

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
      } else {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        await updateProfile(userCred.user, {
          displayName: nameRef.current.value,
          photoURL: USER_AVATAR,
        });
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      }
    } catch (error) {
      setError("Email / Password not valid!");
    }
  };

  return (
    <>
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="min-h-screen w-screen object-cover fixed top-0 left-0 -z-10"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 sm:w-3/12 bg-black bg-opacity-80 my-24 mx-auto right-0 left-0 p-6 text-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-4 m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Full Name"
            className="m-2 p-3 w-full rounded-md bg-gray-700"
            onChange={() => setError("")}
          />
        )}

        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Email"
          className="m-2 p-3 w-full rounded-md bg-gray-700"
          onChange={() => setError("")}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className="m-2 p-3 w-full rounded-md bg-gray-700"
          onChange={() => setError("")}
        />

        {error && (
          <p className="text-red-500 text-md font-semibold mx-2">{error}</p>
        )}

        <button
          className="bg-red-600 hover:bg-red-700 transition m-2 py-3 px-4 rounded-md w-full text-md font-bold"
          onClick={handleAuth}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-center mt-1">
          <Link to="/forgotpassword" className="text-blue-400 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <p className="mt-4 text-center">
          <span className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already Registered?"}
          </span>
          <span
            className="font-bold cursor-pointer ml-2"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now." : "Sign In"}
          </span>
        </p>

        <p className="text-sm text-gray-400 mt-3">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          {!learnMore && (
            <span
              onClick={toggleLearnMore}
              className="cursor-pointer font-semibold text-blue-500"
            >
              Learn more.
            </span>
          )}
        </p>

        {learnMore && (
          <p className="text-sm text-gray-400 mt-2">
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service.
            <span
              onClick={toggleLearnMore}
              className="cursor-pointer font-semibold text-blue-500 ml-1"
            >
              Show less
            </span>
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
