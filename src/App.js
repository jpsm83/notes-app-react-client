import Home from "./pages/Home/Home";
import Note from "./pages/Note/Note";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditNote from "./pages/EditNote/EditNote";
import CreateNote from "./pages/CreateNote/CreateNote";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import AnounRoute from "./components/Routes/AnounRoute/AnounRoute";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import EditUser from "./pages/EditUser/EditUser";
import { withAuth } from "./context/auth.context";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <AnounRoute exact path="/signup" component={Signup} />
        <AnounRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/create-note" component={CreateNote} />
        <Route exact path="/note/:id" component={Note} />
        <PrivateRoute exact path="/edit-user/:id" component={EditUser} />
        <PrivateRoute exact path="/edit-note/:id" component={EditNote} />
      </Switch>

      <Footer />
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(App);
