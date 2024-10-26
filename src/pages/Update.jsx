import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [fetchError, setFetchError] = useState(null);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [method, setMethod] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        setFetchError("Error fetching smoothie: " + error.message);
        navigate("/", { replace: true });
      } else {
        setTitle(data.title);
        setRating(data.rating);
        setMethod(data.method);
        setFetchError(null);
      }
    };

    fetchSmoothie();
  }, [id, navigate]);

  const updateSmoothie = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("smoothies")
      .update({ title, rating: parseInt(rating), method })
      .eq("id", id);

    if (error) {
      setFetchError("Error updating smoothie: " + error.message);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center p-6 gap-6">
      <div className="flex gap-3 flex-col bg-gray-200 p-6 rounded-md drop-shadow-md border border-sky-100">
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        <form className="flex flex-col gap-3" onSubmit={updateSmoothie}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md drop-shadow-md outline-none px-2"
            placeholder="Smoothie Title"
          />

          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="rounded-md drop-shadow-md outline-none px-2"
            placeholder="Rating"
          />

          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="rounded-md drop-shadow-md outline-none px-2"
            placeholder="Description"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md drop-shadow-md text-white"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
