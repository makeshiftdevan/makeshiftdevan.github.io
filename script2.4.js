document.addEventListener("contextmenu", e => e.preventDefault());
const quiz = [{
    q: "A heavy crate (mass = m) is placed on a horizontal surface. If the coefficient of static friction between the crate and the surface is μs, what is the maximum horizontal force (Fapplied) that can be applied to the crate without causing it to move?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["Fapplied = μs * m * g", "Fapplied = m * g", "Fapplied = μs * m", "Fapplied = g / μs"],
    answer: 0,
    topic: "Maximum force without sliding"
}, {
    q: "A block (mass = m) is sliding on a horizontal surface with a constant velocity. What can you conclude about the net force acting on the block?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["The net force is zero.", "The net force is directed opposite to the motion.", "The net force is directed in the same direction as the motion.", "The net force is greater than the kinetic frictional force."],
    answer: 0,
    topic: "Constant velocity while forces are applied"
}, {
    q: "A book (mass = m) is placed on a horizontal table. If the coefficient of static friction between the book and the table is μs, what force is responsible for maintaining the book's constant velocity?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["Tension force (Ft)", "Weight force (Fg)", "Normal force (Fn)", "Static frictional force (Ff)"],
    answer: 3,
    topic: "Friction in equalibrium- Constant velocity"
}, {
    q: "A car is moving on a wet road with a coefficient of kinetic friction (μk) lower than that on a dry road. What effect does this have on the car's stopping distance when the brakes are applied?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["The stopping distance increases.", "The stopping distance decreases.", "The stopping distance remains unchanged.", "The effect depends on the car's speed."],
    answer: 0,
    topic: "Driving in rainy conditions"
}, {
    q: "A block (mass = m) is sliding on a horizontal surface with a constant velocity. What can you conclude about the sum of the forces acting on it?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["The sum of forces is zero.", "The sum of forces is nonzero but balanced.", "The sum of forces is nonzero and unbalanced.", "The sum of forces depends on the object's mass."],
    answer: 0,
    topic: "Equilibrium"
}, {
    q: "A person pushes a heavy box (mass = m) along a horizontal surface with a constant force. If the coefficient of kinetic friction is μk, what is the acceleration of the box?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["Acceleration = g / μk", "Acceleration = Fapplied - μk/ m", "Acceleration = (Fapplied/m) - μk * g", "Acceleration = Ft / m"],
    answer: 2,
    topic: "N2L with Friction"
}, {
    q: "A sled is pulled along a snowy surface with a coefficient of static friction (μs) greater than the coefficient of kinetic friction (μk). What happens when the applied force exceeds the static frictional force?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["The sled slows down.", "The sled experiences kinetic friction.", "The sled remains at rest.", "The sled moves with constant velocity."],
    answer: 1,
    topic: "Overcoming static Friction"
}, {
    q: "A heavy box (mass = m) is placed on a horizontal surface. If the coefficient of static friction between the box and the surface is μs, what is the minimum horizontal force (Fapplied) required to initiate motion?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["Fapplied = μs * m * g", "Fapplied = m * g", "Fapplied = μs * m", "Fapplied = g / μs"],
    answer: 0,
    topic: "Minimum force required to begin motion"
}, {
    q: "A car is moving on a flat road with a constant velocity. What can you conclude about the net force acting on the car?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["There is no net force acting on the car.", "The net force is directed forward.", "The net force is directed backward.", "The net force is directed upward."],
    answer: 0,
    topic: "Net force and constant velocity"
}, {
    q: "A block (mass = m) is sliding on a horizontal surface with a constant velocity due to a tension force. What can you conclude about the kinetic frictional force (Fk) acting on the block?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["Fk is greater than the tension force.", "Fk is less than the tension force.", "Fk is equal to the tension force.", "Fk is directed opposite to the motion."],
    answer: 2,
    topic: "N2L with friction"
}, {
    q: "A block (mass = m) is sliding on a horizontal surface. If the coefficient of kinetic friction between the block and the surface is μk, what happens to the acceleration of the block when the normal force (Fn) is reduced?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["The acceleration increases.", "The acceleration decreases.", "The acceleration remains the same.", "The acceleration becomes zero."],
    answer: 1,
    topic: "Reducing Friction by reducing the normal force"
}, {
    q: "A person is pushing a heavy box (mass = m) across a horizontal surface with an applied force (Fa). If the coefficient of kinetic friction (μk) is known, what equation can be used to determine the box's acceleration (a)?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["a = (Fa - μkmg) / m", "a = μk * g", "a = Fa / m", "a = g / (μk + Fa)"],
    answer: 0,
    topic: "N2L for acceleration"
}, {
    q: "A car is traveling on a flat road at an initial velocity 𝑣i. The car applies the brakes, causing it to come to a stop in a distance 𝑑 with a constant acceleration, a. If the coefficient of kinetic friction between the tires and the road is 𝜇k, what is the negative acceleration, 𝑎, of the car?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK",
    options: ["𝑎 = 𝑣i^2 / (2 * 𝑑)", "𝑎 = 𝑣i / 𝑑", "𝑎 = 2 * 𝜇k * 𝑔", "𝑎 = 𝑔 - 𝜇k"],
    answer: 0,
    topic: "Constant Acceleration"
}, {
    q: "A 20 N block is being pushed across a horizontal table by an 18 N force.  If the coefficient of kinetic friction between the block and the table is 0.4, find the acceleration of the block.",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["0.5 m/s/s", "1 m/s/s", "5 m/s/s", "7.5 m/s/s", "9 m/s/s"],
    answer: 2,
    topic: " Calculating acceleration with friction"
}, {
    q: "A crate of mass 100 kg is at rest on a horizontal floor.  The coefficient of static friction between the crate and the floor is 0.4, and the coefficient of kinetic friction is 0.3.  A force F of magnitude 350 N is then applied to the crate, parallel to the floor.  Which of the following is true?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["The crate will not move.", "The crate will slide across the floor at a constant speed of 1.5 m/s.", "The crate will slide across the floor at a constant speed of 0.5 m/s.", "The static friction force, which is the reaction force to F as guaranteed by Newton’s Third Law, will also have a magnitude of 350 N.", "The crate will accelerate across the floor at 0.5 m/s/s."],
    answer: 0,
    topic: " Understanding the impact of net force"
}, {
    q: "A block of weight 100 N is placed on a horizontal surface.  The coefficient of static friction between the surfaces is 0.7.  A horizontal force of 50 N tries to move the block along the surface.  Which of the following is the magnitude of the frictional force acting on the block?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["0 N", "35 N", "50 N", "70 N", "100 N"],
    answer: 2,
    topic: " Calculating frictional force"
}, {
    q: "For a 7.5 kg object on a horizontal surface that has a coefficient of static friction of 1.0, and a coefficient of kinetic friction of 0.8, the maximum parallel force which will NOT set the object in motion is",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["24 N", "52 N", "60 N", "75 N", "83 N"],
    answer: 3,
    topic: " Maximum parallel force"
}, {
    q: "For a 5.0 kg object on a horizontal surface that has a coefficient of static friction of 0.2 and a coefficient of kinetic friction of 0.1, what is the parallel force necessary to accelerate the object at 12 m/s/s?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["50 N", "55 N", "60 N", "65 N", "70 N"],
    answer: 3,
    topic: " Parallel force"
}, {
    q: "What is the expected direction of kinetic friction?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["Kinetic Friction is a ficticous force with no apparent direction", "Kinetic Friction always assists sliding", "Kinetic Friction always assists motion", "Kinetic Friction always opposes sliding", "Kinetic Friction always opposes motion"],
    answer: 3,
    topic: " Parallel force"
}, {
    q: 'A box of mass m slides across a rough floor for 8 seconds before coming to a stop.  The key word "sliding" indicates the use of which of the following:',
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["Kinetic Friction", "Static Friction", "No Friction", "All Types of Friction", "Rotational Kinetic Friction"],
    answer: 0,
    topic: " Kinetic vs Static Friction"
}, {
    q: 'A box of mass m slides across a rough floor for 8 seconds before coming to a stop.  The key word "rough" indicates which of the following:',
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["Friction exists", "Friction is negligible", "Friction is a construct of the mind", "Friction only exists in an inertial frame of reference", "Kinetic energy is being used to rotate the box"],
    answer: 0,
    topic: " Identifying Friction"
}, {
    q: "When presented with a problem where Forces exist, Newton's 2nd Law is often very useful in solving problems.  What is the \"Skapetis Slang\", for newton's 2nd Law?",
    imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",
    options: ["Stuff that makes it go minus stuff holding it back equals one half mass times velocity squared", "Stuff that makes it go minus stuff holding it back = mass times accelertion", "Stuff that makes it go minus stuff holding it back = equilibrium", "Stuff that makes it go minus stuff holding it back equals zero", "Stuff that makes it go minus stuff holding it back"],
    answer: 1,
    topic: " Using Newton's 2nd Law"
}];
questionNumber = document.querySelector(".question-number"), questionText = document.querySelector(".question-text"), optionContainer = document.querySelector(".option-container"), homeBox = document.querySelector(".home-box"), firstBox = document.querySelector(".first-box"), quizBox = document.querySelector(".quiz-box"), resultBox = document.querySelector(".result-box"), SPREADSHEET_ID = "1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc", CLIENT_ID = "15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com", SCOPE = "https://www.googleapis.com/auth/spreadsheets", API_KEY = "AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50";
var modal = document.getElementById("myModal"),
    btn = document.getElementById("validation"),
    span = document.getElementsByClassName("close")[0],
    spanOne = document.getElementsByClassName("close")[1],
    modalOne = document.getElementById("remindModal"),
    btn1 = document.getElementById("start");
let currentQuestion, questionCounter = 0,
    availableQuestions = [],
    availableOptions = [],
    correctAnswers = 0,
    attempt = 0,
    topicList = [];
var d = new Date;
const date = d.getMonth() + "/" + d.getDate() + "/" + d.getYear(),
    startTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

function setAvailableQuestions() {
    for (var e = 0; 5 != availableQuestions.length; e++) randomNum = Math.floor(Math.random() * quiz.length), availableQuestions.push(quiz[randomNum]), quiz.splice(randomNum, 1)
}

function quizEnd() {
    var e = document.querySelector("input");
    document.getElementById("validation").addEventListener("submit", function(t) {
        t.preventDefault(), "2,3" === e.value ? enterInfo() : (modal.style.display = "block", span.onclick = function() {
            modal.style.display = "none"
        }, window.onclick = function(e) {
            e.target == modal && (modal.style.display = "none")
        })
    })
}

function enterInfo() {
    homeBox.classList.remove("hide"), firstBox.classList.add("hide")
}

function reminder() {
    modalOne.style.display = "block", spanOne.onclick = function() {
        modalOne.style.display = "none", startQuiz()
    }
}

function startQuiz() {
    homeBox.classList.add("hide"), quizBox.classList.remove("hide")
}

function getNewQuestion() {
    currentQuestion = availableQuestions[++questionCounter - 1], questionNumber.innerHTML = "Question " + questionCounter + " of " + availableQuestions.length, questionText.innerHTML = currentQuestion.q;
    var e = new Image;
    e.src = currentQuestion.imgURL, document.querySelector(".question-text").appendChild(e);
    const t = currentQuestion.options.length;
    for (let e = 0; e < t; e++) availableOptions.push(e);
    optionContainer.innerHTML = "";
    let o = .2;
    for (let e = 0; e < t; e++) {
        const e = availableOptions[Math.floor(Math.random() * availableOptions.length)],
            t = availableOptions.indexOf(e);
        availableOptions.splice(t, 1);
        const n = document.createElement("div");
        n.innerHTML = currentQuestion.options[e], n.id = e, n.style.animationDelay = o + "s", o += .2, n.className = "option", optionContainer.appendChild(n), n.setAttribute("onclick", "getResult(this)")
    }
}
let selectedOption = null;

function getResult(e) {
    if (null === selectedOption) {
        const t = parseInt(e.id);
        selectedOption = t, document.querySelectorAll(".option").forEach(e => {
            e.classList.remove("correct", "wrong")
        }), selectedOption === currentQuestion.answer ? (e.classList.add("correct"), correctAnswers++) : (e.classList.add("wrong"), topicList.push(currentQuestion.topic)), document.getElementById("changeMindButton").disabled = !1
    }
}

function changeMind() {
    selectedOption = null, document.querySelectorAll(".option").forEach(e => {
        e.classList.remove("correct", "wrong")
    }), document.getElementById("changeMindButton").disabled = !0
}

function next() {
    null !== selectedOption ? (selectedOption = null, questionCounter === availableQuestions.length ? (console.log("Exit Ticket Completed"), quizOver()) : getNewQuestion()) : alert("Please select an answer before moving to the next question.")
}

function unclickableOptions() {
    const e = optionContainer.children.length;
    for (let t = 0; t < e; t++) optionContainer.children[t].classList.add("already-answered")
}

function quizOver() {
    quizBox.classList.add("hide"), resultBox.classList.remove("hide"), quizResult()
}

function quizResult() {
    var e = document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        t = document.getElementById("period").value,
        o = document.getElementById("subject").value,
        n = document.getElementById("lesson").value,
        s = correctAnswers / availableQuestions.length * 100;
    let i = new Date,
        a = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds();
    resultBox.querySelector(".full-name").innerHTML = e, resultBox.querySelector(".full-name").innerHTML = e, resultBox.querySelector(".subject").innerHTML = o, resultBox.querySelector(".period").innerHTML = t, resultBox.querySelector(".lesson").innerHTML = n, resultBox.querySelector(".startTime").innerHTML = startTime, resultBox.querySelector(".endTime").innerHTML = a, resultBox.querySelector(".total-question").innerHTML = availableQuestions.length, resultBox.querySelector(".total-correct").innerHTML = correctAnswers, resultBox.querySelector(".total-wrong").innerHTML = availableQuestions.length - correctAnswers, resultBox.querySelector(".percentage").innerHTML = s.toFixed() + "%", resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + availableQuestions.length, resultBox.querySelector(".topic-list").innerHTML = topicList, s = correctAnswers / availableQuestions.length * 100;
    var r = document.forms["google-sheet"],
        l = new FormData(r);
    l.append("Start Time", startTime), l.append("End Time", a), l.append("Percentage", s), l.append("Period", t), l.append("Subject", o), l.append("Topic List", topicList), l.append("Lesson", n), fetch("https://script.google.com/macros/s/AKfycbwJLk90wLnD0HCeDP01HrrJM9G00ms1EeEWJDwcZUwDl2Kb55pozY2wCwHIYA5liD6yOQ/exec", {
        method: "POST",
        body: l
    })
}
window.onload = function() {
    quizBox.classList.add("hide"), setAvailableQuestions(), getNewQuestion()
};
var a = b ? c % d : e[f];
a = b ? c % d : e[f]; // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
