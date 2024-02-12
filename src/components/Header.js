import React from "react";

const Header = () => {

  const handleSignOut = () => {};

  return (
    <div className="absolute bg-gradient-to-b from-black z-50 w-screen flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="m-2 p-4 flex">
        <img className="mt-4" src="https://github.com/account" alt="userIcon" />
        <button
          className="bg-red-600 rounded-md px-2 text-white font-bold "
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
