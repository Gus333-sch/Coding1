const questions = [
  { q: "What is the tallest mountain in the world?", choices: ["K2", "Everest", "Kilimanjaro", "Denali"], correct: 1 },
  { q: "Which mountain is in Tanzania?", choices: ["Everest", "Matterhorn", "Kilimanjaro", "K2"], correct: 2 },
  { q: "K2 is nicknamed the ___ Mountain.", choices: ["Gentle", "Savage", "Sleepy", "Friendly"], correct: 1 },
];

let current = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  const question = questions[current];
  document.getElementById("qtext").innerText = question.q;

  document.getElementById("choice0").innerText = question.choices[0];
  document.getElementById("choice1").innerText = question.choices[1];
  document.getElementById("choice2").innerText = question.choices[2];
  document.getElementById("choice3").innerText = question.choices[3];

  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  answered = false;
}

function checkAnswer(i) {
  if (answered) return;
  answered = true;

  const question = questions[current];
  const feedback = document.getElementById("feedback");

  if (i === question.correct) {
    score++;
    feedback.innerText = "Correct!";
  } else {
    feedback.innerText = "Wrong. The answer was " + question.choices[question.correct];
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("qtext").innerText = "Quiz complete!";
    document.getElementById("choice0").style.display = "none";
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.getElementById("choice3").style.display = "none";
    document.getElementById("feedback").innerText = "Score: " + score + " / " + questions.length;
    document.getElementById("nextBtn").style.display = "none";
  }
}

loadQuestion();
