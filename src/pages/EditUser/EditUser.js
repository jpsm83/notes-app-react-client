import React from "react";
import { withRouter } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: "",
        photo: "",
      },
      buttonType: "Update User",
      editUser: true,
      errors: {
        username: null,
        email: null,
        password: null,
        photo: null,
      },
    };
  }

  // componentDidMount is the first method to execute in a component
  componentDidMount(){
    // props.user comes from context/auth.context.js - withAuth
    this.setState({ fields: this.props.user })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      // props.edit comes from context/auth.context.js - withAuth
      this.props.edit(this.state.fields);
      this.goBack();
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

  goBack() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="flex justify-center">
        <UserForm
          goBack={() => this.goBack()}
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
export default withAuth(withRouter(EditUser));
