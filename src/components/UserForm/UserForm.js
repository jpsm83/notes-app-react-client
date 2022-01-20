import React from "react";
import { withAuth } from "../../context/auth.context";

function UserForm(props) {
  const {
    handleSubmit,
    handleChange,
    errors,
    fields,
    signup,
    edit,
    login,
    isValid,
    buttonType,
  } = props;

  return (
    <div>
      <div className="flex flex-col bg-blue-200 m-10 shadow-lg space-y-4 rounded-lg p-5">
        <form
          className="flex flex-col p-5 space-y-3 bg-gray-100 rounded-lg"
          onSubmit={handleSubmit}
        >
          {(!login && signup || edit) && (
          <div className="flex justify-start w-full">
            <label className="font-bold text-yellow-800" htmlFor="username">
              Username:{" "}
            </label>
            <input
              className="text-yellow-800 ml-2 outline-0 rounded-lg px-2 flex-grow"
              type="text"
              value={fields.username}
              name="username"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="errorInputs sm:text-md">{errors.username}</p>
            )}
          </div>
          )}
          <div className="flex justify-start w-full">
            <label className="font-bold text-yellow-800" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="text-yellow-800 ml-2 outline-0 rounded-lg px-2 flex-grow"
              type="text"
              value={fields.email}
              name="email"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="errorInputs sm:text-md">{errors.email}</p>
            )}
          </div>
          <div className="flex justify-start w-full">
            <label className="font-bold text-yellow-800" htmlFor="password">
              Password:{" "}
            </label>
            <input
              className="text-yellow-800 ml-2 outline-0 rounded-lg px-2 flex-grow"
              type="password"
              value={fields.password}
              name="password"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="errorInputs sm:text-md">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              className="shadow-md text-white w-40 text-center justify-center px-6 py-1 hover:shadow-xl bg-green-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              type="submit"
              disabled={!isValid()}
            >
              {buttonType}
            </button>
            <button
              className="shadow-md text-white w-40 text-center justify-center px-6 py-1 hover:shadow-xl bg-red-800 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              onClick={() => props.history.push("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(UserForm);
