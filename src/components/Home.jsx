import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-blue-950 w-full h-screen">
      {/* Container */}

      <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <div className="w-full grid-cols-2 sm:grid gap-8 py-4">
          <div className="w-full ">
            <p className="text-pink-500 text-xl sm:text-2xl">Hi, my name is</p>
            <h1 className="text-3xl sm:text-6xl font-bold text-cyan-200">
              Marcin Zalewski
            </h1>
            <h2 className="text-xl sm:text-3xl pt-2 text-gray-500">
              I’m a mobile and web developer
            </h2>
            <p className="text-gray-400 py-4 max-w-lg">
              I’m a mobile and web developer specializing in building and
              designing exceptional digital experiences. <br />
              Currently, I’m focused on building Android mobile apps and
              responsive web pages.
            </p>
          </div>
          <div className="w-auto p-4" class='fade-in-effect'>
            <img
              className="w-40 object-contain sm:w-60 bg-slate-400 rounded-full shadow-black shadow-2xl border-2 border-cyan-200"
              src={require("../assets/Foto_profilowe.png")}
              alt="Profile"
            />
          </div>
        </div>

        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="text-white group border-2 p-2 flex items-center hover:bg-pink-600 hover:border-pink-600 animate-pulse">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2 text-xl" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
