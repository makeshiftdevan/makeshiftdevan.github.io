document.addEventListener("contextmenu", e => e.preventDefault());
    const quiz = [
        {
           q: "When a ball is thrown horizontally from a certain height, how does its horizontal velocity change as it moves through the air?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It increases', 'It decreases', 'It remains constant', 'It varies with time', 'None of the above'],
           answer: 2,
           topic: "Projectile Motion"
        },{
           q: "What happens to the vertical acceleration of a projectile near the Earth's surface?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It is positive', 'It is negative', 'It is zero', 'It varies with time', 'None of the above'],
           answer: 1,
           topic: "Projectile Motion"
        },{
           q: "In the absence of air resistance, what is the shape of the trajectory of a projectile launched horizontally?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['A straight line', 'A parabola', 'An ellipse', 'A circle', 'None of the above'],
           answer: 1,
           topic: " Projectile Motion"
        },{
           q: "When you throw a ball horizontally and drop another ball from the same height simultaneously, which ball hits the ground first?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['The thrown ball', 'The dropped ball', 'Both hit simultaneously', 'Cannot determine without more information', 'None of the above'],
           answer: 1,
           topic: " Projectile Motion"
        }, {
           q: "What happens to the horizontal velocity of a projectile over time in the absence of air resistance?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It increases', 'It decreases', 'It remains constant', 'It varies with height', 'None of the above'],
           answer: 2,
           topic: " Projectile Motion"
        },
         {
           q: "At the highest point of a projectile's trajectory, what can you say about its vertical velocity?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It is zero', 'It is maximum', 'It is minimum', 'It is equal to its horizontal velocity', 'None of the above'],
           answer: 0,
           topic: " Projectile Motion"
        },
        
        {
           q: "If you want to maximize the range of a projectile launched from the ground, at what angle should it be launched relative to the horizontal?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['0 degrees', '30 degrees', '45 degrees', '60 degrees', '90 degrees'],
           answer: 2,
           topic: " Projectile Range"
        },{
           q: "What is the relationship between the time of flight and the initial vertical velocity of a projectile?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['Directly proportional', 'Inversely proportional', 'No relationship', 'Depends on the angle of projection', 'None of the above'],
           answer: 0,
           topic: " Projectile Time of Flight"
        },
         {
           q: "If two projectiles are launched with the same initial speed but at different launch angles, which one will stay in the air longer?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['The one with a smaller angle', 'The one with a larger angle', 'Both stay in the air for the same time', 'Cannot determine without more information', 'None of the above'],
           answer: 1,
           topic: " Projectile Time of Flight"
        },
        
        {
           q: "If a projectile is launched with an initial velocity of 20 m/s at an angle of 30 degrees above the horizontal, what is its initial vertical velocity?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['0 m/s', '10 m/s', '15 m/s', '20 m/s', 'None of the above'],
           answer: 1,
           topic: " Projectile Motion"
        },
        
        {
           q: "In a vacuum, if you throw a ball upward at an angle of 45 degrees to the horizontal, what is the shape of the trajectory?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['A straight line', 'A parabola', 'An ellipse', 'A circle', 'None of the above'],
           answer: 1,
           topic: " Projectile Motion"
        }, {
           q: "When a projectile is launched from an elevated surface at an angle, what affects the time it takes to reach the ground?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['The initial speed only', 'The launch angle only', 'Both the initial speed and launch angle', 'The shape of the object', 'None of the above'],
           answer: 2,
           topic: " Projectile Time of Flight"
        },
        
        {
           q: "If a projectile is launched horizontally from a certain height, what can you say about its time of flight compared to a projectile launched with the same speed at an angle?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['Time of flight is greater', 'Time of flight is smaller', 'Time of flight is the same', 'Cannot determine without more information', 'None of the above'],
           answer: 2,
           topic: " Projectile Time of Flight"
        },
         {
           q: "What happens to the range of a projectile when you increase its initial speed while keeping the launch angle constant?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['The range increases', 'The range decreases', 'The range remains the same', 'The range becomes zero', 'None of the above'],
           answer: 0,
           topic: " Projectile Range"
        },
         {
           q: "When a projectile reaches the highest point of its trajectory, what can you say about its vertical acceleration?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It is positive', 'It is negative', 'It is zero', 'It varies with time', 'None of the above'],
           answer: 1,
           topic: " Projectile Motion"
        }, {
           q: "If a projectile is launched with an initial velocity of 10 m/s at an angle of 60 degrees above the horizontal, what is its maximum height?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['0 m', '5 m', '10 m', '15 m', '20 m'],
           answer: 3,
           topic: " Projectile Motion"
        },
        {
           q: "What determines the time of flight of a projectile launched at an angle to the horizontal?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['Only the initial speed', 'Only the launch angle', 'Both the initial speed and launch angle', 'The shape of the object', 'None of the above'],
           answer: 2,
           topic: " Projectile Time of Flight"
        },
         {
           q: "When a projectile is launched horizontally, what is the shape of its trajectory in the absence of air resistance?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['A straight line', 'A parabola', 'An ellipse', 'A circle', 'None of the above'],
           answer: 0,
           topic: " Projectile Motion"
        },
{
           q: "If two projectiles are launched at the same angle but with different initial speeds, which one will have a greater range?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['The one with the lower speed', 'The one with the higher speed', 'Both have the same range', 'Cannot determine without more information', 'None of the above'],
           answer: 1,
           topic: " Projectile Range"
        },
        {
           q: "When a projectile is launched at an angle, what is the relationship between its horizontal and vertical displacements at the same time?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['They are equal', 'Horizontal displacement is greater', 'Vertical displacement is greater', 'No relationship', 'None of the above'],
           answer: 0,
           topic: " Projectile Motion"
        },
         {
           q: "In a vacuum, if you throw a ball vertically upward, what is the shape of the trajectory?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['A straight line', 'A parabola', 'An ellipse', 'A circle', 'None of the above'],
           answer: 0,
           topic: " Projectile Motion"
        },
        {
           q: "What factors affect the range of a projectile launched at an angle to the horizontal?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['Only the initial speed', 'Only the launch angle', 'Both the initial speed and launch angle', 'The shape of the object', 'None of the above'],
           answer: 2,
           topic: " Projectile Range"
        }, {
           q: "If you want to maximize the height reached by a projectile launched from the ground, at what angle should it be launched relative to the horizontal?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['0 degrees', '30 degrees', '45 degrees', '60 degrees', '90 degrees'],
           answer: 2,
           topic: " Projectile Height"
        },
        {
           q: "When a projectile is launched horizontally from a certain height, what can you say about its range compared to a projectile launched with the same speed at an angle?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['Range is greater', 'Range is smaller', 'Range is the same', 'Cannot determine without more information', 'None of the above'],
           answer: 0,
           topic: " Projectile Range"
        },
        {
           q: "In the absence of air resistance, what can you say about the horizontal motion of a projectile after it is launched?",
           //blank image for questions without images
           imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
           options: ['It accelerates horizontally', 'It decelerates horizontally', 'It moves with constant horizontal velocity', 'It moves with variable horizontal velocity', 'None of the above'],
           answer: 2,
           topic: " Projectile Motion"
        }
    
]

        questionNumber = document.querySelector(".question-number"),
        questionText = document.querySelector(".question-text"),
        optionContainer = document.querySelector(".option-container"),
        homeBox = document.querySelector(".home-box"),
        firstBox = document.querySelector(".first-box"),
        quizBox = document.querySelector(".quiz-box"),
        resultBox = document.querySelector(".result-box"),
        SPREADSHEET_ID = "1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc",
        CLIENT_ID = "15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com",
        SCOPE = "https://www.googleapis.com/auth/spreadsheets",
        API_KEY = "AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50";
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
            t.preventDefault();
            "password" === e.value ? enterInfo() : (modal.style.display = "block", span.onclick = function() {
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
    let selectedOption = null; // Variable to store the user's selected option

    function getResult(e) {
    if (selectedOption === null) {
        const selectedId = parseInt(e.id);
        selectedOption = selectedId; // Store the user's selected option
        const options = document.querySelectorAll(".option");
        options.forEach((option) => {
            option.classList.remove("correct", "wrong"); // Remove any highlighting from previous selections
        });
        if (selectedOption === currentQuestion.answer) {
            e.classList.add("correct");
            correctAnswers++; // Increment correctAnswers when the answer is correct
        } else {
            e.classList.add("wrong");
            topicList.push(currentQuestion.topic);
        }
        document.getElementById("changeMindButton").disabled = false; // Enable the "Change Mind" button
    }
}

function changeMind() {
    selectedOption = null; // Reset the selected option
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.classList.remove("correct", "wrong"); // Remove any highlighting
    });
    document.getElementById("changeMindButton").disabled = true; // Disable the "Change Mind" button
}

function next() {
    if (selectedOption !== null) {
        selectedOption = null; // Reset the selected option when moving to the next question
        if (questionCounter === availableQuestions.length) {
            console.log("Exit Ticket Completed");
            quizOver();
        } else {
            getNewQuestion();
        }
    } else {
        alert("Please select an answer before moving to the next question.");
    }
}

    
    function unclickableOptions() {
        const e = optionContainer.children.length;
        for (let t = 0; t < e; t++) optionContainer.children[t].classList.add("already-answered")
    }
    
  /*   function next() {
        userChoice = null; // Reset the user's choice when moving to the next question.
            if (questionCounter === availableQuestions.length) {
                console.log("Exit Ticket Completed");
                quizOver();
            } else {
                getNewQuestion();
            }
        } */
    
    function quizOver() {
        quizBox.classList.add("hide"), resultBox.classList.remove("hide"), quizResult()
    }
     //get the results
     function quizResult() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var fullName = firstName + " " + lastName;
            var period = document.getElementById("period").value;
            var subject = document.getElementById("subject").value;
            var lesson = document.getElementById("lesson").value;
            var percentage = (correctAnswers / availableQuestions.length) * 100;
            //get the date and time again to calculate total time
            let updateTime = new Date();
            let endTime = updateTime.getHours() + ":" + updateTime.getMinutes() + ":" + updateTime.getSeconds();
            resultBox.querySelector(".full-name").innerHTML = fullName;
            resultBox.querySelector(".full-name").innerHTML = fullName;
            resultBox.querySelector(".subject").innerHTML = subject;
            resultBox.querySelector(".period").innerHTML = period;
            resultBox.querySelector(".lesson").innerHTML = lesson;
            resultBox.querySelector(".startTime").innerHTML = startTime;
            resultBox.querySelector(".endTime").innerHTML = endTime;
            resultBox.querySelector(".total-question").innerHTML = availableQuestions.length;
            resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
            resultBox.querySelector(".total-wrong").innerHTML = availableQuestions.length - correctAnswers;
            resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
            resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + availableQuestions.length;
            resultBox.querySelector(".topic-list").innerHTML = topicList;
            const scriptURL = "https://script.google.com/macros/s/AKfycbwJLk90wLnD0HCeDP01HrrJM9G00ms1EeEWJDwcZUwDl2Kb55pozY2wCwHIYA5liD6yOQ/exec"
            var percentage = (correctAnswers / availableQuestions.length) * 100;
            var form = document.forms['google-sheet']
            var fetchBody = new FormData(form);
            fetchBody.append('Start Time', startTime);
            fetchBody.append('End Time', endTime);
            fetchBody.append('Percentage', percentage);
            fetchBody.append('Period', period);
            fetchBody.append('Subject', subject);
            fetchBody.append('Topic List', topicList);
            fetchBody.append('Lesson', lesson);
            fetch(scriptURL, { method: 'POST', body: fetchBody });
        }
        window.onload = function () {
            quizBox.classList.add("hide");
            // first set all questions available in availableQuestions Array
            setAvailableQuestions();
            // Next, get a new question
            getNewQuestion();
        }
   /*  function quizResult() {
        var e = document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
            t = document.getElementById("period").value,
            o = document.getElementById("subject").value,
            n = document.getElementById("lesson").value,
            i = correctAnswers / availableQuestions.length * 100;
        let a = new Date,
            s = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        resultBox.querySelector(".full-name").innerHTML = e, resultBox.querySelector(".full-name").innerHTML = e, resultBox.querySelector(".subject").innerHTML = o, resultBox.querySelector(".period").innerHTML = t, resultBox.querySelector(".lesson").innerHTML = n, resultBox.querySelector(".total-question").innerHTML = availableQuestions.length, resultBox.querySelector(".total-attempt").innerHTML = attempt, resultBox.querySelector(".total-correct").innerHTML = correctAnswers, resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers, resultBox.querySelector(".percentage").innerHTML = i.toFixed() + "%", resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + availableQuestions.length, resultBox.querySelector(".topic-list").innerHTML = topicList;
        i = correctAnswers / availableQuestions.length * 100;
        var r = document.forms["google-sheet"],
            l = new FormData(r);
        l.append("Start Time", startTime), l.append("End Time", s), l.append("Percentage", i), l.append("Period", t), l.append("Subject", o), l.append("Topic List", topicList), l.append("Lesson", n), fetch("https://script.google.com/macros/s/AKfycbzEB-W2vYa08OmRjjXYiT7aUnueSH2E-46tg4_YiTVjPHiw7RVLNXPJ6BhqFPw-uyHO1A/exec", {
            method: "POST",
            body: l
        })
    }
    window.onload = function() {
        quizBox.classList.add("hide"), setAvailableQuestions(), getNewQuestion()
    }; */
		//DS