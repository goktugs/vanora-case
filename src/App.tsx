import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      <div className="hidden space-x-8 lg:flex">
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      <div className="flex lg:hidden">
        <div
          className="space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        </div>
        <div
          className={
            isNavOpen
              ? " absolute w-full h-screen top-0 left-0 bg-red-950 text-white z-10 flex flex-col divide-y divide-gray-600 uppercase text-sm font-semibold "
              : "hidden"
          }
        >
          <a href="#">
            {" "}
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
  );
}

export default App;
