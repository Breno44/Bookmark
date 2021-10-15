import "./App.css";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  return (
    <>
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src="/imgs/logo-bookmark.svg" alt="" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <AiOutlineMenu className="w-5 h-5" />
          </div>
        </nav>
      </header>

      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              A simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites
              load instantly. Try it for free.
            </p>
            <div className="flex justify-center flex-wrap gap-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
