import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import NoteService from "../../services/note.service";
import NoteForm from "../../components/NoteForm/NoteForm";
import { noteValidators } from "../../components/Validators/Validators";
import { Redirect } from "react-router-dom";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: "",
        dueDate: "",
        description: "",
      },
      buttonType: "Create",
      errors: {
        title: null,
        dueDate: null,
        description: null,
      },
    };
    // connection with NoteService to be able to use all it services
    // note.service.js is the bridge to connect frontend with backend
    this.noteService = new NoteService();
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.createNote();
    }
  }

  createNote() {
    this.noteService
      .create(this.state.fields)
      .then(() => {
        this.props.history.push("/")
      })
      .catch((error) => console.log(error));
      <Redirect to="/" />
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: noteValidators[name](value),
      },
    });
  }

  isValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some((key) => errors[key]);
  }

  render() {
    return (
      <div className="flex justify-center">
        <NoteForm
          isValid={() => this.isValid()}
          handleSubmit={(e) => this.handleSubmit(e)}
          handleChange={(e) => this.handleChange(e)}
          buttonType={this.buttonType}
          {...this.state}
        />
      </div>
    );
  }
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(CreateNote);
