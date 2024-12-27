import { GoDash } from "react-icons/go";
import "./App.css";
import { useState } from "react";
import { BsDashLg } from "react-icons/bs";
function App() {
 const [nav, setNav] = useState(false);
  return (
    <>
      <div>
        <nav className="bg-blue-400 h-12 flex items-center w-screen justify-between py-8 px-8">
          {/* Icon */}
          <div
            className="flex flex-col justify-center items-center border border-white w-12 h-12 ml-3 -space-y-5"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <BsDashLg
              className={`w-20 h-8 text-white transition duration-500 ease-in ${
                nav ? "-rotate-[45deg] translate-y-2" : ""
              }`}
            />

            <BsDashLg
              className={`w-20 h-8 text-white transition duration-500 ease-in ${
                nav ? "opacity-0" : "opacity-100"
              }`}
            />

            <BsDashLg
              className={`w-20 h-8 text-white transition duration-500 ease-in ${
                nav ? "rotate-[45deg] -translate-y-2" : ""
              }`}
            />
          </div>
          <div className="flex justify-between w-1/3 max-sm:hidden">
            <div className="border py-2 px-2 rounded-xl">Contact us</div>
            <div className="border py-2 px-2 rounded-xl">Contact us</div>
            <div className="border py-2 px-2 rounded-xl">Contact us</div>
          </div>
        </nav>

        {/* {nav && <div className="bg-blue-400 w-full flex flex-col my-1 transition duration-300 ease-in">
          <div className="py-4 bg-blue-300 px-8">Contact us</div>
        </div>} */}
      </div>
    </>
  );
}

export default App;
