import React from "react";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smoothie }) => {
  return (
    <Link
      to={`/${smoothie.id}`}
      key={smoothie.id}
      className=" max-w-44 w-44 bg-gray-200 p-6 rounded-md drop-shadow-md border border-sky-100"
    >
      <h2>{smoothie.tittle}</h2>
      <p>{smoothie.rating + "⭐"} </p>
      <p>{smoothie.method}</p>
    </Link>
  );
};

export default SmoothieCard;
