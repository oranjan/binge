Food Ordering Website
Live url : https://binge-food.netlify.app/

This project uses React as Js Library,api of Swiggy,taiwind as css framework, for routing reac-router-dom is used
- used hooks such as useState   to create search,filter functionalites , useEffect  to fetch data from Swiggy's API,
- React-router-dom v6 library is used for routing pages like navigation menu , restaurant menu pages
- useParams hook,createBrowser Router,Outlet,RouterProvider are applied for routing in pages 
- parcel was used for bundling instead of Create-react-app to see the behind the scenes of how file structure and   React works ,the folder struture was self populated since parcel doesn't provide any 
- To optimise code 2 custom hooks are also created one to check if  internet is avaliable to page or not 
  and one to abstract the logic of fecthing menu data for each restaurant
- Also applied lazy loading(to reduce bundle size) for the sake of learning although not needed in small web apps
Features
Browse a wide range of restaurants and their menus.
Search for specific dishes.
Filter out top restaurants
Add items to the cart.(still in development)
Happy food ordering! 🍔🍕🍣