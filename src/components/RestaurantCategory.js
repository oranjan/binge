import { useState } from "react"
import ItemCards from "./ItemCards"

const RestaurantCategory = ({ data, setIsVisible, isVisible, toggleState }) => {
    // console.log(data);

    const handleClick = () => {
        setIsVisible()
    }

    return (
        <div className="p-8 py-12">

            <div className="py-2 pb-4 border-b-4 border-gray-200 flex justify-between font-semibold text-md font-sans text-gray-700">
                <p >{data.title} ({data.itemCards.length})</p>
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
