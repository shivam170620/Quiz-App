// const question_data = require("./question_data");
// const student_data = require("./student_data");

let login_btn = document.getElementById(`Login-btn`);
let UserName = document.getElementById(`login-Username`);
let password = document.getElementById(`login-password`);
let login_container = document.querySelector(`.login-container`);
let display_container = document.querySelector(`.display-container-class`);
let result_container = document.querySelector(`.result-container`);
let time = document.getElementById(`timer-time`);
let Final_score_display = document.getElementById(`show-result`);
let question_container = document.getElementById(`Question-content-container`);

let next_btn = document.getElementById(`next-btn`);
let restart_btn = document.getElementById(`restart-btn`);
let finish_btn = document.getElementById(`finish-btn`);
let Attempt_Q_text = document.getElementById(`Attemped-Question-count`);
let Q_count;
let Score_Count;
let count_seconds = 11;
// let countdown;

// Student Data----------------------------------------------------------------

var student_data = [
  {
    name: "Laxman",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300010001",
  },

  {
    name: "Krish",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300010002",
  },

  {
    name: "Hanish",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300010003",
  },

  {
    name: "Shubham",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300010004",
  },
  {
    name: "Kriti",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300020001",
  },
  {
    name: "Rashika",
    // Year-Course-Code-4digitSerialNo.
    roll_no: "2300020002",
  },
];

//   -------------------------------------------------------------------------

// console.log(student_data);

// VertexClasses@2023

// -----------------------------------------------------

// Question data

const data = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question:
      "What do you call a computer on a network that requests files from another computer?",
    options: ["A client", "A host", "A router", "A web server"],
    correct: "A client",
  },
  {
    id: "4",
    question:
      "Hardware devices that are not part of the main computer system and are often added later to the system.",
    options: ["Peripheral", "Clip art", "Highlight", "Execute"],
    correct: "Peripheral",
  },
  {
    id: "5",
    question:
      "The main computer that stores the files that can be sent to computers that are networked together is:",
    options: ["Clip art", "Mother board", "Peripheral", "File server"],
    correct: "File server",
  },
  {
    id: "6",
    question: "How can you catch a computer virus?",
    options: [
      "Sending e-mail messages",
      "Using a laptop during the winter",
      "Opening e-mail attachments",
      "Shopping on-line",
    ],
    correct: "Opening e-mail attachments",
  },
  {
    id: "7",
    question: "Google (www.google.com) is a:",
    options: [
      "Search Engine",
      "Number in Math",
      "Directory of images",
      "Chat service on the web",
    ],
    correct: "Search Engine",
  },
  {
    id: "8",
    question: "Which is not an Internet protocol?",
    options: ["HTTP", "FTP", "STP", "IP"],
    correct: "STP",
  },
  {
    id: "9",
    question: "Which of the following is not a valid domain name?",
    options: [
      "www.yahoo.com",
      "www.yahoo.co.uk",
      "www.com.yahoo",
      "www.yahoo.co.in",
    ],
    correct: "www.com.yahoo",
  },
];

// ---------------------------------------------------

// Login Button

login_btn.addEventListener(`click`, function () {
  let found = false;

  // console.log(`Reached - 1`);

  for (var x in student_data) {
    // console.log(x);

    if (student_data[x].roll_no == UserName.value) {
      found = true;
    }
  }

  if (found && password.value == "VertexClasses@2023") {
    login_container.classList.add("hide");
    display_container.classList.remove("hide");
    // console.log(
    //   `Reached 2` + `  ` + found + `  ` + password.value + `  ` + UserName.value
    // );
    intial_function();
  } else {
    UserName.value = "";
    password.value = "";
  }
});

// Intial function after login button

function timer_display() {
  Interval_Function = setInterval(() => {
    count_seconds--;
    let timer_string = count_seconds.toString();
    if (timer_string < 10) {
      timer_string = "0" + timer_string + "s";
    }
    time.innerHTML = timer_string;

    if (count_seconds == 0) {
      clearInterval(Interval_Function);
      // Clear Interval function will stop the execution of this interval which is happening every 1 second.
      // ClearInterval contains the function_name of Interval which is going to stop
      displayNext();
    }
  }, 1000);
}

function intial_function() {
  question_container.innerHTML = "";
  Score_Count = 0;
  Q_count = 0;

  timer_display();
  quiz_Creator();
  quiz_Display(Q_count);
}

// On loading the screen , start the exam again

window.onload = () => {
  login_container.classList.remove("hide");
  display_container.classList.add("hide");
  result_container.classList.add("hide");
};

// Next Button event listener

next_btn.addEventListener(`click`, displayNext);

// displayNext funxtion

function displayNext() {
  Q_count += 1;

  if (Q_count == data.length) {
    display_container.classList.add("hide");
    result_container.classList.remove("hide");
    Final_score_display.innerHTML =
      "Score : " +
      Score_Count +
      " <br> <span>Total Questions : </span> " +
      Q_count;
  } else {
    Attempt_Q_text.innerHTML =
      Q_count + 1 + ` of ` + data.length + ` Questions `;
    quiz_Display(Q_count);

    clearInterval(Interval_Function);
    // Stop the timer function
    count_seconds = 11;
    // For next upcoming question make timer again as 11 seconds
    timer_display();
  }
}

// Finish Button Event Listener

finish_btn.addEventListener(`click`, () => {
  let k = data.length;
  display_container.classList.add("hide");
  result_container.classList.remove("hide");
  Final_score_display.innerHTML =
    "Score : " + Score_Count + " <br> <span>Total Questions : </span> " + k;

  console.log(`Finish Quiz is being executed `);
});

// function finish_quiz() {

// }

restart_btn.addEventListener(`click`, () => {
  login_container.classList.remove("hide");
  // display_container.classList.add("hide");
  result_container.classList.add("hide");

  UserName.value = "";
  password.value = "";
});

function quiz_Display(Q_count) {
  All_Question_set = document.querySelectorAll(".Question-set-all-container");

  // In query Selector you  have to put the selector identifier , i.e for class - . , for id - # ..

  // console.log(All_Question_set, All_Question_set.length);
  // let c = 0;
  for (x of All_Question_set) {
    // console.log(x);

    x.classList.add("hide");
    // console.log(c);
    // c++;
  }

  // console.log(All_Question_set[Q_count] + `                  ` + Q_count);

  All_Question_set[Q_count].classList.remove("hide");

  console.log(`Quiz Display`);
}

function quiz_Creator() {
  // display a question
  // & then 4  options -> having checker function for checking it right or wrong
  data.sort(() => {
    // Comparator Function for shuffling , Found No logical prove it on stack overflow
    Math.random() - 0.5;
  });
  // array is being shuffled
  // Iterate over the data array
  // Approach => Making a container , containing all the questions with options in this container
  // Every question container has same class name , we will display one by one.

  // div - Question-content-container
  // div - Question - set - all -container  * 10
  // {  }

  // div - Question - set - all -container{}

  for (x in data) {
    console.log(x);
    data[x].options.sort(() => Math.random() - 0.5);
    let div_element = document.createElement("div");
    div_element.classList.add("Question-set-all-container");
    div_element.classList.add("hide");
    let question = document.createElement("p");
    question.classList.add("Question-text", "Q-parts");
    Attempt_Q_text.innerHTML = 1 + ` of ` + data.length + ` Questions `;
    question.innerHTML = data[x].question;
    div_element.appendChild(question);
    div_element.innerHTML += `
    <button class="choices Q-parts" onclick="answer_checker( this)"> ${data[x].options[0]} </button>
    <button class="choices Q-parts" onclick="answer_checker( this)"> ${data[x].options[1]} </button>
    <button class="choices Q-parts" onclick="answer_checker( this )"> ${data[x].options[2]} </button>
    <button class="choices Q-parts" onclick="answer_checker(this )"> ${data[x].options[3]} </button>
    `;

    // console.log(div_element);
    question_container.appendChild(div_element);
  }
}

function answer_checker(User_Selected_Option) {
  User_Option = User_Selected_Option.innerText;

  // Current question where we are now

  let current_question = document.querySelectorAll(
    ".Question-set-all-container"
  )[Q_count];

  // for (x in Q_Container) {
  //   if (x == Q_count) {
  //     current_question = Q_Container[x];
  //   }
  // }

  All_choices = current_question.querySelectorAll(".choices");

  console.log(All_Question_set);
  console.log(Q_count);

  Correct_ans = data[Q_count].correct;

  console.log(Correct_ans + `   ` + User_Option);

  if (Correct_ans == User_Option) {
    console.log(`Correct Option`);
    User_Selected_Option.classList.add("correct");
    Score_Count++;
    // Make it green
  } else {
    console.log(`Incorrect Options`);
    User_Selected_Option.classList.add("incorrect");
    for (x of All_choices) {
      if (x.innerText == Correct_ans) {
        x.classList.add("correct");
      }
    }
  }

  //  Clear Interval

  clearInterval(Interval_Function);

  // Disable all the options

  for (x of All_choices) {
    x.disabled = true;
  }
}

//

function finish_quiz() {}
