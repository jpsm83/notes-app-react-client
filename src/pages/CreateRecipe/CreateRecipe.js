import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RecipeService from "../../services/recipe.service";
import { recipeValidators } from "../../components/Validators/Validators";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        dishName: "",
        cousine: "",
        type: "",
        image: "",
        ingredients: "",
        prepTime: "",
        preparation: "",
        howToCook: "",
        servings: "",
      },
      buttonType: "Create Recipe",
      errors: {
        dishName: null,
        cousine: null,
        type: null,
        ingredients: null,
        prepTime: null,
        preparation: null,
        howToCook: null,
        servings: null,
      },
    };
    // connection with RecipeService to be able to use all it services
    // recipe.service.js is the bridge to connect frontend with backend
    this.recipeService = new RecipeService();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.recipeService
        .create(this.state.fields)
        .then(() => console.log(this.state.fields.dishName, "created"))
        .catch((err) => console.log(err));
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
        [name]: recipeValidators[name](value),
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
        <RecipeForm
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
export default withRouter(CreateRecipe);
