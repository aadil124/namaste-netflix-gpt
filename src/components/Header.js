import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="m-2 p-3 flex">
          <div className="px-2">
            <img
              className="mt-4 w-8 rounded-full"
              src={user.photoURL}
              alt="userIcon"
            />
            <h1 className="text-red-600 font-bold">{user.displayName}</h1>
          </div>
          <button
            className="bg-red-600 rounded-md px-2 h-10 mt-5 text-white font-bold"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
