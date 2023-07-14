import React from "react";
import ReactDOM from "react-dom/client";

const Applayout=()=>{
    return(
    <>
     <Header/>
     <Search/>
     <Body/>
    </>

   
    
    

    )

}

const  Header=()=>{
    return(
<div className="header">
        <div className="logo">
            <img src="https://th.bing.com/th/id/OIG.uqrj_KShADUAYupkgviS?pid=ImgGn" alt=" logo-img" />
        </div>

        <div className="nav-items">
            <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
            </ul> 
        </div>
</div>


    )

}

const Search=()=>{
return(
    <div>
        <div className="search-btn">
            <button>Search</button>
        </div>
    </div>

)

}

const Body =()=>{
return(

<div className="body">

<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>

</div>


)


}

const RestaurantCard=()=>{
    return(
        <div className="restaurant-card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/amosptjbyazii9ieelck" alt="" />
            <h2>Rinku's Bawarchi</h2>

        </div>


    )

}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
