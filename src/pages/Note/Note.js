import React, { Component } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import { withAuth } from "../../context/auth.context";
import NoteService from "../../services/note.service";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
    this.noteService = new NoteService();
  }


  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    this.noteService
      .getOne(this.props.match.params.id)
      .then((res) => {
        this.setState({ note: res.data });
      })
      .catch((err) => console.error(err));
  }

  render(){
  return (
    <div>
      <main className="flex max-w-7xl mx-auto mt-3">
        <div className="flex flex-col w-full">
          <NoteDetail {...this.state.note} />
        </div>
      </main>
    </div>
  );
}
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Note)
