import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";
import { userValidators } from "../../components/Validators/Validators";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: "",
      },
      buttonType: "Login",
      errors: {
        email: null,
        password: null,
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      // props.login comes from context/auth.context.js - withAuth
      this.props.login(this.state.fields);
      this.props.history.push("/");
    }
  };

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
        <div className="m-10 flex flex-shrink">
          <UserForm
            isValid={() => this.isValid()}
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChange={(e) => this.handleChange(e)}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedin, user, signup, login, logout, edit
export default withAuth(Login);
