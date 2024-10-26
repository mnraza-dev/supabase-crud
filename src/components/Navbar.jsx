import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-black/85 p-4 flex px-10 items-center justify-between">
      <Link
        className="hover:cursor-pointer hover:text-gray-300 text-white"
        to="/"
      >
        Recipe App
      </Link>

      <div className="flex gap-4 text-sm text-white">
        <Link className="hover:cursor-pointer hover:text-gray-300" to="/create">
          Create New
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
