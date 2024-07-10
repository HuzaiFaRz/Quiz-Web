const signUpForm = document.querySelector(".signup-form");
const signInForm = document.querySelector(".signin-form");
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
const confirmEmail = document.querySelector("#confirm-email");
const logOutbtn = document.querySelector(".logout-btn");
const deleteAccountBtn = document.querySelector(".deleteaccount-btn");
const quizStartBtn = document.querySelector(".start-quiz-btn");
const quizDiv = document.querySelector(".quiz");
const quizQuestionText = document.querySelector(".quiz-question");
const quizAnswerBtn = document.querySelectorAll(".quiz-answer-btn");
const quizQueationNextBtn = document.querySelector(".quiz-question-next");

let userSignedUp = false;
let userLoggedIn = false;

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
      { answer: "Cricket", correct: true },
      { answer: "Hockey", correct: false },
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
      { answer: "Imran Khan", correct: true },
      { answer: "Nawaz Sharif", correct: false },
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
  {
    question:
      "Which Pakistani artist painted the famous mural on the Pakistan Monument in Islamabad?",
    answers: [
      { answer: "Sadequain", correct: true },
      { answer: "Abdur Rahman Chughtai", correct: false },
      { answer: "Jamil Naqsh", correct: false },
      { answer: "Anwar Maqsood", correct: false },
    ],
  },
];

let quizQuestionIndex = 0;
let quizAnswerIndex = 0;

quizQuestionText.textContent = `Q${quizQuestionIndex}. ${
  quizQuestions[quizQuestionIndex].question
}`;
Array.from(quizAnswerBtn).forEach(() => {
  quizAnswerBtn[0].textContent =
    quizQuestions[quizAnswerIndex].answers[0].answer;

  quizAnswerBtn[1].textContent =
    quizQuestions[quizAnswerIndex].answers[1].answer;

  quizAnswerBtn[2].textContent =
    quizQuestions[quizAnswerIndex].answers[2].answer;

  quizAnswerBtn[3].textContent =
    quizQuestions[quizAnswerIndex].answers[3].answer;
});

console.log(quizQuestions[quizQuestionIndex].question);

quizQueationNextBtn.addEventListener("click", () => {
  quizQuestionIndex = quizQuestionIndex + 1;
  quizAnswerIndex = quizAnswerIndex + 1;

  quizQuestionText.textContent = `Q${quizQuestionIndex}. ${
    quizQuestions[quizQuestionIndex].question
  }`;

  Array.from(quizAnswerBtn).forEach(() => {
    quizAnswerBtn[0].textContent =
      quizQuestions[quizAnswerIndex].answers[0].answer;

    quizAnswerBtn[1].textContent =
      quizQuestions[quizAnswerIndex].answers[1].answer;

    quizAnswerBtn[2].textContent =
      quizQuestions[quizAnswerIndex].answers[2].answer;

    quizAnswerBtn[3].textContent =
      quizQuestions[quizAnswerIndex].answers[3].answer;
  });

  if (quizQuestionIndex === 20) {
    quizQuestionIndex = 0;
  }
});

quizQuestions.forEach((a) => {
  a.answers.forEach((b) => {});
});

// quizAnswerBtn.forEach((quizAnswerBtnElem) => {
//   quizAnswerBtnElem.textContent =
//
// });

const formAlertVisible = () => {
  gsap.to(formAlert, {
    top: 0,
    backgroundColor: "rgb(255, 0, 0, 0.8)",
    duration: 0.6,
    ease: Power3.easeInOut,
  });
};

const formAlertVisibleSuccess = () => {
  gsap.to(formAlert, {
    top: 0,
    backgroundColor: "rgb(0, 128, 0, 0.8)",
    duration: 0.6,
    ease: Power3.easeInOut,
  });
};

const formAlertUnVisible = () => {
  gsap.to(formAlert, {
    top: "-10%",
    duration: 0.6,
    ease: Power3.easeInOut,
  });
};

const formAlertUnVisibleautomatic = () => {
  setTimeout(() => {
    gsap.to(formAlert, {
      top: "-10%",
      duration: 0.6,
      ease: Power3.easeInOut,
    });
  }, 3000);
};

const createAccount = () => {
  SignUpButton.addEventListener("click", () => {
    gsap.to(signUpForm, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: Power3.easeInOut,
    });

    gsap.to(signInForm, {
      x: "-150%",
      opacity: 0,
      duration: 0.4,
      ease: Power3.easeInOut,
    });
  });

  SignInButton.addEventListener("click", () => {
    gsap.to(signInForm, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: Power3.easeInOut,
    });

    gsap.to(signUpForm, {
      opacity: 0,
      x: "150%",
      duration: 0.4,
      ease: Power3.easeInOut,
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
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Fill All Field";
    } else if (signUpUserInfo.password.length < 8) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Passowrd At Least Eight Character";
    } else if (signUpUserInfo.password !== signUpUserInfo.confirmPassword) {
      formAlertVisible();
      formAlertUnVisibleautomatic();
      formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
      formAlertText.textContent = " Passowrd Does Not Match";
    } else {
      let signUpUserInfoSave =
        JSON.parse(localStorage.getItem("signUpUserInfo")) || [];

      let signUpUserInfoSaveCheck = signUpUserInfoSave.find(
        (user) => user.email === signUpUserInfo.email
      );

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
        localStorage.setItem(
          "signUpUserInfo",
          JSON.stringify(signUpUserInfoSave)
        );
        formAlertVisibleSuccess();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertIcon.classList.replace(
          "ri-alert-fill",
          "ri-check-double-fill"
        );
        formAlertText.textContent = " Sign Up SuccessFully";
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
      let saveUser = JSON.parse(localStorage.getItem("signUpUserInfo")) || [];

      let matchingSaveData = saveUser.find(
        (user) =>
          user.email === signInFormData.get("signinemail") &&
          user.password === signInFormData.get("signinpassword")
      );

      if (matchingSaveData) {
        userLoggedIn = true;
        signInForm.reset();
        formAlertVisibleSuccess();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertIcon.classList.replace(
          "ri-alert-fill",
          "ri-check-double-fill"
        );
        formAlertText.textContent = " Sign in SuccessFully";
      } else {
        signUpForm.reset();
        formAlertVisible();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertText.textContent = " User Not Found Sign Up";
      }
    }
  });
  let userCheck = JSON.parse(localStorage.getItem("signUpUserInfo")) || [];

  let userNameFind = userCheck.find((user) => user.name);
  userName.textContent = `Helloo ${userNameFind}`;

  let deleteAccountBtnCount = 0;

  deleteAccountBtn.addEventListener("click", (e) => {
    deleteAccountBtnCount++;
    if (deleteAccountBtnCount === 1) {
      gsap.to(confirmEmailLabel, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: Power3.easeInOut,
      });
    }
    if (deleteAccountBtnCount >= 2) {
      let userFind = userCheck.find(
        (user) => user.email === confirmEmail.value
      );

      if (confirmEmail.value === "") {
        formAlertVisible();
        formAlertUnVisibleautomatic();
        formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
        formAlertText.textContent = " Fill Field";
      } else {
        if (userFind) {
          userCheck = userCheck.filter((e) => e.email != confirmEmail.value);
          localStorage.setItem("signUpUserInfo", JSON.stringify(userCheck));
          formAlertVisibleSuccess();
          formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
          formAlertText.textContent = " Remove Account SuccessFully";
          gsap.to(confirmEmailLabel, {
            x: "-200%",
            opacity: 0,
            duration: 0.6,
            ease: Power3.easeInOut,
          });
          deleteAccountBtnCount = 0;
        } else {
          formAlertVisible();
          formAlertUnVisibleautomatic();
          formAlertCloseBtn.addEventListener("click", formAlertUnVisible);
          formAlertText.textContent = " Wrong Email";
          confirmEmail.value = "";
        }
      }
    }
    console.log(deleteAccountBtnCount);
  });

  logOutbtn.addEventListener("click", () => {
    location.reload();
  });
};
createAccount();
