import React, { useState, useEffect } from "react";
import NoteCard from "../../components/NotesCard/NotesCard";
import { withAuth } from "../../context/auth.context";
import NoteService from "../../services/note.service";
import { withRouter } from "react-router-dom";

function Home(props) {
  // user and logout come from context/auth.context.js
  // it can be use in any component because it is exported as AuthProvider
  // and wrap all the aplication in its root index.js
  const { user } = props;

  const [notes, setNotes] = useState();


  // useEffect is the first method to execute in a component
  useEffect(() => {
    const noteService = new NoteService();
    // get the user in seccion with withAuth user.id
    noteService
      .get()
      .then((res) => {
        setNotes({ notes: res.data });
      })
      .catch((err) => console.error(err));
  }, []);

  const displayNoteCards = () => {
    // you cant use .sort() in a object - first change it to an ARRAY
    let arrayNotes = Object.values(notes);
    // must change dates to a "date object" to be interpreted by .sort()
    let organizedNotes = [...arrayNotes].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );

    //   return organizedNotes.map((note) => {
    //     // if (note.user === props.user.id) {
    //     // if (note.user === props.match.params.email) {
    //     // if (note.user === session.data.user.email) {
    //       return <NoteCard key={note.id} {...note} />;
    //     }
    //   });
    // };

    return organizedNotes.map((note) => {
      return <NoteCard key={note.id} {...note} />;
    });
  };

  // this function is working properly
  // DONT TOUCH
  // function sortByChoosen(sortType) {
  //   return (a, b) => b[sortType] - a[sortType];
  // }

  return (
    <div>
      {!user ? (
        <div className="bg-gray-300 m-10 shadow-lg rounded-lg p-10">
          <h2 className="text-center text-xl sm:text-3xl font-bold text-yellow-600">
            Sign in and start to organize your agenda!
          </h2>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center m-5">
          {displayNoteCards()}
        </div>
      )}
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(Home));
