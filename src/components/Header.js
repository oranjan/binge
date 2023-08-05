import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            src= {LOGO_URL}
            alt=" logo-img"
            
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export  default Header;