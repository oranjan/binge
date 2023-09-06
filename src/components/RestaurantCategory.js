import { useState } from "react"
import ItemCards from "./ItemCards"

const RestaurantCategory = ({ data }) => {
    // console.log(data);

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="p-8 py-12">

            <div className="py-2 border-b-4 border-gray-200 flex justify-between font-semibold text-md font-sans text-gray-700">
               <p className="pb-8">{data.title} ({data.itemCards.length})</p> 
                <p onClick={handleClick} className="cursor-pointer">⬇️</p>
            </div>
            {isVisible ?
                <div className="" >
                    {data.itemCards.map((item) => {
                        return <ItemCards key={item?.card?.info?.id} {...item?.card?.info} />
                    }
                    )}
                </div>
                : ""}
        </div>

    )
}

export default RestaurantCategory
