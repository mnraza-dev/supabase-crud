import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient"; 
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Track loading state explicitly

  useEffect(() => {
    const fetchSmoothies = async () => {
      console.log("Fetching smoothies..."); // Debugging log

      try {
        const { data, error } = await supabase.from("smoothies").select();
        if (error) {
          throw error; // Throw error to be caught by try-catch
        }

        setSmoothies(data || []); // Safely set the data
        setFetchError(null); // Reset error state
        console.log("Fetched data:", data); // Log the data
      } catch (err) {
        console.error("Fetch error:", err);
        setFetchError("Could not fetch the smoothies.");
        setSmoothies([]); // Reset data to an empty array
      } finally {
        setLoading(false); // Set loading to false after attempt
      }
    };

    fetchSmoothies();
  }, []); // Ensure no unnecessary re-renders

  if (loading) return <p>Loading...</p>; // Display loading state

  return (
    <div className=" p-6 flex  justify-center items-center flex-wrap gap-6">
      {fetchError && <p>{fetchError}</p>}
      {smoothies.length > 0 ? (
        smoothies.map((smoothie) => (
         <SmoothieCard key={smoothie.id} smoothie={smoothie} />
        ))
      ) : (
        !fetchError && <p>No smoothies available.</p>
      )}
    </div>
  );
};

export default Home;
