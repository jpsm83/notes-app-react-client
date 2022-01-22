/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";
import { userValidators } from "../../components/Validators/Validators";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: "",
      },
      buttonType: "Update",
      errors: {
        username: null,
        email: null,
        password: null,
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      // props.edit comes from context/auth.context.js - withAuth
      this.props.edit(this.state.fields);
      this.props.history.push("/");
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: userValidators[name](value),
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
        <UserForm
          isValid={() => this.isValid()}
          handleSubmit={(e) => this.handleSubmit(e)}
          handleChange={(e) => this.handleChange(e)}
          {...this.state}
        />
      </div>
    );
  }
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(EditUser);
