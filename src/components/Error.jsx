import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center  rounded-lg p-6">
      <h2 className="text-2xl font-bold text-red-500">Error!</h2>
      <p className="text-gray-600">{error}</p>
    </div>
  );
};

export default Error;
