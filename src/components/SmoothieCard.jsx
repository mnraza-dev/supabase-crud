import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { supabase } from "../config/supabaseClient";

const SmoothieCard = ({ smoothie, onDelete }) => {
  const navigate = useNavigate();

  const deleteSmoothie = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id);

    if (error) {
      console.log("Error:", error);
    } else {
      onDelete(smoothie.id);
      navigate("/", { replace: true });
    }
  };
  return (
    <div
      key={smoothie.id}
      className=" mb-4 mt-4 relative max-w-md w-[280px] min-h-56 h-full bg-gray-100  p-6 rounded-xl drop-shadow-lg  border-1 border-sky-200"
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
      <div className="mt-2  absolute bottom-2   rounded-md p-1 gap-4  flex items-center justify-end w-[230px]  ">
        <div className="bg-gray-300/50 p-2 rounded-full drop-shadow-lg">
          <MdDelete
            onClick={deleteSmoothie}
            className="cursor-pointer text-red-600 hover:text-red-800 x"
            size={25}
          />
        </div>
        <Link
          className=" bg-gray-300/50 p-2 rounded-full drop-shadow-lg"
          to={`/${smoothie.id}`}
        >
          <FiEdit3 size={25} />
        </Link>
      </div>
    </div>
  );
};

export default SmoothieCard;
