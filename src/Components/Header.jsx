import logo from "../assets/Laura-Bon-logo.svg";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import HeaderBottom from "./HeaderBottom";
export default function Header() {
  return (
    <nav className="py-1">
      <div className="text-white p-2 items-center justify-between space-x-3 flex w-full h-[75px]  bg-[rgb(7,47,84)]">
        <img
          className="w-20 h-12 bg-slate-50 ml-5 outline-none"
          src={logo}
          alt="laurabon logo"
        />
        <div className="flex items-center gap-5">
          <ul className="flex gap-11">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>ARTICLE & VIDEOS</li>
            <li>CONTACT</li>
          </ul>
          <button
            className="flex ml-[250px] mr-5 bg-white p-1 rounded text-blue-900"
            type="submit"
          >
            DONATE
          </button>
        </div>
      </div>
      <div className="flex bg-white   h-[75px] mx-auto top-[75px] items-center">
        <div className="flex mx-auto w-screen justify-center p-[10px] gap-[10px] space-x-2 py-5 items-center">
          <p className="text-[20px] text-[rgb(3,41,61)]">WATCH + LISTEN</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)]">LAURABON FOUNDATION</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)]">STUDY</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)] flex gap-2 items-center">
            <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
            SHOP
          </p>
        </div>
      </div>
      <HeaderBottom className="" />
    </nav>
  );
}

  