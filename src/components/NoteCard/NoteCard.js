import React from "react";
import moment from "moment";
import { StarIcon, CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import NoteService from "../../services/note.service";
import { withAuth } from "../../context/auth.context";
import { Link, withRouter, useHistory } from "react-router-dom";

function NoteCard({ title, id, priority, done, dueDate }) {

  const [isPriority, setIsPriority] = useState(priority);
  const [isDone, setIsDone] = useState(done);

  const history = useHistory();
  const noteService = new NoteService()

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
            <p
              onClick={() =>
                togglePriority()
              }
            >
              {isPriority ? (
                <StarIcon className="h-5 text-yellow-500" />
              ) : (
                <StarIcon className="h-5 text-gray-400" />
              )}
            </p>
            <p onClick={() => toggleDone()}>
              {isDone ? (
                <CheckIcon className="h-5 text-green-600" />
              ) : (
                <CheckIcon className="h-5 text-gray-400" />
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
        <Link href={`/${id}`}>
          <div>
            <h2 className="text-md text-yellow-800 sm:text-lg">{title}</h2>
          </div>
        </Link>
        {isDone && <button className="shadow-md items-center text-white text-center justify-center px-6 hover:shadow-xl bg-red-700 hover:scale-105 transition transform duration-200 ease-out rounded-lg"
 onClick={deleteNote}>Delete</button>}
 </div>
      </div>
    </div>
  );
}
// withRouter allow us to use history.push

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(NoteCard));
