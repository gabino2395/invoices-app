import React from "react";
import "./Card.css";
const Card = ({ description, title, price, image }) => {
  return (
      <div class="w-[250px] height-card rounded overflow-hidden shadow-lg">
        <img class="w-full h-[120px]" src={image} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          {/* <p class="text-gray-700 text-base">{description}</p> */}
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${price}
          </span>
          {/* <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Stock {price}
          </span> */}
        </div>
      </div>
    
  );
};

export default Card;
