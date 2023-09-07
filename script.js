<script>

	//question bank

	const quiz = [{

		q: "A rocket is launched from rest directly upward in such a way as to have a constant acceleration of 6 m/s/s.  How much time does it take for the rocket to reach a height of 75 meters?",
        
        //blank image for questions without images
        imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
		
        options: ['3 s', '4 s', '5 s', '10 s', '25 s'],

		answer: 2,

		topic: " Displacement Equation"

	}, {

    q: "A rocket is launched from rest directly upward in such a way as to have a constant acceleration of 20 m/s/s.  How much time does it take for the rocket to reach a height of 1000 meters?",

//blank image for questions without images
imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',

options: ['3 s', '4 s', '5 s', '10 s', '25 s'],

answer: 3,

topic: " Displacement Equation"

},{

		q: "Suppose that vector A = 5 @ 53 degrees, and vector B = 10 @ 143 degrees.  In component form, what is A + B? (x,y)",
        
        //blank image for questions without images
        imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',
		
        options: ['(5, -10)', '(11, -2)', '(-5, 10)', '(-11, 2)', '(-11, -10)'],

		answer: 2,

		topic: " Vector Components"
	}, 
    {

q: "Suppose that vector A = 10 @ -37 degrees and vector B = 5 @ 127 degrees.  In component form, what is A - B?",

//blank image for questions without images
imgURL: 'https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku',

options: ['(5, -2)', '(-5, 2)', '(-11, 10)', '(11, -10)', '(11, 10)'],

answer: 3,

topic: " Vector Components"
},
    {

		q: "Which vectors have the same direction as -\'X\'?",
        
        imgURL: 'https://drive.google.com/uc?export=view&id=1EmfFvDvChytICTT9IAya8zkvg2Fb5-si',
		
        options: ['B,E,H', 'A, C', 'A, C, G ', 'A, G', 'D, F, G'],

		answer: 1,

		topic: " Vector Direction"

	}, {

        q: " ",

        imgURL: 'https://drive.google.com/uc?export=view&id=1W0-tSNB2J9Vor8KLewZ_FCaGUWUcL9A2',

        options: ['A>B>E=F>G>H>C>D', 'A>B>E=F>A>H>C>D', 'A>B>E>F>G>H>C>D', 'D>C>E=F>H>G>B>A', 'D>C>H>G>E=F>B>A'],

        answer: 0,

        topic: " Adding Vectors"

},
    {

        q: "Which of the following vectors has an x-component equal to 0?",
        
        imgURL: 'https://drive.google.com/uc?export=view&id=1_n8wD8B1bKMQTmRCv42kaFmVtSaPSzL3',
        
        options: ['G', 'C', 'E', 'C and E', 'A'],

        answer: 0,

        topic: " Vector Components"

}, {

q: "Which of the following vectors has a y-component equal to 0?",

imgURL: 'https://drive.google.com/uc?export=view&id=1_n8wD8B1bKMQTmRCv42kaFmVtSaPSzL3',

options: ['G', 'C', 'E', 'C and E', 'A'],

answer: 3,

topic: " Vector Components"

}, {

q: "Which student is correct?",

imgURL: 'https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp',

options: ['All of them', 'None of them', 'Ayesha', 'Bashir', 'Claudio'],

answer: 1,

topic: " Adding Vectors"

}

	] 

	const questionNumber = document.querySelector(".question-number");

	const questionText = document.querySelector(".question-text");

	const optionContainer = document.querySelector(".option-container");

	const homeBox = document.querySelector(".home-box");

	const firstBox = document.querySelector(".first-box");

	const quizBox = document.querySelector(".quiz-box");

	const resultBox = document.querySelector(".result-box");

	const SPREADSHEET_ID = '1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc';

	const CLIENT_ID = '15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com';

	const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

	const API_KEY = 'AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50';

	var modal = document.getElementById("myModal");

	var btn = document.getElementById("validation");

	var span = document.getElementsByClassName("close")[0];

	var spanOne = document.getElementsByClassName("close")[1];

	var modalOne = document.getElementById("remindModal");

	var btn1 = document.getElementById("start");

	let questionCounter = 0;

	let currentQuestion;

	let availableQuestions = [];

	let availableOptions = [];

	let correctAnswers = 0;

	let attempt = 0;

	let topicList = [];

	var d = new Date();

	const date = d.getMonth()+ "/"+d.getDate()+"/" + d.getYear();

	const startTime = d.getHours()+":"+d.getMinutes()+":" +d.getSeconds();



	function setAvailableQuestions() {

		for(var i = 0; availableQuestions.length != 5; i++) {

			randomNum = Math.floor(Math.random() * quiz.length);

			availableQuestions.push(quiz[randomNum]);

			quiz.splice(randomNum, 1);

		}

	}



	function quizEnd() {

		var fileNotFound = document.querySelector("input");

		document.getElementById("validation").addEventListener('submit', validate)



		function validate(e) {

			e.preventDefault();

			let valid = true;

			if(fileNotFound.value === "tryAgain") {

				enterInfo();

			} else {

				modal.style.display = "block";

				// When the user clicks on <span> (x), close the modal

				span.onclick = function() {

						modal.style.display = "none";

					}

					// When the user clicks anywhere outside of the modal, close it

				window.onclick = function(event) {

					if(event.target == modal) {

						modal.style.display = "none";

					}

				}

			}

		}

	}



	function enterInfo() {

		homeBox.classList.remove("hide");

		firstBox.classList.add("hide");

	}



	function reminder() {

		modalOne.style.display = "block";

		// When the user clicks on <span> (x), close the modal

		spanOne.onclick = function() {

			modalOne.style.display = "none"; {

				startQuiz();

			}

		}

	}



	function startQuiz() {

		//hide the homeBox

		homeBox.classList.add("hide");

		//show resultBox

		quizBox.classList.remove("hide");

	}

	//set question number, question, and options

	function getNewQuestion() {

		questionCounter++;

		//set question number

		currentQuestion = availableQuestions[questionCounter - 1]

		questionNumber.innerHTML = "Question " + questionCounter + " of " + availableQuestions.length;

		//set question text

		questionText.innerHTML = currentQuestion.q;

		//add image to question

		var img = new Image();

		img.src = currentQuestion.imgURL

		document.querySelector('.question-text').appendChild(img);
	

		//set options

		// get the length of options

		const optionLen = currentQuestion.options.length

			//push options into availableOptions Array

		for(let i = 0; i < optionLen; i++) {

			availableOptions.push(i)

		}

		optionContainer.innerHTML = '';

		let animationDelay = 0.2;

		//create options in html

		for(let i = 0; i < optionLen; i++) {

			// random option

			const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

			// remove the 'optionIndex' from availableOptions so there is not a repeat option

			const index2 = availableOptions.indexOf(optonIndex);

			//remove the 'optonIndex' from the availableOptions so there are no repeat options

			availableOptions.splice(index2, 1);

			const option = document.createElement("div");

			option.innerHTML = currentQuestion.options[optonIndex];

			option.id = optonIndex;

			option.style.animationDelay = animationDelay + 's';

			animationDelay = animationDelay + 0.2;

			option.className = "option";

			optionContainer.appendChild(option)

			option.setAttribute("onclick", "getResult(this)");

		}

	}

	//get the result of the current attempt question

	function getResult(element) {

		const id = parseInt(element.id);

		//get the answer by comparing the id of clicked option

		if(id === currentQuestion.answer) {

			//set the color to the correct option (green?)

			element.classList.add("correct");

			correctAnswers++;

		} else {

			//set the color to the wrong option (red?)

			element.classList.add("wrong");

			topicList.push(currentQuestion.topic);

		}

		attempt++;

		unclickableOptions();

	}

	// make all the options unclickable after a choice has been selected

	function unclickableOptions() {

		const optionLen = optionContainer.children.length;

		for(let i = 0; i < optionLen; i++) {

			optionContainer.children[i].classList.add("already-answered");

		}

	}



	function next() {

		if(questionCounter === availableQuestions.length) {

			console.log("Exit Ticket Completed")

				//alert('Submit and view results?')

			quizOver();

		} else {

			/*img.onload = () => {

    URL.revokeObjectURL(img.src);

  	*/

			getNewQuestion();

		}

	}



	function quizOver() {

		//hide the quiz box

		quizBox.classList.add("hide");

		//show resultBox

		resultBox.classList.remove("hide");

		quizResult();

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

		let endTime = updateTime.getHours()+":"+updateTime.getMinutes()+":"+updateTime.getSeconds();

		resultBox.querySelector(".full-name").innerHTML = fullName;

		resultBox.querySelector(".full-name").innerHTML = fullName;

		resultBox.querySelector(".subject").innerHTML = subject;

		resultBox.querySelector(".period").innerHTML = period;

		resultBox.querySelector(".lesson").innerHTML = lesson;

		resultBox.querySelector(".total-question").innerHTML = availableQuestions.length;

		resultBox.querySelector(".total-attempt").innerHTML = attempt;

		resultBox.querySelector(".total-correct").innerHTML = correctAnswers;

		resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;

		resultBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";

		resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + availableQuestions.length;

		resultBox.querySelector(".topic-list").innerHTML = topicList;

	

		const scriptURL = "https://script.google.com/macros/s/AKfycbynuZ0vCUCbwPbSrnWpNRyIV0N6fW1ZDLTNVexnjswiEK_IqEGT13TskFevN7l7YC9hvA/exec"

		

		var percentage = (correctAnswers / availableQuestions.length) * 100;

		var form = document.forms['google-sheet']

		var fetchBody = new FormData(form);

		fetchBody.append('Start Time', startTime);

		fetchBody.append('End Time', endTime);

		fetchBody.append('Percentage',percentage);

		fetchBody.append('Period', period);

		fetchBody.append('Subject', subject);

		fetchBody.append('Topic List', topicList);

		fetchBody.append('Lesson', lesson);

		fetch(scriptURL, { method: 'POST', body: fetchBody});

	}

		



	window.onload = function() {

			quizBox.classList.add("hide");

			// first set all questions available in availableQuestions Array

			setAvailableQuestions();

			// Next, get a new question

			getNewQuestion();

		}

		//DS

	</script>