import React from "react";
import AuthService from "../services/auth.service";

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isLoggedin: false,
    isLoading: true,
    user: null,
  };

  authService = new AuthService();

  // componentDidMount is ALWAYS the first function to execute
  async componentDidMount() {
    try {
      const response = await this.authService.isLoggedin();
      if (response) {
        this.setState({
          isLoggedin: true,
          isLoading: false,
          user: response.data,
        });
      }
    } catch (err) {
      this.setState({ isLoggedin: false, isLoading: false, user: null });
    }
  }

  // data are the inputs from form signup
  signup = async (data) => {
    try {
      const response = await this.authService.signup(data);
      if (response) {
        this.setState({ isLoggedin: true, user: response.data });
      }
    } catch (err) {
      this.setState({ isLoggedin: false, user: null });
    }
  };

  // data are the fields from Login
  login = (data) => {
    this.authService
      .login(data)
      .then((response) =>
        this.setState({ isLoggedin: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedin: false, user: null }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((error) => console.error(error));
  };

  edit = (data) => {
    this.authService
      .edit(data)
      .then((response) => this.setState({ ...this.state, user: response.data }))
      .catch((error) => console.error(error));
  };

  render() {
    const { isLoggedin, isLoading, user } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <Provider
        value={{
          isLoading,
          isLoggedin,
          user,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          edit: this.edit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// HOC - High Order Component that converts regular component into Consumer

// WrappedComponent are any component that needs to connect to this context (consumer component)

// once a component connected to this context it can use all the methods for
// authentication (provider) - isLoading, isLoggedin, user, signup, login, logout, edit
const withAuth = (WrappedComponent) => {
  return function (props) {
    return (
      <Consumer>
        {/* value comes from provider return */}
        {(value) => {
          const { isLoading, isLoggedin, user, signup, login, logout, edit } =
            value;

          // We pass the context props and also the props from the component that are recieving the context
          return (
            <WrappedComponent
              isLoggedin={isLoggedin}
              isLoading={isLoading}
              user={user}
              signup={signup}
              login={login}
              logout={logout}
              edit={edit}
              {...props}
            />
          );
        }}
      </Consumer>
    );
  };
};

export { AuthProvider, withAuth };
