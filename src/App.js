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
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                Get in on Chrome
              </button>
              <button type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">
                Get in on Firefox
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:3/4 md:w-full md:h-full" src="/imgs/hero-bg.png" alt="" />
          </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      <section></section>
    </>
  );
}

export default App;
