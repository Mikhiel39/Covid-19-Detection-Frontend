// src/Result.tsx
import hero from "../public/hero.svg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Result() {
  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
  };
  const navigate = useNavigate();

  // Retrieve prediction from cookies, with a default message if not found
  const prediction = Cookies.get("name") || "No prediction found. Please submit the form first.";
  if (!prediction) {
    navigate("/error");
    return null; // Return null to prevent rendering the result page
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
            <Link to="/form">
              <button className="mt-4 bg-orange-500 hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
