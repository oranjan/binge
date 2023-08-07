import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt=" logo-img"

        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
          <button className="login-btn" onClick={
            () => loginBtn === "Login" ? setLoginBtn("Logout") :
              setLoginBtn("Login")} >{loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;