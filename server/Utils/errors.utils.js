module.exports.signUpErrors = (err) => {
  let errors = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    region: "",
    club: "",
  };

  if (err.message.includes("username")) {
    errors.username = "Wrong username or already used";
  }

  if (err.message.includes("email")) {
    errors.email = "Email is not valid";
  }

  if (err.message.includes("password")) {
    errors.password =
      "Password is not valid ! <br/> - must length at least 8 characters. <br/> - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. <br/> - Can contain special characters";
  }

  if (err.message.includes("firstname")) {
    errors.firstname = "Missing firstname !";
  }

  if (err.message.includes("lastname")) {
    errors.lastname = "Missing lastname !";
  }

  if (err.message.includes("region")) {
    errors.region = "Missing region !";
  }

  if (err.message.includes("club")) {
    errors.club = "Missing club !";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("username"))
    errors.email = "Username already use, please use another username!";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email already use, please use another email!";
};

module.exports.signInErrors = (err) => {
  let errors = {
    username: "",
    email: "",
    password: "",
  };

  if (err.message.includes("username")) {
    errors.username = "Wrong username or already used";
  }

  if (err.message.includes("email")) {
    errors.email = "Email is not valid";
  }

  if (err.message.includes("password")) {
    errors.password =
      "Password is not valid ! <br/> - must length at least 8 characters. <br/> - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. <br/> - Can contain special characters";
  }
};
