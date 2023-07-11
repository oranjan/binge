import React from "react";
import ReactDOM from "react-dom/client";


const Header =()=>{
    return(
        <div>
        <img id="binge-logo-img" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/rwgpylzz1lobkqnkfy7t" alt="binge app logo" />
        <input type="text" placeholder="Enter query" />
        <button>Search</button>
        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="user icon" />
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);
