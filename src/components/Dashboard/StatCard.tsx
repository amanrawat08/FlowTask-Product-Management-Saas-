import React from "react";

const StatCard = () => {
  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="card text-white w-60 rounded-md bg-purple p-5 shadow-md shadow-green-200">
        <h1 className="text-xl font-semibold">Projects</h1>
        <div className="text-2xl font-semibold">8</div>
      </div>
      <div className="card text-white w-60 rounded-md bg-blue p-5 shadow-md shadow-green-200">
        <h1 className="text-xl font-semibold">Total Task</h1>
        <div className="text-2xl font-semibold">42</div>
      </div>
      <div className="card text-white w-60 rounded-md bg-green p-5 shadow-md shadow-green-200">
        <h1 className ="text-xl font-semibold">Completed Tasks</h1>
        <div className="text-2xl font-semibold">28</div>
      </div>
      <div className="card text-white w-60 rounded-md bg-orange p-5 shadow-md shadow-green-200">
        <h1 className="text-xl font-semibold">Team </h1>
        <div className="text-2xl font-semibold">12</div>
      </div>
    </div>
  );
};

export default StatCard;
