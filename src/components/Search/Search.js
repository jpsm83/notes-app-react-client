import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Search(props) {
  return (
    <div className="bg-yellow-400 hover:bg-yellow-500 flex-grow flex max-w-lg items-center h-10 rounded-lg cursor-pointer">
      <input
        onChange={props.handleSearch}
        className="p-2 border-2 border-gray-300 border-r-0 h-full w-6 flex-grow rounded-l-lg flex-shrink focus:outline-none px-4"
        type="text"
        placeholder="Dish Name"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
}
