import React from "react";
import { withRouter } from "react-router-dom";
import RecipeService from "../../services/recipe.service";
import { recipeValidators } from "../../components/Validators/Validators";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

class EditRecipe extends React.Component {
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
      buttonType: "Update Recipe",
      errors: {
        dishName: null,
        cousine: null,
        type: null,
        image: null,
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

  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    const id = this.props.match.params.id;
    this.recipeService.getOne(id).then((res) => {
      this.setState({ fields: { ...res.data } });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const uploadData = this.state.fields;

    if (this.isValid()) {
      this.recipeService
        .updateOne(id, uploadData)
        .then(() => {
          this.goBack();
        })
        .catch((err) => console.log(err));
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
    const id = this.props.match.params.id;

    // you need export the component withRouter to be able to use history.push
    this.props.history.push("/recipe/" + id);
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
export default withRouter(EditRecipe);
