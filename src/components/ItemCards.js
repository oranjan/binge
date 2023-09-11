import { IMG_URL } from "../utils/constants.js";


const ItemCards = (data) => {
    // console.log(data)
    const { name, imageId, price, isVeg, defaultPrice } = data;
    return (
        <div className="flex justify-between items-center">
            <div className="w-9/12 py-8 text-gray-700 border-b font-medium">
                <span className="text-lg">{isVeg ? "🌱" : "🍗"}</span>
                <p>{name}</p>
                ₹{price ? price / 100 : defaultPrice / 100}
            </div>
            <div className="w-3/12 ">
                
                <img className="rounded-sm " src={IMG_URL+imageId} alt="" />
                <button className="px-0.5 text-white bg-black rounded-sm absolute ">Add+</button>
            </div>


        </div>

    )
}

export default ItemCards
