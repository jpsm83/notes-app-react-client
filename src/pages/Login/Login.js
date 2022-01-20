import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

function Login(props) {
  const [form, setForm] = useState({ props });
  const [errors, setErrors] = useState(null);
  const [buttonType] = useState("Login");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let errs = validate();
    setErrors(errs);
    if (!errors) {
      // props.login comes from context/auth.context.js - withAuth
      props.login(this.state.fields);
      history.push("/");
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
    if (!form.user) {
      err.user = "user is required";
    }
    if (!form.email) {
      err.email = "email is required";
    }
    if (!form.password) {
      err.password = "Password is required";
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

  return (
    <div className="flex justify-center">
      <UserForm
        // isValid={() => isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        buttonType={buttonType}
        {...form}
      />
      <button onClick={() => goBack()}>Back</button>
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(withRouter(Login));
