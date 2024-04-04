const pdpTest = {
    testName: "Тест з Правил Дорожнього Руху України",
    questions: [
        {
            question: "Що означає знак 'Зупинка заборонена'?",
            answers: [
                { answer: "Зупинка дозволена", isCorrect: false },
                { answer: "Зупинка заборонена", isCorrect: true },
                { answer: "Паркування дозволене", isCorrect: false },
                { answer: "Обгін заборонено", isCorrect: false }
            ]
        },
        {
            question: "Що означає світлофор з горінням зеленого світла?",
            answers: [
                { answer: "Стояти", isCorrect: false },
                { answer: "Проїжджати", isCorrect: true },
                { answer: "Поворот ліворуч", isCorrect: false },
                { answer: "Поворот праворуч", isCorrect: false }
            ]
        },
        {
            question: "Які дії дозволені на пішохідному переході?",
            answers: [
                { answer: "Проїжджати на велосипеді", isCorrect: false },
                { answer: "Розмовляти по телефону", isCorrect: false },
                { answer: "Проїжджати лише після переходу всіх пішоходів", isCorrect: true },
                { answer: "Вижидати автобуса", isCorrect: false }
            ]
        },
        {
            question: "Як правильно встановлюється домкрат?",
            answers: [
                { answer: "Якомога ближче до маточини колеса.", isCorrect: true },
                { answer: "Якомога далі від маточини колеса.", isCorrect: false }
            ]
        },
        {
            question: "Якщо людина знаходиться без свідомості та не має травм, її треба?",
            answers: [
                { answer: "Не чіпати.", isCorrect: false },
                { answer: "Перевести в стабільне положення.", isCorrect: false },
                { answer: "Посадити, щоб голова була в припіднятому положенні.", isCorrect: true }
            ]
        },
        {
            question: "Яка мінімальна тривалість відпочинку та харчування водія після 4 годин керування, якщо не настає період щоденного (міжзмінного) відпочинку?",
            answers: [
                { answer: "Не менше 1 години.", isCorrect: false },
                { answer: "Не менше 45 хвилин.", isCorrect: true },
                { answer: "Не менше 50 хвилин.", isCorrect: false }
            ]
        }
    ]
};

const testContainer = document.getElementById('test-container');
const scoreDisplay = document.getElementById('score');
const resultContainer = document.querySelector('.result');

function displayTest() {
    pdpTest.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul class="answers">
                ${question.answers.map((answer, ansIndex) => `
                    <li>
                        <input type="radio" id="q${index}-ans${ansIndex}" name="q${index}" value="${ansIndex}">
                        <label for="q${index}-ans${ansIndex}">${answer.answer}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        testContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    const totalQuestions = pdpTest.questions.length;
    let correctAnswers = 0;

    pdpTest.questions.forEach((question, index) => {
        const selectedAnswerIndex = document.querySelector(`input[name="q${index}"]:checked`).value;
        const selectedAnswer = question.answers[selectedAnswerIndex];
        const label = document.querySelector(`label[for="q${index}-ans${selectedAnswerIndex}"]`);
        if (selectedAnswer.isCorrect) {
            correctAnswers++;
            label.style.color = 'green'; 
        } else {
            label.style.color = 'red'; 
        }
    });

    const score = `${correctAnswers}/${totalQuestions}`;
    scoreDisplay.textContent = `Ваш результат: ${score}`;
}

displayTest();

const submitButton = document.createElement('button');
submitButton.textContent = 'Перевірити результат';
submitButton.addEventListener('click', () => {
    calculateScore();
    resultContainer.style.display = 'block';
});
testContainer.appendChild(submitButton);
