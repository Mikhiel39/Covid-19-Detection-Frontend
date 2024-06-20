import React from "react";
import { useNavigate } from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Some Error Occured</h1>
        <p className="mb-4">
          Click the below link to go back to home.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-orange-500 hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
