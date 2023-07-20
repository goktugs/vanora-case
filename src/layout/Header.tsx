import { useState } from "react";
import { Logo } from "../assets/logo";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="lg:flex lg:justify-between lg:px-14">
      <div className="flex items-center justify-between px-4 py-2  ">
        <Logo />
        <div className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={
                isNavOpen
                  ? "rotate-45 block w-8 h-0.5 bg-gray-600 animate-pulse"
                  : "block w-8 h-0.5 bg-gray-600 animate-pulse"
              }
            ></span>
            <span
              className={
                isNavOpen
                  ? "-rotate-45 block w-8 h-0.5 bg-gray-600 animate-pulse"
                  : "block w-8 h-0.5 bg-gray-600 animate-pulse"
              }
            ></span>
            <span
              className={
                isNavOpen
                  ? "hidden"
                  : "block w-8 h-0.5 bg-gray-600 animate-pulse"
              }
            ></span>
          </div>
        </div>
      </div>
      <header className="py-2 flex justify-between items-center px-4 w-3/5 ">
        <nav
          className={
            isNavOpen
              ? "flex justify-between px-4 py-8 mx-auto bg-white"
              : "hidden"
          }
        >
          <div className="flex lg:hidden">
            <div
              onClick={() => setIsNavOpen((prev) => !prev)}
              className={
                isNavOpen
                  ? " absolute w-full mt-14 h-full top-0 left-0 bg-red-950 text-white z-10 flex flex-col divide-y divide-gray-600 uppercase text-sm font-semibold "
                  : "hidden"
              }
            >
              <a href="#">
                <div className="flex justify-between items-center w-full px-6 py-7 ">
                  <span>show all tyres</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.625 5.25L15.375 12L8.625 18.75"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </a>

              <a href="#">
                {" "}
                <div className="flex justify-between items-center w-full px-6 py-7 ">
                  <span>find a dealer</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.625 5.25L15.375 12L8.625 18.75"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </a>
              <a href="#">
                {" "}
                <div className="flex justify-between items-center w-full px-6 py-7 ">
                  <span>guides & videos</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.625 5.25L15.375 12L8.625 18.75"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </a>
              <a href="#">
                {" "}
                <div className="flex justify-between items-center w-full px-6 py-7 ">
                  <span>go with</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.625 5.25L15.375 12L8.625 18.75"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </a>
              <a href="#">
                {" "}
                <div className="flex justify-between items-center w-full px-6 py-7 border-b-2 border-gray-700">
                  <span>service & help</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.625 5.25L15.375 12L8.625 18.75"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className="hidden lg:flex justify-between items-center w-full lg:gap-10">
          <div className="flex justify-between items-center w-full">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="text-sm font-semibold uppercase">
                show all tyres
              </span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="text-sm font-semibold uppercase">
                find a dealer
              </span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="text-sm font-semibold uppercase">
                guides & videos
              </span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="text-sm font-semibold uppercase">go with</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="text-sm font-semibold uppercase">
                service & help
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
