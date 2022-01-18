import React from "react";
import Banner from "../../components/Banner/Banner";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
import RecipeService from "../../services/recipe.service";

class RecipesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
    };
    this.recipeService = new RecipeService();
  }

  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    this.recipeService
      .getOne(this.props.match.params.id)
      .then((res) => {
        this.setState({ recipe: res.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <main className="flex max-w-7xl mx-auto mt-3">
          <div className="flex flex-col w-full">
            <Banner />
            <RecipeDetail {...this.state.recipe} />
          </div>
        </main>
      </div>
    );
  }
}

export default RecipesDetail;
