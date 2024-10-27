import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("created_at");

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) =>
      prevSmoothies.filter((smoothie) => smoothie.id !== id)
    );
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      console.log("Fetching smoothies..."); // Debugging log

      try {
        const { data, error } = await supabase
          .from("smoothies")
          .select()
          .order(orderBy, { ascending: true }); 

        if (error) throw error; 

        setSmoothies(data || []);
        setFetchError(null); 
        console.log("Fetched data:", data); 
      } catch (err) {
        console.error("Fetch error:", err);
        setFetchError("Could not fetch the smoothies.");
        setSmoothies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSmoothies();
  }, [orderBy]); 

  if (loading) return <p>Loading...</p>; 

  return (
    <div className="p-6 flex flex-col gap-6 justify-center items-center">
      {fetchError && <p className="text-red-500">{fetchError}</p>}
      <div className="flex gap-3">
        <p>Order By:</p>
        <button className="px-3 bg-green-600 hover:bg-green-700 text-sm py-1 cursor-pointer text-white rounded-md drop-shadow-lg " onClick={() => setOrderBy("title")}>Title</button>
        <button className="px-3 bg-green-600 hover:bg-green-700 text-sm py-1 cursor-pointer text-white rounded-md drop-shadow-lg " onClick={() => setOrderBy("rating")}>Rating</button>
        <button className="px-3 bg-green-600 hover:bg-green-700 text-sm py-1 cursor-pointer text-white rounded-md drop-shadow-lg " onClick={() => setOrderBy("created_at")}>Time Created</button>
      </div>

      {smoothies.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {smoothies.map((smoothie) => (
            <SmoothieCard
              key={smoothie.id}
              smoothie={smoothie}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-2xl">No smoothies available.</p> 
      )}
    </div>
  );
};

export default Home;
