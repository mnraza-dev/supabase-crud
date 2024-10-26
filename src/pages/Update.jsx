import React from "react";

const Update = () => {
  return (
    <div className="h-screen flex justify-center items-center p-6 gap-6">
      <div className="flex gap-3 flex-col bg-gray-200 p-6 rounded-md drop-shadow-md border border-sky-100">
    
        <input onChange={(e)=>{e.target.value}} className="rounded-md   drop-shadow-md outline-none px-2"  type="text" name="title" value={"smoothie.title"} />
        <input onChange={(e)=>{e.target.value}} className="rounded-md   drop-shadow-md outline-none px-2" type="text" name="rating" value={"smoothie.title"} />
        <textarea onChange={(e)=>{e.target.value}} className="rounded-md   drop-shadow-md outline-none px-2"  />
        <button className="bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md drop-shadow-md text-white " onClick={() => {}}>Update</button>
      </div>
    </div>
  );
};

export default Update;
