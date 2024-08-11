//import React from 'react';

function Imageslider() {
  return (
    <>
      {/** IMAGE HOME PAGE ******************************/}
      <div className="relative w-full h-screen">
        <img
          src="/Homepic.png"
          alt="Welcome to Oosadhi"
          className="absolute inset-0 w-full h-full object-cover bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center p-4 md:p-8 lg:p-12">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold">OOSADHI</h1>
            <h4 className="mb-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#02AD4F]">
              A Perfect Herbal Solution For Every Disease
            </h4>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="text-white text-base md:text-lg font-semibold bg-black rounded-md px-4 py-2 hover:border-green-500 hover:bg-green-700 transition duration-300"
              >
                Start Your Herbal Journey
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** CONTENT  ******************************** */}
    </>
  );
}

export default Imageslider;
