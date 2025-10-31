import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { LOGO } from "../utils/constants";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    //in documentation onAuthStateChanged is returning a unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        // console.log(uid, email, displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed top-0 left-0 bg-gradient-to-b from-black z-50 w-screen flex justify-between items-center px-4 py-2">
      <img className="w-44 sm:w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-3 text-white">
          <div className="flex flex-col items-center">
            <img
              className="w-9 h-9 rounded-full border border-gray-400"
              src={user.photoURL}
              alt="User Icon"
              loading="lazy"
            />
            <span className="text-xs text-red-500 font-semibold truncate max-w-[100px]">
              {user.displayName}
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-semibold"
          >
            <FaSignOutAlt />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
