import React from "react";

export default function RecipeForm(props) {
  const {
    handleSubmit,
    handleChange,
    errors,
    fields,
    isValid,
    buttonType,
    goBack,
  } = props;

  return (
    <div className="m-6">
      <div className="flex mx-auto flex-col shadow-2xl rounded-lg max-w-5xl p-3 sm:p-6">
        <form className="space-y-4" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-col">
            <label className="labels" htmlFor="dishName">
              Dish Name:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="dishName"
              value={fields.dishName}
              onChange={(event) => handleChange(event)}
            />
            {errors.dishName && (
              <p className="errorInputs sm:text-md">{errors.dishName}</p>
            )}
          </div>

          <div className="flex justify-between space-x-2">
            <div className="flex flex-col">
              <label className="labels" htmlFor="cousine">
                Cousine:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="cousine"
                value={fields.cousine}
                onChange={(event) => handleChange(event)}
              />
              {errors.cousine && (
                <p className="errorInputs sm:text-md">{errors.cousine}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="type">
                Type:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="type"
                value={fields.type}
                onChange={(event) => handleChange(event)}
              />
              {errors.type && (
                <p className="errorInputs sm:text-md">{errors.type}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="prepTime">
                Prep Time:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="prepTime"
                value={fields.prepTime}
                onChange={(event) => handleChange(event)}
              />
              {errors.prepTime && (
                <p className="errorInputs sm:text-md">{errors.prepTime}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="labels" htmlFor="servings">
                Servings:
              </label>
              <input
                className="inputs sm:text-md"
                type="number"
                name="servings"
                value={fields.servings}
                onChange={(event) => handleChange(event)}
              />
              {errors.servings && (
                <p className="errorInputs sm:text-md">{errors.servings}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="image">
              Image:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="image"
              value={fields.image}
              onChange={(event) => handleChange(event)}
            />
            {errors.image && (
              <p className="errorInputs sm:text-md">{errors.image}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="ingredients">
              Ingredients:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="ingredients"
              value={fields.ingredients}
              onChange={(event) => handleChange(event)}
            />
            {errors.ingredients && (
              <p className="errorInputs sm:text-md">{errors.ingredients}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="preparation">
              Preparation:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="preparation"
              value={fields.preparation}
              onChange={(event) => handleChange(event)}
            />
            {errors.preparation && (
              <p className="errorInputs sm:text-md">{errors.preparation}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="howToCook">
              How To Cook:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="howToCook"
              value={fields.howToCook}
              onChange={(event) => handleChange(event)}
            />
            {errors.howToCook && (
              <p className="errorInputs sm:text-md">{errors.howToCook}</p>
            )}
          </div>

          <div className="text-center space-x-6">
            <button
              className="cursor-pointer shadow-md bg-green-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              disabled={!isValid()}
              type="submit"
            >
              {buttonType}
            </button>
            <button
              onClick={() => goBack()}
              className="cursor-pointer shadow-md bg-red-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              type="submit"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
