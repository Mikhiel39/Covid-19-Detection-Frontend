// src/Result.tsx
import hero from "../public/hero.svg";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function Result() {
  const [redirectToForm, setRedirectToForm] = useState(false);
  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
  };
  // Retrieve prediction from cookies, with a default message if not found
  const prediction = Cookies.get("name") || "Please submit the form first.";
  function handleBack() {
    Cookies.remove("name");
    setRedirectToForm(true);
  }
  if (!prediction) {
    return <Navigate to="/error" />;
  }
  if (redirectToForm) {
    return <Navigate to="/form" />;
  }
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={backgroundImageStyle}
      ></div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-20">
            <h1 className="text-2xl font-bold mb-4">Result:</h1>
            <p className="text-xl text-slate-900">{prediction}</p>
            <div className="flex space-x-20 ml-14">
              <button
                onClick={handleBack}
                className="mt-10 ml-10 bg-orange-500 hover:bg-white text-white hover:text-black px-4 py-2 rounded-md"
              >
                Go Back
              </button>
              <Link to="/">
                <button className="mt-10 bg-orange-500 hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
