const EMAIL_PATTERN =
  // eslint-disable-next-line
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//front validator MUST be equal to back validators
const recipeValidators = {
  dishName: (value) => {
    let message;
    if (!value) {
      message = "Dish name is required";
    }
    return message;
  },

  ingredients: (value) => {
    let message;
    if (!value) {
      message = "Ingredients are required";
    }
    return message;
  },

  prepTime: (value) => {
    let message;
    if (!value) {
      message = "Prep time is required";
    }
    return message;
  },

  image: (value) => {
    let message;
    if (!value) {
      message = "Image is required";
    }
    return message;
  },

  preparation: (value) => {
    let message;
    if (!value) {
      message = "Preparation is required";
    }
    return message;
  },

  howToCook: (value) => {
    let message;
    if (!value) {
      message = "How to cook is required";
    }
    return message;
  },

  cousine: (value) => {
    let message;
    if (!value) {
      message = "Cousine time is required";
    }
    return message;
  },

  type: (value) => {
    let message;
    if (!value) {
      message = "Type time is required";
    }
    return message;
  },

  servings: (value) => {
    let message;
    if (!value) {
      message = "Servings are required";
    }
    return message;
  },
};

const userValidators = {
  username: (value) => {
    let message;
    if (!value) {
      message = "Username is required";
    }
    return message;
  },

  photo: (value) => {
    let message;
    if (value.length > 300) {
      message = "300 characters maximun";
    }
    return message;
  },

  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Invalid Email";
    }
    return message;
  },

  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    } else if (value.length < 5) {
      message = "5 characters minimun";
    }
    return message;
  },
};

export { recipeValidators, userValidators };
