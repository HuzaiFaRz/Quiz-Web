document.body.style.transition = "all 0.3s linear";
const signUpForm = document.querySelector(".signup-form");
const signInForm = document.querySelector(".signin-form");
const createAcountBtns = document.querySelector(".account-Btns");
const SignUpButton = document.querySelector(".SignUpButton");
const SignInButton = document.querySelector(".SignInButton");

let userSignedUp = false;
let userLoggedIn = false;

const signUpFormFunctionality = () => {
  SignUpButton.addEventListener("click", () => {
    gsap.to(createAcountBtns, {
      top: "10%",
      duration: 0.6,
      ease: Power1.easeInOut,
    });
    gsap.to(signUpForm, {
      width:"100%",
      height:"max-content",
      visibility: "visible",
      opacity: "1",
      scale: 1,
      duration: 0.6,
      ease: Power1.easeInOut,
    });
  });

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
    } else if (signUpUserInfo.password.length < 8) {
      console.log("Passowrd At Least Eight Character ❌");
    } else if (signUpUserInfo.password !== signUpUserInfo.confirmPassword) {
      console.log("Passowrd Does Not Match ❌");
    } else {
      let signUpUserInfoSave =
        JSON.parse(localStorage.getItem("signUpUserInfo")) || [];

      let signUpUserInfoSaveCheck = signUpUserInfoSave.find(
        (user) =>
          user.email === signUpUserInfo.email &&
          user.password === signUpUserInfo.password
      );

      if (signUpUserInfoSaveCheck) {
        console.log("User Already Exist Sign In");
      } else {
        userSignedUp = true;
        signUpForm.reset();
        signUpUserInfoSave.push(signUpUserInfo);
        localStorage.setItem(
          "signUpUserInfo",
          JSON.stringify(signUpUserInfoSave)
        );
        console.log("Sign Up SuccessFully");
      }
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
      let saveUser = JSON.parse(localStorage.getItem("signUpUserInfo")) || [];
      let matchingSaveData = saveUser.find(
        (user) =>
          user.email === signInFormData.get("signinemail") &&
          user.password === signInFormData.get("signinpassword")
      );

      if (matchingSaveData) {
        userLoggedIn = true;
        signInForm.reset();
        console.log("Sign in SuccessFully");
      } else {
        console.log("User Not Found Sign Up ❌");
      }
    }
  });
};
signUpFormFunctionality();
