/* eslint-disable array-callback-return */
import React from "react";
import NotesCard from "../NotesCard/NotesCard";
import NoteService from "../../services/note.service";
import { withAuth } from "../../context/auth.context";

class NotesFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    // connection with NotesService to be able to use all it services
    // note.service.js is the bridge to connect frontend with backend
    this.noteService = new NoteService();
  }

  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    // get the user in seccion with withAuth user.id
    this.noteService
      .get()
      .then((res) => {
        this.setState({ notes: res.data });
      })
      .catch((err) => console.error(err));
  }

  //never update state inside render (setState), it causes infinity loop
  displayNotes() {
    return this.state.notes.map((note) => {
      if (note.chef === this.props.user.id) {
        return <NotesCard key={note.id} {...note} />;
      }
    });
  }

  render() {
    return (
      <div className="flex flex-wrap justify-between p-1.5">
        {this.displayNotes()}
      </div>
    );
  }
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(NotesFeed);
