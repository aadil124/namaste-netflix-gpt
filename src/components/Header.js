import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    //in documentation onAuthStateChanged is returning a unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        console.log(uid, email, displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this will be called when my component unmounts and this will be unsubscribe my onAuthStateChanged.

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img className="w-56" src={LOGO} alt="logo" />
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
