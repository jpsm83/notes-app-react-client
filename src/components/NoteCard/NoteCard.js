import React from "react";
import moment from "moment";
import { StarIcon, CheckIcon } from "@heroicons/react/solid";
import NoteService from "../../services/note.service";
import { withAuth } from "../../context/auth.context";
import { Link } from "react-router-dom";

function NoteCard({ title, done, priority, id, dueDate, refreshState }) {
  const noteService = new NoteService();

  const deleteNote = () => {
    noteService
      .deleteOne(id)
      .then(() => {
        refreshState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePriority = () => {
    noteService
      .updateOne(id, { priority: !priority })
      .then(() => {
        console.log("priority updated");
        refreshState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleDone = () => {
    noteService
      .updateOne(id, { done: !done })
      .then(() => {
        console.log("done updated");
        refreshState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex cursor-pointer justify-start w-80 mx-5 bg-gray-300 shadow-lg hover:shadow-xl hover:bg-blue-200 m-3 rounded-lg p-2">
      <h1 className="text-4xl mr-2 sm:text-5xl bg-gray-100 font-bold text-yellow-600 rounded-lg p-1 flex justify-center items-center">
        {moment(new Date(dueDate)).format("DD")}
      </h1>
      <div className="text-md sm:text-lg flex flex-col w-full">
        <div className="flex justify-between">
          <p className="font-bold text-gray-700">
            {moment(new Date(dueDate)).format("MMM-yyyy")}
          </p>
          <div className="flex">
            <p onClick={() => togglePriority()}>
              {priority ? (
                <StarIcon className="h-5 text-yellow-500" />
              ) : (
                <StarIcon className="h-5 text-gray-400" />
              )}
            </p>
            <p onClick={() => toggleDone()}>
              {done ? (
                <CheckIcon className="h-5 text-green-600" />
              ) : (
                <CheckIcon className="h-5 text-gray-400" />
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/note/${id}`}>
            <div>
              <h2 className="text-md text-yellow-800 sm:text-lg">{title}</h2>
            </div>
          </Link>
          {done && (
            <button
              className="shadow-md items-center text-white text-center justify-center px-6 hover:shadow-xl bg-red-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              onClick={deleteNote}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(NoteCard);
