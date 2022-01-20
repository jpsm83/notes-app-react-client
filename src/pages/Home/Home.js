import React, { Component } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import { withAuth } from "../../context/auth.context";
import NoteService from "../../services/note.service";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    // connection with RecipeService to be able to use all it services
    // recipe.service.js is the bridge to connect frontend with backend
    this.noteService = new NoteService();
  }

  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    this.noteService
      .get()
      .then((res) => {
        this.setState({ notes: res.data });
      })
      .catch((err) => console.error(err));
  }

  displayNoteCards() {
    let organizedNotes = [...this.state.notes].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
    return organizedNotes.map((note) => {
      return (
        <NoteCard
          key={note.id + Math.floor(Math.random() * 10000000)}
          {...note}
        />
      );
    });
  }

  // this function is working properly
  // DONT TOUCH
  // function sortByChoosen(sortType) {
  //   return (a, b) => b[sortType] - a[sortType];
  // }

  render() {
    // user come from context/auth.context.js
    // it can be use in any component because it is exported as AuthProvider
    // and wrap all the aplication in its root index.js
    const { user } = this.props;
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
            {this.displayNoteCards()}
          </div>
        )}
      </div>
    );
  }
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Home);
