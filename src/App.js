import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import AnounRoute from "./components/Routes/AnounRoute/AnounRoute";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import EditUser from "./pages/EditUser/EditUser";
import { withAuth } from "./context/auth.context";
import MyOwnCreations from "./pages/MyOwnCreations/MyOwnCreations";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <AnounRoute exact path="/signup" component={Signup} />
        <AnounRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/my-own-creations" component={MyOwnCreations} />
        <PrivateRoute exact path="/create-recipe" component={CreateRecipe} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <PrivateRoute exact path="/edit-user/:id" component={EditUser} />
        <PrivateRoute exact path="/edit-recipe/:id" component={EditRecipe} />
      </Switch>

      <Footer />
    </div>
  );
}

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(App);
