// Spinner.js
// import React from "react";

const Spinner = ({ lg, full }) => {
  return (
    <div
      className={`flex ${
        full ? "w-screen h-screen" : null
      } items-center  justify-center bg-transparent`}
    >
      <div
        className={` ${
          lg ? "w-64 h-64" : "w-4 h-4"
        }    border-2 border-t-2 border-gray-200 border-t-blue-800 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
