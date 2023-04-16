import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import RealEstate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen md:h-screen bg-blue-950 text-gray-300 pt-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Work card 1 */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 1 */}

          {/* Work card 2 */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 2 */}

          {/* Work card 3 */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 3 */}

          {/* Work card 4 */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 4 */}

          {/* Work card 5 */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 5 */}

          {/* Work card 6 */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of work card 6 */}
        </div>
      </div>
    </div>
  );
};

export default Work;
