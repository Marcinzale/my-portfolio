import React from "react";

const ModalWeather = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'modalContainer') onClose();
  };

  if (!visible) return null;

  return (
    <div id="modalContainer" onClick={handleOnClose} className="fixed z-50 bg-black inset-0 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center" >
      <div id="ModalWeather" className="bg-white flex flex-col justify-center items-center p-4 rounded-md">        
          <div >
            <video className="h-[560px]" src={require("../assets/FlutterWeather.mp4")} autoPlay controls />     
          </div>
      </div>
    </div>
  );
};

export default ModalWeather;