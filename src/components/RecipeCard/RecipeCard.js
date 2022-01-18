import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function RecipesCard({
  id,
  dishName,
  image,
  prepTime,
  servings,
  chef,
}) {
  return (
    <div className="flex flex-grow shadow-lg flex-col m-1.5 rounded-lg w-60 hover:shadow-2xl hover:scale-105 transition transform duration-200 ease-out">
      <Link to={`/recipe/${id}`}>
        <h4 className="text-sm sm:text-lg m-2 font-bold text-red-700 text-center">
          {dishName}
        </h4>
        <div className="flex justify-center items-center h-44 overflow-hidden">
          <img
            className="min-w-full min-h-full shrink-0"
            src={image}
            alt={dishName}
          />
        </div>
      </Link>
      <div className="flex justify-between m-2 items-center">
        <div>
          <p className="text-xs sm:text-sm text-blcak">Ready in {prepTime}</p>
          <p className="text-sm sm:text-md font-bold text-blcak">
            {servings} Servings
          </p>
        </div>
        <button className="mt-auto button">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
      <p className="text-xs sm:text-md text-center mb-2 text-gray-500 border-t-2">
        Create by {chef}
      </p>
    </div>
  );
}
