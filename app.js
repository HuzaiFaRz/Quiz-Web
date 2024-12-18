const signUpForm = document.querySelector(".signup-form");
const signInForm = document.querySelector(".signin-form");
const accountDeleteForm = document.querySelector(".account-delete-form");
const createAcountBtns = document.querySelector(".account-Btns");
const SignUpButton = document.querySelector(".SignUpButton");
const SignInButton = document.querySelector(".SignInButton");
const formAlert = document.querySelector(".form-alert");
const formAlertText = document.querySelector(".form-alert-text");
const formAlertCloseBtn = document.querySelector(".form-alert-close");
const formAlertIcon = document.querySelector(".form-alert-icon");
const userPage = document.querySelector(".user-page");
const userName = document.querySelector(".user-name");
const confirmEmailLabel = document.querySelector(".confirm-email-label");
const confirmpassworddeleteLabel = document.querySelector(
  ".confirm-password-delete-label"
);
const confirmEmail = document.querySelector("#confirm-email");
const logOutbtn = document.querySelector(".logout-btn");
const deleteAccountBtn = document.querySelector(".deleteaccount-btn");
const quizStartBtn = document.querySelector(".start-quiz-btn");
const quizDiv = document.querySelector(".quiz");
const quizBody = document.querySelector(".quiz-body");
const quizQuestionText = document.querySelector(".quiz-question");
const quizAnswerBtn = document.querySelectorAll(".quiz-answer-btn");
const quizQuestionNextBtn = document.querySelector(".quiz-question-next");
const quizTimer = document.querySelector(".quiz-timer");
const quizHeader = document.querySelector(".quiz-header");
// const correctAnswerDiv = document.querySelector(".correctanswer");
const passwordEye = document.querySelectorAll(".passowrd-eye");
const passwordInput = document.querySelectorAll(".password-input");
let userSignedUp = false;
let userLoggedIn = false;
let quizQuestionIndex = 1;
let quizAnswerIndex = 1;
// let correctAnswer = 0;
let timerMint = 10;
let timerSecond = 0;
let quizTimerSet;
var quizAnswerBtnClicked = false;
let USER_KEY = "Users";
let signUpUserInfoSave = JSON.parse(localStorage.getItem(USER_KEY)) || [];
let deleteAccountBtnCount = 0;

const formAlertVisible = () => {
  formAlert.style.top = "0%";
  formAlertText.style.color = "red";
  formAlert.style.backgroundColor = "black";
};

const formAlertVisibleSuccess = () => {
  formAlert.style.top = "0%";
  formAlert.style.backgroundColor = "black";
  formAlertText.style.color = "#12ff12";
};

const formAlertUnVisible = () => {
  formAlert.style.top = "-30%";
};

const formAlertUnVisibleautomatic = () => {
  setTimeout(() => {
    formAlert.style.top = "-30%";
  }, 2000);
};

const formAlertIconChanger = () => {
  formAlertIcon.classList.replace("ri-alert-fill", "ri-check-double-fill");
};

const quizHeaderTopMove = () => {
  quizHeader.style.top = "100%";
};

const signUpFormVisible = () => {
  signUpForm.style.display = "flex";
};

const signUpFormUnVisible = () => {
  signUpForm.style.display = "none";
};

const signInFormVisible = () => {
  signInForm.style.display = "flex";
};

const signInFormUnVisible = () => {
  signInForm.style.display = "none";
};

const createAcountBtnsvisible = () => {
  createAcountBtns.style.display = "flex";
};

const createAcountBtnsUnvisible = () => {
  createAcountBtns.style.display = "none";
};

const quizBodyVisible = () => {
  quizBody.style.display = "flex";
};
const quizBodyUnVisible = () => {
  quizBody.style.display = "none";
};

const quizDivVisible = () => {
  quizDiv.style.display = "flex";
};

const quizDivUnVisible = () => {
  quizDiv.style.display = "none";
};

const userPageVisible = () => {
  userPage.style.display = "flex";
};
const userPageUnVisible = () => {
  userPage.style.display = "none";
};

window.addEventListener(
  "DOMContentLoaded",
  userPageUnVisible(),
  quizBodyUnVisible(),
  quizDivUnVisible()
);

window.addEventListener(
  "load",
  userPageUnVisible(),
  quizBodyUnVisible(),
  quizDivUnVisible()
);

let quizQuestions = [
  {
    question: "What is the capital city of Pakistan?",
    answers: [
      { answer: "Karachi", correct: false },
      { answer: "Islamabad", correct: true },
      { answer: "Lahore", correct: false },
      { answer: "Peshawar", correct: false },
    ],
  },
  {
    question:
      "Which mountain is the second highest peak in Pakistan and the world?",
    answers: [
      { answer: "Mount Everest", correct: false },
      { answer: "K2", correct: true },
      { answer: "Mount McKinley", correct: false },
      { answer: "Mount Kilimanjaro", correct: false },
    ],
  },

  {
    question: "Which mountain range is located in Pakistan?",
    answers: [
      { answer: "Andes", correct: false },
      { answer: "Himalayas", correct: false },
      { answer: "Karakoram", correct: true },
      { answer: "Alps", correct: false },
    ],
  },
  {
    question: "Who is the founder of Pakistan?",
    answers: [
      { answer: "Muhammad Ali Jinnah", correct: true },
      { answer: "Benazir Bhutto", correct: false },
      { answer: "Pervez Musharraf", correct: false },
      { answer: "Zulfikar Ali Bhutto", correct: false },
    ],
  },
  {
    question: "Which river is the longest in Pakistan?",
    answers: [
      { answer: "Chenab River", correct: false },
      { answer: "Jhelum River", correct: false },
      { answer: "Indus River", correct: true },
      { answer: "Ravi River", correct: false },
    ],
  },

  {
    question: "What is the national sport of Pakistan?",
    answers: [
      { answer: "Cricket", correct: false },
      { answer: "Hockey", correct: true },
      { answer: "Football", correct: false },
      { answer: "Polo", correct: false },
    ],
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    answers: [
      { answer: "Karachi", correct: true },
      { answer: "Lahore", correct: false },
      { answer: "Islamabad", correct: false },
      { answer: "Faisalabad", correct: false },
    ],
  },
  {
    question: "In which year did Pakistan gain independence?",
    answers: [
      { answer: "1945", correct: false },
      { answer: "1947", correct: true },
      { answer: "1950", correct: false },
      { answer: "1960", correct: false },
    ],
  },
  {
    question:
      "Which Pakistani physicist is known as the 'Father of Pakistan's Nuclear Program'?",
    answers: [
      { answer: "Abdul Qadeer Khan", correct: true },
      { answer: "Pervez Hoodbhoy", correct: false },
      { answer: "Salam Abdus", correct: false },
      { answer: "Ziauddin Sardar", correct: false },
    ],
  },
  {
    question: "What is the largest city in Pakistan by population?",
    answers: [
      { answer: "Lahore", correct: false },
      { answer: "Karachi", correct: true },
      { answer: "Islamabad", correct: false },
      { answer: "Faisalabad", correct: false },
    ],
  },
  {
    question:
      "Which Pakistani cricketer has scored the most centuries in Test cricket?",
    answers: [
      { answer: "Wasim Akram", correct: false },
      { answer: "Inzamam-ul-Haq", correct: false },
      { answer: "Younis Khan", correct: true },
      { answer: "Shahid Afridi", correct: false },
    ],
  },
  {
    question:
      "Which famous archaeological site is located in Pakistan and is known for its ancient civilization?",
    answers: [
      { answer: "Mohenjo-daro", correct: true },
      { answer: "Harappa", correct: false },
      { answer: "Taxila", correct: false },
      { answer: "Chanhudaro", correct: false },
    ],
  },
  {
    question: "What is the national flower of Pakistan?",
    answers: [
      { answer: "Jasmine", correct: true },
      { answer: "Rose", correct: false },
      { answer: "Lily", correct: false },
      { answer: "Sunflower", correct: false },
    ],
  },
  {
    question: "Who is the current Prime Minister of Pakistan (as of 2024)?",
    answers: [
      { answer: "Imran Khan", correct: false },
      { answer: "Shehbaz Sharif", correct: true },
      { answer: "Asif Ali Zardari", correct: false },
      { answer: "Bilawal Bhutto Zardari", correct: false },
    ],
  },
  {
    question:
      "Which Pakistani actress won an Oscar for her role in the movie 'A Girl in the River'?",
    answers: [
      { answer: "Mahira Khan", correct: false },
      { answer: "Saba Qamar", correct: false },
      { answer: "Mehwish Hayat", correct: false },
      { answer: "Sharmeen Obaid-Chinoy", correct: true },
    ],
  },
  {
    question: "Which famous Pakistani musician was known as the 'King of Pop'?",
    answers: [
      { answer: "Ali Zafar", correct: false },
      { answer: "Atif Aslam", correct: false },
      { answer: "Nusrat Fateh Ali Khan", correct: true },
      { answer: "Rahat Fateh Ali Khan", correct: false },
    ],
  },
  {
    question:
      "Which animal is associated with the national identity of Pakistan?",
    answers: [
      { answer: "Lion", correct: false },
      { answer: "Markhor", correct: true },
      { answer: "Tiger", correct: false },
      { answer: "Leopard", correct: false },
    ],
  },
  {
    question:
      "Which Pakistani city is known for its ancient Buddhist heritage and Gandhara art?",
    answers: [
      { answer: "Peshawar", correct: false },
      { answer: "Quetta", correct: false },
      { answer: "Lahore", correct: false },
      { answer: "Taxila", correct: true },
    ],
  },
  {
    question: "Who was the first female Prime Minister of Pakistan?",
    answers: [
      { answer: "Fatima Jinnah", correct: false },
      { answer: "Benazir Bhutto", correct: true },
      { answer: "Asma Jahangir", correct: false },
      { answer: "Hina Rabbani Khar", correct: false },
    ],
  },
  {
    question:
      "Which Pakistani cricketer has the record for the most wickets in Test cricket?",
    answers: [
      { answer: "Wasim Akram", correct: false },
      { answer: "Imran Khan", correct: false },
      { answer: "Shoaib Akhtar", correct: false },
      { answer: "Waqar Younis", correct: true },
    ],
  },
];

const startQuiz = () => {
  quizQuestionIndex = 0;
  quizAnswerIndex = 0;

  timerSecond = 60;
  timerMint = 3;

  quizTimerSet = setInterval(() => {
    timerSecond--;
    quizTimer.textContent = `${timerMint} : ${timerSecond} `;

    if (timerSecond <= 0) {
      timerMint--;
      timerSecond = 60;
    }

    if (timerMint < 1) {
      quizTimer.style.color = "red";
      quizTimer.style.fontWeight = "400";
    }

    if (timerMint < 0) {
      clearInterval(quizTimerSet);
      // correctAnswerVisible();
      quizHeaderTopMove();
      quizBodyUnVisible();
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Time Over";
      quizTimer.textContent = `0:00`;
      quizDivUnVisible();
      userPageVisible();
      signUpFormUnVisible();
      signInFormUnVisible();
    }
  }, 1000);
  quizQuestionText.textContent = `Q${quizQuestionIndex + 1}. ${
    quizQuestions[quizQuestionIndex].question
  }`;
  Array.from(quizAnswerBtn).forEach((quizAnswerBtnElem, quizAnswerBtnIndex) => {
    quizAnswerBtnElem.textContent =
      quizQuestions[quizAnswerIndex].answers[quizAnswerBtnIndex].answer;
    quizAnswerBtnElem.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    quizAnswerBtnElem.style.color = "white";
    quizAnswerBtnClicked = false;
    quizAnswerBtnElem.addEventListener("click", () => {
      quizAnswerBtnClicked = true;
      quizAnswerBtn.forEach((btn, index) => {
        if (quizQuestions[quizAnswerIndex].answers[index].correct) {
          btn.style.color = "#12ff12";
          btn.style.backgroundColor = "black";
        } else {
          btn.style.color = "red";
          btn.style.backgroundColor = "black";
        }
      });
    });
  });
};

startQuiz();

const quizQuestionUpdate = () => {
  quizQuestionIndex++;
  quizAnswerIndex++;

  if (
    quizQuestionIndex >= quizQuestions.length &&
    quizAnswerIndex >= quizQuestions.length
  ) {
    quizQuestionIndex = 0;
    quizAnswerIndex = 0;
    quizHeaderTopMove();
    quizBodyUnVisible();
    formAlertVisibleSuccess();
    formAlertIconChanger();
    formAlertUnVisibleautomatic();
    formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
    formAlertText.textContent = " Quiz Complete";
    quizBodyUnVisible();
    quizDivUnVisible();
    userPageVisible();
    signUpFormUnVisible();
    signInFormUnVisible();
  }

  quizQuestionText.textContent = `Q${quizQuestionIndex + 1}. ${
    quizQuestions[quizQuestionIndex].question
  }`;
  Array.from(quizAnswerBtn).forEach((quizAnswerBtnElem, quizAnswerBtnIndex) => {
    quizAnswerBtnElem.textContent =
      quizQuestions[quizAnswerIndex].answers[quizAnswerBtnIndex].answer;

    quizAnswerBtnElem.style.color = "white";
    quizAnswerBtnElem.style.backgroundColor = "rgb(0, 0, 0, 0.5)";

    quizAnswerBtnClicked = false;
    quizAnswerBtnElem.addEventListener("click", () => {
      quizAnswerBtnClicked = true;
      quizAnswerBtn.forEach((btn, index) => {
        if (quizQuestions[quizAnswerIndex].answers[index].correct) {
          btn.style.color = "#12ff12";
          btn.style.backgroundColor = "black";
        } else {
          btn.style.color = "red";
          btn.style.backgroundColor = "black";
        }
      });
    });
  });
};

quizStartBtn.addEventListener("click", () => {
  userPageUnVisible();
  quizDivVisible();
  quizBodyVisible();
  startQuiz();
});

quizQuestionNextBtn.addEventListener("click", () => {
  if (!quizAnswerBtnClicked) {
    formAlertVisible();
    formAlertUnVisibleautomatic();
    formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
    formAlertText.textContent = " Clicked At Least One Button";
  } else {
    quizQuestionUpdate();
  }
});

const createAccount = () => {
  Array.from(passwordEye).forEach((e, i) => {
    e.addEventListener("click", () => {
      e.classList.toggle("passwordEyeCut");
      if (e.classList.contains("passwordEyeCut")) {
        passwordInput[i].setAttribute("type", "text");
      } else {
        passwordInput[i].setAttribute("type", "password");
      }
    });
  });
  SignUpButton.addEventListener("click", () => {
    signUpFormVisible();
    signInFormUnVisible();
  });

  SignInButton.addEventListener("click", () => {
    signInFormVisible();
    signUpFormUnVisible();
  });
  signUpForm.addEventListener("submit", (a) => {
    a.preventDefault();
    const signUpFormData = new FormData(signUpForm);
    let signUpUserInfo = {
      name: signUpFormData.get("name"),
      email: signUpFormData.get("signupemail"),
      password: signUpFormData.get("signuppassword"),
    };

    if (
      !signUpUserInfo.name ||
      !signUpUserInfo.email ||
      !signUpUserInfo.password ||
      !signUpFormData.get("signupconfirmpassword")
    ) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Fill All Field";
    } else if (signUpUserInfo.password.length < 8) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Passowrd At Least Eight Character";
    } else if (
      signUpUserInfo.password !== signUpFormData.get("signupconfirmpassword")
    ) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Passowrd Does Not Match";
    } else {
      let signUpUserInfoSaveCheck = signUpUserInfoSave.find((user) => {
        return user.email === signUpUserInfo.email;
      });

      if (signUpUserInfoSaveCheck) {
        formAlertVisible();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertText.textContent = " User Already Exist Sign In";
        signUpForm.reset();
      } else {
        userSignedUp = true;
        signUpForm.reset();
        signUpUserInfoSave.push(signUpUserInfo);
        localStorage.setItem(USER_KEY, JSON.stringify(signUpUserInfoSave));
        formAlertVisibleSuccess();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertIconChanger();
        formAlertText.textContent = " Sign Up SuccessFully";
        signUpFormUnVisible();
        signInFormVisible();
      }
    }
  });

  signInForm.addEventListener("submit", (b) => {
    b.preventDefault();

    const signInFormData = new FormData(signInForm);
    if (
      !signInFormData.get("signinemail") ||
      !signInFormData.get("signinpassword")
    ) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Fill All Field";
    } else {
      let saveUser = JSON.parse(localStorage.getItem(USER_KEY)) || [];

      let matchingSaveData = saveUser.find((user) => {
        return (
          user.email === signInFormData.get("signinemail") &&
          user.password === signInFormData.get("signinpassword")
        );
      });

      if (matchingSaveData) {
        userLoggedIn = true;
        signInForm.reset();
        formAlertVisibleSuccess();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertIconChanger();
        formAlertText.textContent = " Sign in SuccessFully";
        if (formAlertText.textContent === " Sign in SuccessFully") {
          signInFormUnVisible();
          signUpFormUnVisible();
          createAcountBtnsUnvisible();
          userPageVisible();
          userName.textContent = `Hi! ${matchingSaveData.name}`;
        }
      } else {
        signUpForm.reset();
        formAlertVisible();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertText.textContent = " Incorrect Email Or Password";
      }
    }
  });

  accountDeleteForm.addEventListener("submit", (l) => {
    l.preventDefault();
    deleteAccountBtnCount++;
    let accountDeleteFormData = new FormData(l.currentTarget);

    let userCheck = JSON.parse(localStorage.getItem(USER_KEY)) || [];

    let accountDeleteUserInfo = {
      email: accountDeleteFormData.get("deleteconfirmemail"),
      password: accountDeleteFormData.get("deleteconfirmdelete"),
    };

    if (deleteAccountBtnCount === 1) {
      confirmEmailLabel.style.transform = "translateX(0)";
      confirmEmailLabel.style.opacity = 1;

      confirmpassworddeleteLabel.style.transform = "translateX(0)";
      confirmpassworddeleteLabel.style.opacity = 1;
    }

    if (deleteAccountBtnCount >= 2) {
      if (!accountDeleteUserInfo.email || !accountDeleteUserInfo.password) {
        formAlertVisible();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertText.textContent = " Fill Field";
      } else {
        let userFind = userCheck.find((user) => {
          return (
            user.email === accountDeleteUserInfo.email &&
            user.password === accountDeleteUserInfo.password
          );
        });
        if (userFind) {
          userCheck = userCheck.filter((e) => {
            return (
              e.email !== accountDeleteUserInfo.email ||
              e.password !== accountDeleteUserInfo.password
            );
          });

          localStorage.setItem(USER_KEY, JSON.stringify(userCheck));

          formAlertUnVisibleautomatic();
          formAlertVisibleSuccess();
          formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
          formAlertIconChanger();
          formAlertText.textContent = " Remove Account SuccessFully";
          if (formAlertText.textContent === " Remove Account SuccessFully") {
            userPageUnVisible();
            signUpFormVisible();
            createAcountBtnsvisible();
            setTimeout(() => {
              location.reload;
            }, 1000);
          }

          confirmEmailLabel.style.transform = "translateX(-200%)";
          confirmEmailLabel.style.opacity = 1;

          confirmpassworddeleteLabel.style.transform = "translateX(200%)";
          confirmpassworddeleteLabel.style.opacity = 1;

          deleteAccountBtnCount = 0;
        } else {
          formAlertVisible();
          formAlertUnVisibleautomatic();
          formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
          formAlertText.textContent = " Wrong Email Or Password";
          accountDeleteUserInfo.email = "";
          accountDeleteUserInfo.password = "";
        }
      }
    }
  });

  logOutbtn.addEventListener("click", () => {
    location.reload();
  });
};
createAccount();
