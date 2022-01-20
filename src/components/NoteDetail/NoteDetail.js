import React, { useState } from "react";
import { StarIcon, CheckIcon } from "@heroicons/react/solid";
import { Link, withRouter, useHistory } from "react-router-dom";
import NoteService from "../../services/note.service";
import moment from "moment";
import { withAuth } from "../../context/auth.context";

function NoteDetail({ title, id, description, priority, done, dueDate }) {
  // connection with NoteService to be able to use all it services
  // note.service.js is the bridge to connect frontend with backend
  const noteService = new NoteService();

  const [isPriority, setIsPriority] = useState(priority);
  const [isDone, setIsDone] = useState(done);

  // using history hook to push to another page from the browser history
  const history = useHistory();

  const deleteNote = async () => {
    try {
      await noteService.deleteOne(id)
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDone = () => {
    noteService.updateOne(id, setIsDone(!isDone))
      .then(() => {
        console.log('Updated');
      })
      .catch(err => console.error(err))
  }

  const togglePriority = () => {
    noteService.updateOne(id, setIsPriority(!isPriority))
      .then(() => {
        console.log('Updated');
      })
      .catch(err => console.error(err))
  }

  // const toggleOptions = async (keyType, option, setOption) => {
  //   setOption((option = !option));
  //   try {
  //     await fetch(`http://localhost:3000/api/todos/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ [keyType]: `${option}` }),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
        <div className="flex flex-col bg-blue-200 shadow-lg m-10 space-y-4 rounded-lg p-5">
          <div className="flex space-x-6 justify-center p-3 bg-gray-100 rounded-lg">
            <p
              onClick={() =>
                togglePriority()
              }
            >
              {isPriority ? (
                <StarIcon className="h-7 text-yellow-500" />
              ) : (
                <StarIcon className="h-7 text-gray-400" />
              )}
            </p>
            <p className="text-md sm:text-lg italic font-bold text-gray-500">
              Due Date: {moment(new Date(dueDate)).format("DD-MMM-yyyy")}
            </p>
            <p onClick={() => toggleDone()}>
              {isDone ? (
                <CheckIcon className="h-7 text-green-600" />
              ) : (
                <CheckIcon className="h-7 text-gray-400" />
              )}
            </p>
          </div>
          <div className="flex flex-col justify-items-start p-3 bg-gray-100 rounded-lg">
            <p className="text-xl text-yellow-800 sm:text-3xl font-bold mb-3">
              {title}
            </p>
            <p className="text-md sm:text-lg">
            {description}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="shadow-md items-center text-white text-center justify-center px-6 py-1 hover:shadow-xl bg-yellow-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              onClick={() => history.push("/")}
            >
              Back to To Dos
            </button>
            <button
              className="shadow-md items-center text-white text-center justify-center px-6 py-1 hover:shadow-xl bg-red-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
              onClick={deleteNote}
            >
              Delete
            </button>
            <button
              className="shadow-md items-center text-white text-center justify-center px-6 py-1 hover:shadow-xl bg-green-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg">
              <Link to={`/${id}/update`}>Edit To Do</Link>
            </button>
          </div>
        </div>
      
    </div>
  );
}
// withRouter allow us to use history.push

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(NoteDetail));
