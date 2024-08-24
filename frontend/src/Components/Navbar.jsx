import "../index.css";
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Navbar = ({ menu, setMenu }) => {
  const [category, setCategory] = useState("shop");
  const {token,setToken} = useContext(ShopContext)
  const { getTotalCartItem } = useContext(ShopContext);

  return (
    <div className="flex lg:justify-around p-10 lg:p-4 shadow-[0_1px_3px_-2px_black] relative">
      <div className="flex-col left-2 flex lg:flex-row gap-8 lg:justify-between absolute top-4 h-[100vh] w-24 lg:relative lg:top-auto lg:w-[60vw] lg:h-auto">
        <div className="flex items-center gap-3 relative">
          <div className="lg:hidden">
            <MdMenu
              className="text-blue-600 text-4xl cursor-pointer"
              onClick={() => setMenu(true)}
            />
            <MdClose
              className={
                menu
                  ? "text-3xl text-red-600 cursor-pointer absolute top-[4.2rem] left-14 z-40"
                  : "hidden"
              }
              onClick={() => setMenu(false)}
            />
          </div>
          <img src={logo} alt="" className="w-12 lg:w-14" />
          <p className="text-[#171717] text-[1.8rem] lg:text-4xl font-semibold">
            SHOPPER
          </p>
        </div>
        <ul
          className={`${
            menu
              ? "lg:flex-row flex flex-col  z-30 items-center gap-12 text-[#626262] text-xl font-medium relative right-4 h-full py-3"
              : "hidden"
          } lg:flex-row lg:flex lg:items-center lg:gap-12 lg:text-[#626262] lg:text-xl lg:font-medium lg:relative lg:left-auto lg:bg-inherit`}
        >
          <li onClick={() => setCategory("shop")} className="navlist-class">
            <Link to="/">Shop</Link>{" "}
            {category === "shop" ? <hr className="navbar-hr" /> : <></>}
          </li>
          <li onClick={() => setCategory("mens")} className="navlist-class">
            <Link to="/mens">Men</Link>{" "}
            {category === "mens" ? <hr className="navbar-hr" /> : <></>}
          </li>
          <li onClick={() => setCategory("womens")} className="navlist-class">
            <Link to="/womens">Women</Link>{" "}
            {category === "womens" ? <hr className="navbar-hr" /> : <></>}
          </li>
          <li onClick={() => setCategory("kids")} className="navlist-class">
            <Link to="/kids">Kids</Link>{" "}
            {category === "kids" ? <hr className="navbar-hr" /> : <></>}
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8 lg:gap-11 absolute right-4 top-4 lg:relative lg:top-auto">
        {token ? (
          <button
            className="h-10 w-28 lg:w-32 lg:h-12 outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]"
            onClick={() => {
              localStorage.removeItem("auth-token");
              setToken(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button className="h-10 w-28 lg:w-32 lg:h-12 outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            <Link to="/login">Login</Link>
          </button>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="w-5 h-5 flex justify-center items-center lg:mt-[-35px] lg:ml-[-55px] mt-[-30px] ml-[-46px] rounded-xl text-sm bg-red-600 text-white">
          {getTotalCartItem()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
