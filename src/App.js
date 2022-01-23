import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Note from "./pages/Note/Note";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditNote from "./pages/EditNote/EditNote";
import CreateNote from "./pages/CreateNote/CreateNote";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import AnounRoute from "./components/Routes/AnounRoute/AnounRoute";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import EditUser from "./pages/EditUser/EditUser";

export default function App() {
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
