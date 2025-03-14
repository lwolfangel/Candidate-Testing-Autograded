const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride'
let candidateAnswer = ""



//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", 
                 "True or false: 5 kilometer == 5000 meters? ", 
                 "(5 + 3)/2 * 10 = ? ",
                 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                 "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = [];




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question("Enter Name: ");
  console.log("Hello " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');

  for(let i = 0; i < questions.length; i++) {
    candidateAnswers[candidateAnswers.length] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 /*if  (candidateAnswer === correctAnswer) {
    console.log("You answered correctly, congratulations")
  } else {
    console.log("Your answer is incorrect, better luck next time")
  } */

  let answer = "";
  let actual = "";
  let output = "";

  let rightAnswer = 0

  for(let i = 0; i < candidateAnswers.length; i++) {
    answer = candidateAnswers[i];
    actual = correctAnswers[i];
    output = `Candidate answer = ${answer}     , Actual answer = ${actual}`;
    
    console.log(output);
  

    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      rightAnswer += 1;
    } 
  }


  let grade = (rightAnswer/correctAnswers.length) * 100;
   //TODO 3.2 use this variable to calculate the candidates score. 
  if(grade >= 80) {
    console.log("Congratulations, you have passed with a score of " + grade);
  }  
  else {
    console.log("Sorry, you have failed with a score of " + grade);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(candidateAnswers); //Ask about this, had to remove "this." for it to work
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};