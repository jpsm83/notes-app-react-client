import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link, withRouter, useHistory } from "react-router-dom";
import RecipeService from "../../services/recipe.service";
import { withAuth } from "../../context/auth.context";

function RecipeDetail({
  id,
  dishName,
  cousine,
  chef,
  servings,
  type,
  image,
  ingredients,
  prepTime,
  preparation,
  howToCook,
  user,
}) {
  // connection with RecipeService to be able to use all it services
  // recipe.service.js is the bridge to connect frontend with backend
  const recipeService = new RecipeService();

  // using history hook to push to another page from the browser history
  const history = useHistory();

  const recipeOwner = () => {
    if (user && user.id === chef) {
      return true;
    }
  };

  const deleteRecipe = () => {
    recipeService
      .deleteOne(id)
      .then(() => {
        // you need export the component withRouter to be able to use history.push
        // using history hook to push to another page
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col shadow-2xl rounded-lg w-200 my-6 mx-3">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex justify-center items-center flex-shrink-0 rounded-t-lg overflow-hidden">
          <img className="h-60" src={image} alt={dishName} />
        </div>

        <div className="flex flex-col justify-between w-full ml-3 sm:ml-6">
          <p className="text-lg sm:text-2xl font-bold text-red-700 border-b-2">
            {dishName}
          </p>
          <button className="flex text-sm sm:text-md text-blue-700 justify-end">
            Create by {chef}
          </button>
          <li className="text-sm sm:text-md text-gray-700 font-bold">{type}</li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {cousine} Dish
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {servings} Servings
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            Prep time: {prepTime}
          </li>
        </div>
        <button className="flex align-top">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
      <div className="border-2 rounded-lg m-3 mt-4 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          INGREDIENTS
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {ingredients}
        </p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          PREPARATION
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {preparation}
        </p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          HOW TO COOK
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {howToCook}
        </p>
      </div>

      <div className="flex space-x-6 justify-center mb-6 mt-4">
        {recipeOwner() && (
          <div className="flex space-x-6">
            <Link to={`/edit-recipe/${id}`}>
              <button className="typesCousine text-white bg-green-800">
                Edit
              </button>
            </Link>
            <Link to="/">
              <button
                className="typesCousine text-white bg-red-800"
                onClick={() => deleteRecipe()}
              >
                Delete
              </button>
            </Link>
          </div>
        )}
        <Link to="/">
          <button className="typesCousine text-white bg-yellow-600">
            Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
// withRouter allow us to use history.push

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(RecipeDetail));
