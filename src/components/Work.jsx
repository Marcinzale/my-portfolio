import React, { useState } from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import RealEstate from "../assets/projects/realestate.jpg";

import ChatGpt from "../assets/ChatGpt.jpg";
import Bmi from "../assets/Bmi.jpg";
import Coin from "../assets/Coin.jpg";
import Weather from "../assets/Weather.jpg";
import WeatherJS from "../assets/projects/WeatherJSImg.png";
import QRCodeGenerator from "../assets/projects/QRCodeGen.png";
import ThisWebsite from "../assets/projects/ThisWebsite.png";

import ModalChatGpt from "./ModalChatGpt";
import ModalBmi from "./ModalBmi";
import ModalCoin from "./ModalCoin";
import ModalWeather from "./ModalWeather";

const Work = () => {
  const [showModalChatGpt, setShowModalChatGpt] = useState(false);
  const [showModalBmi, setShowModalBmi] = useState(false);
  const [showModalCoin, setShowModalCoin] = useState(false);
  const [showModalWeather, setShowModalWeather] = useState(false);

  const handleOnCloseGpt = () => setShowModalChatGpt(false);
  const handleOnCloseBmi = () => setShowModalBmi(false);
  const handleOnCloseCoin = () => setShowModalCoin(false);
  const handleOnCloseWeather = () => setShowModalWeather(false);

  return (
    <div
      name="work"
      className="w-full h-full md:h-screen bg-blue-950 text-gray-300 pt-14"
    >
      <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
          {/* <p className="text-stone-400 text-sm">- Mobile projects</p> */}
        </div>

        <ModalChatGpt onClose={handleOnCloseGpt} visible={showModalChatGpt} />
        <ModalBmi onClose={handleOnCloseBmi} visible={showModalBmi} />
        <ModalCoin onClose={handleOnCloseCoin} visible={showModalCoin} />
        <ModalWeather onClose={handleOnCloseWeather} visible={showModalWeather} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Work card 1 */}
          <div
            style={{ backgroundImage: `url(${ChatGpt})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat' }} 
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 text-center">
              <span className="text-xl font-bold text-white tracking-wide">
                Android mobile ChatGPT application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                {/* <a href=" "> */}
                <button
                  onClick={() => setShowModalChatGpt(true)}
                  className="ModalChatGpt text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
                {/* </a> */}

                <a href="https://github.com/Marcinzale/AndroidJavaChatGPTClient" target="_blank" rel="noreferrer">
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
            style={{ backgroundImage: `url(${Bmi})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'  }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 text-center">
              <span className="text-xl font-bold text-white tracking-wide">
                Android mobile app that calculats BMI
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                {/* <a href="/"> */}
                <button
                  onClick={() => setShowModalBmi(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>
                {/* </a> */}

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
            style={{ backgroundImage: `url(${Coin})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'  }}
            className="shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 text-center">
              <span className="text-xl font-bold text-white tracking-wide">
                Mobile Android flip the coin application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
              <button
                  onClick={() => setShowModalCoin(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>

                <a href="https://github.com/Marcinzale/FlipTheCoin" target="_blank" rel="noreferrer">
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
            style={{ backgroundImage: `url(${Weather})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'  }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-xl font-bold text-white tracking-wide">
                Flutter Android weather app
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
              <button
                  onClick={() => setShowModalWeather(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </button>

                <a
                  href="https://github.com/Marcinzale/flutter-weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
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
            style={{ backgroundImage: `url(${WeatherJS})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 text-center">
              <span className="text-xl font-bold text-white tracking-wide">
                JavaScript Weather Web application
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a
                  href="https://marcinzale.github.io/WeatherJS/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/Marcinzale/WeatherJS"
                  target="_blank"
                  rel="noreferrer"
                >
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
            style={{ backgroundImage: `url(${ThisWebsite})` }}
            className="shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 text-center">
              <span className="text-xl font-bold text-white tracking-wide">
                This website
              </span>

              {/* Buttons on work card */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://marcinzale.github.io/my-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
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
