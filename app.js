const signUpForm = document.querySelector(".signup-form");
let signUpUserIsLogged = false;

const signInForm = document.querySelector(".signin-form");
let signInUserIsLogged = false;

const signUpFormFunctionality = () => {
  signUpForm.addEventListener("submit", (a) => {
    a.preventDefault();
    const signUpFormData = new FormData(signUpForm);
    let signUpUserInfo = {
      name: signUpFormData.get("name"),
      email: signUpFormData.get("signupemail"),
      password: signUpFormData.get("signuppassword"),
      confirmPassword: signUpFormData.get("signupconfirmpassword"),
    };

    if (
      !signUpUserInfo.name ||
      !signUpUserInfo.email ||
      !signUpUserInfo.password ||
      !signUpUserInfo.confirmPassword
    ) {
      console.log("Fill All Field ❌");
    } else if (signUpUserInfo.password.length <= 8) {
      console.log("Passowrd At Least Eight Character ❌");
    } else if (signUpUserInfo.password !== signUpUserInfo.confirmPassword) {
      console.log("Passowrd Does Not Match ❌");
    }

    let signUpUserInfoSave =
      JSON.parse(localStorage.getItem("signUpUserInfo")) || [];
    signUpUserInfoSave.push(signUpUserInfo);
    localStorage.setItem("signUpUserInfo", JSON.stringify(signUpUserInfoSave));

    let w = JSON.parse(localStorage.getItem("signUpUserInfo")) || [];

    let o = w.find((user) => {
      user.email === signUpUserInfo.email;
    });

    if (o) {
      console.log("Sign Up SuccessFully");
    } else {
      console.log("User Already Exist Sign In");
    }

    //   signUpForm.reset();
  });

  signInForm.addEventListener("submit", (b) => {
    b.preventDefault();

    const signInFormData = new FormData(signInForm);
    if (
      !signInFormData.get("signinemail") ||
      !signInFormData.get("signinpassword")
    ) {
      console.log("Fill All Field ❌");
    } else {
      let storedUsers =
        JSON.parse(localStorage.getItem("signUpUserInfo")) || [];
      let matchingUser = storedUsers.find(
        (user) => user.email === signInFormData.get("signinemail"),
        (user) => user.password === signInFormData.get("signinpassword")
      );

      if (matchingUser) {
        signInUserIsLogged = true;
        if (signInUserIsLogged) {
          signInForm.reset();
          console.log("Sign in SuccessFully");
        }
      } else {
        console.log("User Not Found Sign Up ❌");
      }
    }

    // let signInUserInfo = {
    //   email: signInFormData.get("signinemail"),
    //   password: signInFormData.get("signinpassword"),
    // };
  });
};
signUpFormFunctionality();
