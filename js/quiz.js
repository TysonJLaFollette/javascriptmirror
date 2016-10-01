// 1. Ask the user at least four questions and get their input
//
// 2. Keep track of the number of questions that are answered correctly
//
// 3. Write out a message to the user to let them know the number of questions that were correct
//
// 4. Output a message to the element with a quiz-result id the user depending on their score
//    All 5 correct: Complete Success
//    3-4 correct: Almost Good Enough
//    1-2 correct: Sitting on the Edge
//    0 correct: Ultimate failure

function proctorQuiz() {
    var score = 0;

var response1 = window.prompt("Add 0 + 0.", "Answer here...");
if (response1 == 0) {
    score++
};
var response2 = window.prompt("Add 1 + 1.", "Answer here...");
if (response2 == 2) {
    score++
};
var response3 = window.prompt("Add 2 + 2.", "Answer here...");
if (response3 == 4) {
    score++
};
var response4 = window.prompt("Add 3 + 3.", "Answer here...");
if (response4 == 6) {
    score++
};
var response5 = window.prompt("Add 4 + 4.", "Answer here...");
if (response5 == 8) {
    score++
};

alert("Score: " + score + "/5");

if (score == 0) {
    document.getElementById('quiz-result').innerHTML = "Score: " + score + ", Ultimate failure!";
}
else if (score < 3) {
    document.getElementById('quiz-result').innerHTML = "Score: " + score + ", Sitting on the edge...";
}
else if (score < 5) {
    document.getElementById('quiz-result').innerHTML = "Score: " + score + ", Almost good enough.";
}
else if (score == 5) {
    document.getElementById('quiz-result').innerHTML = "Score: " + score + ", Complete success!";
}
}

