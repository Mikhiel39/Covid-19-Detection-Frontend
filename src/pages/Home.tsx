import hero from "../public/hero.svg"; 
import { Link } from "react-router-dom";

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={backgroundImageStyle}
      ></div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-20">
            <div className="text-orange-500 text-xl md:text-2xl lg:text-3xl font-bold mb-5">
              Welcome
            </div>
            <div className="text-slate-800 text-2xl md:text-3xl lg:text-5xl font-bold mb-5">
              Covid-19 Detection
            </div>
            <div className="text-slate-800 text-base md:text-lg lg:text-xl mb-5">
              Fill the form to get your COVID-19 Status
            </div>
            <Link to="/form">
              <button className="bg-orange-500 hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg">
                Click me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
