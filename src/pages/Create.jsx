import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [method, setMethod] = useState("");
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    if (!title || !rating || !method) {
      setFormError("All fields are required");
      return;
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, rating: parseInt(rating), method }]);

    if (error) {
      console.log("Error:", error);
      setFormError("Error creating smoothie: " + error.message);
    } else {
      console.log("Inserted data:", data);
      setSuccessMessage("Smoothie created successfully!");
      setTitle("");
      setRating("");
      setMethod("");
      navigate("/")
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6 gap-6">
      <h2 className="text-2xl font-medium text-center">Create New Smoothies</h2>
      {formError && (
        <p className="absolute top-16 w-full bg-red-500 drop-shadow-m text-white rounded-lg p-3">
          {formError}
        </p>
      )}{" "}
      {/* Display form errors */}
      {successMessage && (
        <p className=" drop-shadow-md bg-green-500 text-text rounded-lg p-3">
          {successMessage}
        </p>
      )}{" "}
      {/* Display success message */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col bg-gray-200 p-6 rounded-md drop-shadow-md border border-sky-100"
      >
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
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
