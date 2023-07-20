import React from "react";

export const Hero = () => {
  return (
    <div className="relative">
      <img
        className="h-full w-full block lg:hidden"
        src="../../public/mobile.png"
        alt="Mobile Image"
      />
      <img
        className="h-full w-full hidden lg:block"
        src="../../public/desktop.png"
        alt="Desktop Image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 w-full items-center text-center px-2">
        <span className="text-white text-5xl font-semibold">
          Nothing can stop you
        </span>
        <button className="py-3 px-4 font-bold text-red-600 bg-white w-fit ">
          FIND OUT MORE
        </button>
      </div>
    </div>
  );
};
