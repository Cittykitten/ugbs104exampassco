const questions = [
    {
        question: "Classical administrative theory was focused on __________",
        options: [
            "A. Productivity of individual.",
            "B. Employee motivation",
            "C. The total organization",
            "D. Operations management"
        ],
        answer: "C",
        explanation: "Classical administrative theory (Fayol, Barnard) focused on the total organization and managerial principles, unlike scientific management which focused on individual productivity."
    },
    {
        question: "________ and ________ are the two terms considered as the most important benchmarks for measuring organizational and managerial performance.",
        options: [
            "A. Controlling and Organizing",
            "B. Planning and Executing",
            "C. Performance and Productivity",
            "D. Efficiency and Effectiveness"
        ],
        answer: "D",
        explanation: "Efficiency (doing things right) and Effectiveness (doing the right things) are the two primary benchmarks of managerial and organizational performance."
    },
    {
        question: "The main idea underlying the ________ school of management is that “there is one best way of doing everything”",
        options: [
            "A. Bureaucratic",
            "B. Classical",
            "C. Contingency",
            "D. Systems"
        ],
        answer: "B",
        explanation: "The Classical school (especially Scientific Management) believed there is one best way to perform every task."
    },
    {
        question: "Identify the classical scientific management theorist amongst the following scholars.",
        options: [
            "A. Chester Barnard",
            "B. Henry Gantt",
            "C. Douglas McGregor",
            "D. Henri Fayol"
        ],
        answer: "B",
        explanation: "Henry Gantt (Gantt chart) is a classical scientific management theorist. Fayol is administrative, McGregor is behavioural, Barnard is administrative/systems."
    },
    {
        question: "According to Douglas McGregor, a _______________ manager views employees as lazy, untrustworthy and irresponsible",
        options: [
            "A. Caring",
            "B. Theory X",
            "C. Theory Y",
            "D. Proactive"
        ],
        answer: "B",
        explanation: "Theory X managers assume people dislike work, lack ambition, are irresponsible and prefer to be led (slides confirm this)."
    },
    {
        question: "According to Maslow, an employee will strive for the complex level need when _______________ is satisfied.",
        options: [
            "A. Esteem needs",
            "B. Basic Needs",
            "C. Social Needs",
            "D. Safety Needs"
        ],
        answer: "B",
        explanation: "Maslow’s progression principle states higher (more complex) needs become motivators only after lower-level (basic) needs are satisfied."
    },
    {
        question: "All the following are examples of organizational resources except",
        options: [
            "A. Products",
            "B. Human",
            "C. Raw Material",
            "D. Financial"
        ],
        answer: "A",
        explanation: "Organizational resources are human, financial, physical/raw materials and information. Products are outputs, not resources."
    },
    {
        question: "The top level of management is characterised by _______________ decision making",
        options: [
            "A. Tactical",
            "B. Economical",
            "C. Operational",
            "D. Strategic"
        ],
        answer: "D",
        explanation: "Top management focuses on strategic (long-term, organization-wide) decisions."
    },
    {
        question: "At middle level managerial role, _______________ skills is the most required.",
        options: [
            "A. Human",
            "B. Technical",
            "C. Conceptual",
            "D. Ergonomic"
        ],
        answer: "A",
        explanation: "Middle managers primarily need strong human/interpersonal skills to coordinate between top and lower levels."
    },
    {
        question: "All the following are examples of informational roles shouldered by the manager except",
        options: [
            "A. Negotiator",
            "B. Monitor",
            "C. Spokesperson",
            "D. Disseminator"
        ],
        answer: "A",
        explanation: "Mintzberg’s informational roles are Monitor, Disseminator and Spokesperson. Negotiator is a decisional role."
    },
    {
        question: "__________ requires managers to emphasise team work by building harmony and a sense of unity among employees.",
        options: [
            "A. Equity",
            "B. Esprit de corps",
            "C. Unity of command",
            "D. Unity of direction"
        ],
        answer: "B",
        explanation: "Esprit de corps (Fayol’s principle) promotes team spirit, harmony and unity among employees (explicitly in the slides)."
    },
    {
        question: "__________ stressed the need for a participatory management based on supportive relationships between the managers and subordinates.",
        options: [
            "A. Chester Bernard",
            "B. Elton Mayo",
            "C. Rensis Likert",
            "D. Henry L. Gantt"
        ],
        answer: "C",
        explanation: "Rensis Likert is known for System 4 (participative) management and supportive relationships."
    },
    {
        question: "......are targets or future end results set by lower management that address specific, measurable outcomes required from the lower level.",
        options: [
            "A. Tactical goals",
            "B. Systematic goals",
            "C. Strategic goals",
            "D. Operational goals"
        ],
        answer: "D",
        explanation: "Operational goals are specific, measurable, short-term targets set at lower levels."
    },
    {
        question: "A parking space has been earmarked and labelled for the Vice Chancellor of the University. According to Abraham Maslow, this act by management is aimed at satisfying the ______ needs of the Chancellor.",
        options: [
            "A. Physiological",
            "B. Safety",
            "C. Esteem",
            "D. Self-Actualization"
        ],
        answer: "C",
        explanation: "A reserved parking space signals status, recognition and prestige → Esteem needs."
    },
    {
        question: "Most Ghanaians are accustomed to having their calls to most telecommunication companies for customer support answered not by people but by automated answering systems. By this, the cost of hiring a live customer service agent is reduced. This arrangement is not __________ for customers but __________ for the telecommunication companies.",
        options: [
            "A. reliable; effective",
            "B. effective; efficient",
            "C. efficient; effective",
            "D. Effective and cost reducing"
        ],
        answer: "B",
        explanation: "Automated systems reduce cost (efficient for the company) but often frustrate customers (not effective for them)."
    },
    {
        question: "All of the following are techniques used in quantitative forecasting, except.",
        options: [
            "A. Econometrics",
            "B. Time series analysis",
            "C. Correlation analysis",
            "D. Users expectation method"
        ],
        answer: "D",
        explanation: "Users’ expectation method is a qualitative (judgmental) technique. The others are quantitative."
    },
    {
        question: "The control process that involves regulating ongoing activities to ensure that they conform to organisational standards is termed?",
        options: [
            "A. Concurrent control",
            "B. Feed forward control",
            "C. Financial Control",
            "D. Administrative control"
        ],
        answer: "A",
        explanation: "Concurrent (real-time/steering) control monitors and adjusts ongoing activities."
    },
    {
        question: "The process of significantly reducing the layers of middle management, expanding spans of control and shrinking the size of the work force in an organization is referred to as......",
        options: [
            "A. Decentralization",
            "B. Delegation",
            "C. Downsizing",
            "D. Reduce to Clear Process"
        ],
        answer: "C",
        explanation: "Downsizing involves reducing hierarchical layers, expanding spans of control and cutting workforce size."
    },
    {
        question: "Delegation occurs when",
        options: [
            "A. A manager abdicates some of his/her responsibility to employees in the unit",
            "B. A manager filters information in an attempt to stimulate conflict",
            "C. A manager transfers some of his/her authority to another person to perform a specific task",
            "D. A manager asks an employee to do him/her a personal favour"
        ],
        answer: "C",
        explanation: "Delegation is the transfer of authority (not responsibility) to another person to carry out a specific task."
    },
    {
        question: "Dr. Araba Angel is a leader who encourages team members to function independently and work out their problems by themselves and is available for advice and assistance. Dr. Araba Angel is practicing ---------------- style of leadership.",
        options: [
            "A. Laissez faire",
            "B. Autocratic",
            "C. Charismatic",
            "D. Intellectual"
        ],
        answer: "A",
        explanation: "Laissez-faire leadership gives team members high independence while remaining available for advice."
    },
    {
        question: "Which of the following sources of power often leads to resistance by subordinates?",
        options: [
            "A. Expert power",
            "B. Coercive power",
            "C. Legitimate power",
            "D. Referent power"
        ],
        answer: "B",
        explanation: "Coercive power (based on fear of punishment) frequently produces resistance and resentment."
    },
    {
        question: "All the following are barriers to planning except",
        options: [
            "A. Fear of failure to achieve the goals",
            "B. Unwillingness to give up alternative goals",
            "C. Scientific selection of goals",
            "D. Lack environmental knowledge"
        ],
        answer: "C",
        explanation: "Scientific/rational selection of goals is a good practice, not a barrier. The others hinder effective planning."
    },
    {
        question: "_______________ helps allocate service personnel to minimize customer waiting time and service cost.",
        options: [
            "A. Queuing theory",
            "B. Operations management",
            "C. Breakeven analysis",
            "D. Quantitative analysis"
        ],
        answer: "A",
        explanation: "Queuing theory is specifically used to balance waiting time and service cost by optimal staff allocation."
    },
    {
        question: "Is concerned with helping the organization produce its products more efficiently",
        options: [
            "A. Queuing theory",
            "B. Quantitative analysis",
            "C. Breakeven analysis",
            "D. Operations management"
        ],
        answer: "D",
        explanation: "Operations management focuses on efficient production of goods and services."
    },
    {
        question: "Giving workers job security and emphasizing group responsibility characterizes",
        options: [
            "A. Queuing Theory",
            "B. Theory X",
            "C. Theory Y",
            "D. Theory Z"
        ],
        answer: "D",
        explanation: "Theory Z (Ouchi) emphasizes long-term employment/job security and collective responsibility."
    },
    {
        question: "________________________ applies to all in the organisation from resource acquisition through production and into the distribution of finished product",
        options: [
            "A. ISO 9000",
            "B. Resource Utilization",
            "C. Total Quality Management",
            "D. Systems Approach"
        ],
        answer: "C",
        explanation: "Total Quality Management (TQM) is organization-wide and covers the entire value chain from inputs to distribution."
    },
    {
        question: "The following are helpful ways of maintaining high level of ethical standard except",
        options: [
            "A. Ethics training",
            "B. Whistleblower protection",
            "C. Code of ethical conduct",
            "D. Strict application of conflict of interest"
        ],
        answer: "D",
        explanation: "Ethics training, codes of conduct and whistleblower protection are standard positive mechanisms. Overly rigid conflict-of-interest enforcement can sometimes create problems and is listed as the exception in this context."
    },
    {
        question: "The ability to affect the behaviour of others is referred to as",
        options: [
            "A. Leadership",
            "B. Power",
            "C. Controlling",
            "D. Commanding"
        ],
        answer: "B",
        explanation: "Power is defined as the ability to influence or affect the behaviour of others."
    },
    {
        question: "According to Carroll's four description, a firm's obligation to comply with the laws that regulate business activities refers to the ____________________ responsibility of corporate social responsibility.",
        options: [
            "A. Legal",
            "B. Economic",
            "C. Social",
            "D. Ethical"
        ],
        answer: "A",
        explanation: "Carroll’s pyramid places Legal responsibility as the obligation to obey the law."
    },
    {
        question: "Maafia has been withdrawn from the University of Ghana for low performance. Maafia try to shift her failures on the death of his father and the lack of support from lecturers within reach. Maafia's persona could be described as having",
        options: [
            "A. A bad personality",
            "B. Impatient attitude",
            "C. External locus of control",
            "D. Internal locus of control"
        ],
        answer: "C",
        explanation: "External locus of control attributes success or failure to external factors (fate, others, circumstances) rather than personal effort."
    }
];

// ====================== QUIZ ENGINE ======================
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];
let timer;
let timeLeft = 30;          // ← changed to 20 seconds
let answered = false;

const questionContainer = document.querySelector('.question-container');
const nextButton = document.getElementById('next-btn');
const progressDisplay = document.querySelector('.progress');
const timerDisplay = document.querySelector('.timer');
const timeUpDisplay = document.querySelector('.time-up');
const resultsContainer = document.querySelector('.results');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    // Shuffle and select 20 questions
    selectedQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    resultsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    timeUpDisplay.style.display = 'none';
    questionContainer.style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    answered = false;
    timeUpDisplay.style.display = 'none';
    nextButton.style.display = 'none';

    const q = selectedQuestions[currentQuestionIndex];
    progressDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;

    questionContainer.innerHTML = `
        <div class="question">
            <h3>${q.question}</h3>
            <div class="options">
                ${q.options.map(opt => `
                    <div class="option" data-answer="${opt.charAt(0)}">${opt}</div>
                `).join('')}
            </div>
            <div class="feedback"></div>
        </div>
    `;

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 20;          // ← changed to 20 seconds
    updateTimerDisplay();
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time remaining: ${timeLeft} seconds`;
    timerDisplay.style.color = timeLeft <= 5 ? '#dc3545' : '#007bff';
}

function timeUp() {
    if (answered) return;
    answered = true;
    timeUpDisplay.style.display = 'block';
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    const q = selectedQuestions[currentQuestionIndex];
    const correctOpt = document.querySelector(`.option[data-answer="${q.answer}"]`);
    if (correctOpt) correctOpt.classList.add('correct');
    showFeedback(false, q.explanation);
    nextButton.style.display = 'inline-block';
}

function selectOption(e) {
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const selected = e.currentTarget;
    const selectedAnswer = selected.dataset.answer;
    const q = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === q.answer;

    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    selected.classList.add(isCorrect ? 'selected' : 'incorrect');
    const correctOpt = document.querySelector(`.option[data-answer="${q.answer}"]`);
    if (correctOpt) correctOpt.classList.add('correct');

    if (isCorrect) score++;

    userAnswers.push({
        question: q.question,
        selected: selectedAnswer,
        correct: q.answer,
        isCorrect
    });

    showFeedback(isCorrect, q.explanation);
    nextButton.style.display = 'inline-block';
}

function showFeedback(isCorrect, explanation) {
    const feedback = document.querySelector('.feedback');
    feedback.style.display = 'block';
    feedback.className = `feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
    feedback.innerHTML = isCorrect
        ? `<strong>Correct!</strong> ${explanation}`
        : `<strong>Incorrect.</strong> ${explanation}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    clearInterval(timer);
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    timeUpDisplay.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreDisplay.textContent = score;
}

restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);
