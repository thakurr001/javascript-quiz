const questions = [
    {
        question: " Question😕:  true + false",
        answers: [
            { text: "1", correct: true },
            { text: "truefalse", correct: false },
            { text: "NaN", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: " Question🥴:  [,,,].length",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: " Question😵‍💫:  [1, 2, 3] + [4, 5, 6]",
        answers: [
            { text: `"123456"`, correct: false },
            { text:` "1,2,3,4,5,6"`, correct: false },
            { text: `"1,2,34,5,6"`, correct: true },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: " Question😏:  0.2 +0.1 === 0.3",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "Nan", correct: false },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: "Question🤭:  10,2",
        answers: [
            { text: "10.2", correct: false },
            { text: "10", correct: false },
            { text: "2", correct: true },
            { text: "20", correct: false },
        ]
    },
    {
        question: `Question🤪: !!""`,
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "undefined", correct: false },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: `Question🤙:   parseInt(0.0000005)`,
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "5", correct: true },
            { text: "0.5", correct: false },
        ]
    },
    {
        question: `Question😖:  +!![]`,
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: false },
            { text: "0", correct: false },
            { text: "1", correct: true },
        ]
    },
    {
        question: `Question😑 :  true == "true"`,
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "Undefined", correct: false },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: `Question🧐:  010 - 03`,
        answers: [
            { text: "7", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
        ]
    },
    {
        question: `Question🖖: "" - - ""`,
        answers: [
            { text: `""`, correct: false },
            { text: "0", correct: true },
            { text: "NaN", correct: false },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: "Question😍: null+0",
        answers: [
            { text: `"null0"`, correct: false },
            { text: "0", correct: true },
            { text: "NaN", correct: false },
            { text: "TypeError", correct: false },
        ]
    },
    {
        question: " Question🫠:  0/0" ,
        answers: [
            { text: `"0"`, correct: false },
            { text: "infinity", correct: false },
            { text: "NaN", correct: true },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: " Question🙃:  1/0 > 10 ** 1000" ,
        answers: [
            { text: `true`, correct: false },
            { text: "false", correct:false },
            { text: "NaN", correct: false },
            { text: "SyntaxError", correct: true },
        ]
    },
    {
        question: "Question😇:  true++" ,
        answers: [
            { text: `1`, correct: false },
            { text: "2", correct: true },
            { text: "NaN", correct: false },
            { text: "SyntaxError", correct: false },
        ]
    },
    {
        question: `Question🥲: ""-1` ,
        answers: [
            { text: `1`, correct: false },
            { text: `"-1"`, correct: false },
            { text: "NaN", correct: false },
            { text: "-1", correct: true },
        ]
    },
    {
        question: `Question🤪:  (null - 0) + "0" ` ,
        answers: [
            { text: `"nullo"`, correct: false },
            { text: `"00"`, correct: true },
            { text: "0", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: `Question🤔:  true + ("true" - 0)` ,
        answers: [
            { text: `1`, correct: false },
            { text: `2`, correct: false },
            { text: "NaN", correct: true },
            { text: "SyntaxError", correct:false },
        ]
    },
    {
        question: `Question😒: !5 + !5` ,
        answers: [
            { text: `0`, correct: true },
            { text: `10`, correct: false },
            { text: "25", correct: false },
            { text: "NaN", correct:false },
        ]
    },
    {
        question: `Question:  [] + []` ,
        answers: [
            { text: `[]`, correct: false },
            { text: `[']`, correct: false },
            { text: `""`, correct: true },
            { text: "NaN", correct:false },
        ]
    },
    {
        question: `Question😌:  1 + 2 + "3"` ,
        answers: [
            { text: `6`, correct: false },
            { text: `"123"`, correct: false },
            { text: `"33"`, correct: true },
            { text: "NaN", correct:false },
        ]
    },
    {
        question: `Question🥴: typeof NaN` ,
        answers: [
            { text: `"number"`, correct: true },
            { text: `"nan"`, correct: false },
            { text: `"undefined"`, correct: false },
            { text: `"object"`, correct:false },
        ]
    },
    {
        question: `Question😎:  undefined + false` ,
        answers: [
            { text: `undefinedfalse`, correct: false},
            { text: `0`, correct: false },
            { text: "SyntaxError", correct: false },
            { text: "NaN", correct:true },
        ]
    },
    {
        question: `Question😕: "" && -0` ,
        answers: [
            { text: `true`, correct: false},
            { text: `false`, correct: false },
            { text: `""`, correct: true },
            { text: "-0", correct:false },
        ]
    },

     {
        question: `Question🥺:  +!!NaN * "" - - [,]` ,
        answers: [
            { text: `0`, correct: true},
            { text: `"0"`, correct: false },
            { text: `NaN`, correct: false},
            { text: "I give up 😭", correct:false },
        ]
    },
    

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
} 
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();