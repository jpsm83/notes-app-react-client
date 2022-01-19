import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function NoteForm(props) {
  const { form, handleChange, handleSubmit } = props;
const history = useHistory()

  return (
    <div>
      <div className="flex flex-col bg-blue-200 m-10 shadow-lg space-y-4 rounded-lg p-5">
        <form
          className="flex flex-col p-5 space-y-3 bg-gray-100 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-end">
            <label className="font-bold text-yellow-800" htmlFor="dueDate">
              Date:{" "}
            </label>
            <input
              className="text-yellow-800 outline-0 ml-2 rounded-lg px-2"
              type="date"
              name="dueDate"
              value={moment(new Date(form.dueDate)).format("YYYY-MM-DD")}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start w-full">
            <label className="font-bold text-yellow-800" htmlFor="title">
              Title:{" "}
            </label>
            <input
              className="text-yellow-800 ml-2 outline-0 rounded-lg px-2 flex-grow"
              type="text"
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start w-full">
            <label className="font-bold text-yellow-800" htmlFor="description">
              Description:{" "}
            </label>
            <input
              className="text-yellow-800 ml-2 outline-0 rounded-lg px-2 flex-grow"
              type="text"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="shadow-md text-white w-40 text-center justify-center px-6 py-1 hover:shadow-xl bg-green-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              type="submit"
            >
              Update
            </button>
            <button
              className="shadow-md text-white w-40 text-center justify-center px-6 py-1 hover:shadow-xl bg-red-800 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              onClick={() => history.push(`/${form.id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
