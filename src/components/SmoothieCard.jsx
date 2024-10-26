import React from "react";
import { Link } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const SmoothieCard = ({ smoothie }) => {
  return (
    <Link
      to={`/${smoothie.id}`}
      key={smoothie.id}
      className=" mb-4 mt-4 relative max-w-44 w-44 h-[200px] bg-gray-100  p-6 rounded-lg drop-shadow-lg  border-1 border-sky-200"
    >
      <h2 className="font-medium text-xl">{smoothie.title}</h2>
      <p className="text-sm">
        <span className="font-semibold">Method: </span> {smoothie.method}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Ratings: </span>
        {smoothie.rating + "⭐"}{" "}
      </p>
      <p className=" bg-blue-950 rounded-full p-2 -right-2 absolute -top-2 text-sm">
        ⭐
      </p>
      <div className="bg-white mt-2 absolute -bottom-4 right-['50%'] rounded-full p-2 gap-4  flex items-center justify-center w-32  ">
        <MdDelete
          onClick={() => deleteSmoothie(smoothie.id)}
          className="text-red-600 hover:text-red-800 x"
          size={18}
        />
        <Link className=" " to={`/${smoothie.id}`}>
          <FiEdit3 size={18} />
        </Link>
      </div>
    </Link>
  );
};

export default SmoothieCard;
