import React from "react";

export default function RecipeForm(props) {
  const {
    handleSubmit,
    handleChange,
    errors,
    fields,
    signup,
    editUser,
    isValid,
    buttonType,
    goBack,
  } = props;

  return (
    <div className="m-6">
      <div className="flex mx-auto flex-col shadow-2xl rounded-lg max-w-5xl p-3 sm:p-6">
        <form className="space-y-4" onSubmit={(event) => handleSubmit(event)}>
          {(signup || editUser) && (
            <div className="flex flex-col">
              <label className="labels" htmlFor="username">
                Username:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="username"
                value={fields.username}
                onChange={(event) => handleChange(event)}
              />
              {errors.username && (
                <p className="errorInputs sm:text-md">{errors.username}</p>
              )}
            </div>
          )}

          {editUser && (
            <div className="flex flex-col">
              <label className="labels" htmlFor="photo">
                Photo:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="photo"
                value={fields.photo}
                onChange={(event) => handleChange(event)}
              />
              {errors.photo && (
                <p className="errorInputs sm:text-md">{errors.photo}</p>
              )}
            </div>
          )}

          <div className="flex flex-col">
            <label className="labels" htmlFor="email">
              Email:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="email"
              value={fields.email}
              onChange={(event) => handleChange(event)}
            />
            {errors.email && (
              <p className="errorInputs sm:text-md">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="password">
              Password:
            </label>
            <input
              className="inputs sm:text-md"
              type="password"
              name="password"
              value={fields.password}
              onChange={(event) => handleChange(event)}
            />
            {errors.password && (
              <p className="errorInputs sm:text-md">{errors.password}</p>
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
