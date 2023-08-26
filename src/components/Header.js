import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")

  return (
    <div className="flex justify-between border-gray-20  shadow-lg">
      <div className="logo">
        <img
          className="w-24 rounded-sm"
          src={LOGO_URL}
          alt=" logo-img"

        />
      </div>

      <div className="flex gap-24  items-center">
        <ul className="flex gap-24 justify-between p-6 mr-24 font-semibold">
          <li className=" hover:text-gray-400 "> <Link to={"/"}>Home</Link></li>
          <li className=" hover:text-gray-400"> <Link to={"/contact"}>Contact</Link></li>
          <li className=" hover:text-gray-400"> <Link to={"/about"}>About</Link></li>
          <li className=" hover:text-gray-400"> <Link to={"/cart"}>Cart</Link> </li>


        </ul>
        <button className=" hover:text-gray-400  font-extralight px-16 " onClick={

          () => loginBtn === "Login" ? setLoginBtn("Logout") :
            setLoginBtn("Login")} >{loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;