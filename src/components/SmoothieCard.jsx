import React from "react";
import { Link } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
const SmoothieCard = ({ smoothie }) => {
  return (
    <Link
      to={`/${smoothie.id}`}
      key={smoothie.id}
      className="relative max-w-44 w-44 h-[150px] bg-gray-100  p-6 rounded-md drop-shadow-md  border-1 border-sky-200"
    >
      <h2 className="font-medium text-xl">{smoothie.title}</h2>
      <p className="text-sm"><span className="font-semibold">Method: </span> {smoothie.method}</p>
      <p className="text-sm"><span className="font-semibold">Ratings: </span>{smoothie.rating + "⭐"} </p>
      <p className=" bg-blue-950 rounded-full p-2 -right-2 absolute -top-2 text-sm">
      ⭐
      </p>
      <div className="flex items-center justify-center">
       <Link className="absolute bottom-3 right-2" to={`/${smoothie.id}`}><FiEdit3 size={25}/></Link>
      </div>

    </Link>
  );
};

export default SmoothieCard;
