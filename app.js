const quizData = [
    {
    question: "What was Ernest Hemingway's first novel?",
    a: "Absalom, Absalom!",
    b: "The Old Man and The Sea",
    c: "The Scarlet Letter",
    d: "The Sun Also Rises",
    correct: "d",
    },
    {
        question: "What author wrote the follow 'Life appears to me too short to be spent in nursing animosity or registering wrongs'?",
        a: "Ernest Hemingway",
        b: "Charlotte Bronte",
        c: "Toni Morrison",
        d: "J.K. Rowling",
        correct: "b",
    },
    {
        question: "What type of fiction does Raymond Carver write?",
        a: "Fantasy",
        b: "Mystery",
        c: "Dirty Realism",
        d: "Magical Realism",
        correct: "c",
    }
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit')

let currentQuiz = 0
let grade = 0

loadQuiz()
//function will load the next question in the quiz
//when the next question appears, the answer circles
//appear as blank
function loadQuiz() {
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitButton.addEventListener('click', () => {
    const answer =getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            grade++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${grade}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
