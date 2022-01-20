import React, { useState, useEffect } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import { withAuth } from "../../context/auth.context";
import NoteService from "../../services/note.service";
import { withRouter } from "react-router-dom";

function Note(props) {
  // user and logout come from context/auth.context.js
  // it can be use in any component because it is exported as AuthProvider
  // and wrap all the aplication in its root index.js

  const [note, setNote] = useState();


  // useEffect is the first method to execute in a component
  useEffect(() => {
    const noteService = new NoteService();
    noteService
      .getOne(props.match.params.id)
      .then((res) => {
        setNote({ note: res.data });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <main className="flex max-w-7xl mx-auto mt-3">
        <div className="flex flex-col w-full">
          <NoteDetail {...note} />
        </div>
      </main>
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(Note));
