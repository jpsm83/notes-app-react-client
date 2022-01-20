/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import NoteService from "../../services/note.service";
import NoteForm from "../../components/NoteForm/NoteForm";

function EditNote(props) {
  const [form, setForm] = useState({ props });
  const [errors, setErrors] = useState(null);
  const [buttonType] = useState("Update");
  const history = useHistory();

  // connection with NoteService to be able to use all it services
  // note.service.js is the bridge to connect frontend with backend
  const noteService = new NoteService();

  // useEffect is the first method to execute in a component
  useEffect(() => {
    const id = props.match.params.id;
    noteService.getOne(id).then(() => {
      try {
        setForm({ form: res.data });
      } catch (error) {
        console.log(error);
      }
    })
  }, [])

  //   const componentDidMount = () => {
  //     const id = props.match.params.id;
  //     noteService.getOne(id)
  //   .then(response => {
  //     // axios gives the response in '.data'
  //     console.log(response.data);
  //     setForm({ form: response.data });
  //   })
  //   .catch(err => console.error(err))
  // }

  function handleSubmit(event) {
    event.preventDefault();
    let errs = validate();
    setErrors(errs);
    updateNote();
  }

  const updateNote = () => {
    const id = props.match.params.id;
    const uploadData = form;
    if (Object.keys(errors).length === 0) {
      try {
        noteService.updateOne(id, uploadData);

        console.log("updated");
        // you need export the component withRouter to be able to use history.push

        history.push(`/notes/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    if (!form.dueDate || form.dueDate < Date.now()) {
      err.dueDate = "Due date is required";
    }
    return err;
  };

  // isValid() {
  //   const { errors } = this.state;
  //   return !Object.keys(errors).some((key) => errors[key]);
  // }

  const goBack = () => {
    history.push("/");
  };

  // componentDidMount()

  return (
    <div className="flex justify-center">
      <NoteForm
        // isValid={() => this.isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        buttonType={buttonType}
        {...form}
      />
      <button onClick={() => goBack()}>Back</button>
    </div>
  );
}
// withRouter allow us to use history.push

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withRouter(EditNote);
