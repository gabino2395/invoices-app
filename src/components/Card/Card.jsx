import React from "react";
import "./Card.css";
const Card = ({ description, title, price, image }) => {
  return (
    <div class="w-[250px] height-card rounded overflow-hidden shadow-lg">
      <div class="contenedor-img ">
        <img src={image} class="imagen-fondo w-full h-[200px]" alt="img" />

        <div class="contenedor-texto">
          <p className=" texto long-name">{title}</p>
        </div>
      </div>
      <div class="px-6 py-4"></div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block  bg-green-400  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}
        </span>
        <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Stock {price}
        </span>
      </div>
    </div>
  );
};

export default Card;
