import React, { Component } from "react";
import NoteService from "../../services/note.service";
import NoteForm from "../../components/NoteForm/NoteForm";
import { noteValidators } from "../../components/Validators/Validators";

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: "",
        dueDate: "",
        description: "",
      },
      buttonType: "Update",
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

  componentDidMount() {
    const id = this.props.match.params.id;
    this.noteService
      .getOne(id)
      .then((response) => {
        // axios gives the response in '.data'
        this.setState({ fields: { ...response.data } });
      })
      .catch((error) => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.updateNote();
    }
  }

  updateNote() {
    const id = this.props.match.params.id;
    const uploadedData = this.state.fields;
    this.noteService
      .updateOne(id, uploadedData)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
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
          {...this.state}
        />
      </div>
    );
  }
}
