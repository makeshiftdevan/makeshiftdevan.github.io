document.addEventListener("contextmenu",e=>e.preventDefault());const quiz=[{q:"In angular kinematics, what type of motion occurs when an object rotates about an axis?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Linear motion","Rotational motion","Oscillatory motion","Random motion"],answer:1,topic:"Types of Angular Motion"},{q:"What term in angular kinematics describes the change in an object's rotational position over time?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Velocity","Acceleration","Angular displacement","Momentum"],answer:2,topic:"Angular Displacement"},{q:"In angular kinematics, which direction does angular velocity point when an object rotates counterclockwise?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Upward","Downward","Outward","Inward"],answer:0,topic:"Direction of Angular Velocity"},{q:"If an object is at rest in angular kinematics, what can you say about its angular velocity?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["It is zero","It is constant","It is infinite","It is negative"],answer:0,topic:"Angular Velocity at Rest"},{q:"In angular kinematics, what is the axis of rotation in an object that is spinning like a top?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["X-axis","Y-axis","Z-axis","No axis"],answer:2,topic:"Axis of Rotation in Spinning Objects"},{q:"Which term in angular kinematics describes the rate of change of angular displacement with respect to time?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Angular speed","Angular acceleration","Angular momentum","Angular force"],answer:1,topic:"Angular Acceleration"},{q:"In angular kinematics, what happens to the magnitude of angular velocity when an object rotates at a constant speed?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["It increases","It decreases","It remains constant","It becomes zero"],answer:2,topic:"Constant Angular Speed"},{q:"What is the unit of angular velocity in angular kinematics in the International System of Units (SI)?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Radian per second","Degrees per second","Meters per second","Kilograms per second"],answer:0,topic:"Unit of Angular Velocity"},{q:"In angular kinematics, what can change the direction of an object's angular velocity without changing its magnitude?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Angular acceleration","Angular displacement","Angular momentum","Angular force"],answer:0,topic:"Changing Angular Velocity Direction"},{q:"In angular kinematics, what is the relationship between the period of rotation and angular velocity in uniform circular motion?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["They are inversely proportional","They are directly proportional","They are unrelated","They are equal"],answer:0,topic:"Uniform Circular Motion and Period"},{q:"What is the direction of angular displacement for a counterclockwise rotation in angular kinematics?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Clockwise","Counterclockwise","Upward","Downward"],answer:1,topic:"Direction of Angular Displacement"},{q:"In which direction does angular acceleration point for an object spinning clockwise in angular kinematics?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Clockwise","Counterclockwise","Upward","Downward"],answer:0,topic:"Direction of Angular Acceleration"},{q:"What is the relationship between the radius of a circular path and the magnitude of angular displacement in angular kinematics?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Directly proportional","Inversely proportional","Unrelated","Equal"],answer:0,topic:"Angular Displacement and Radius"},{q:"If an object rotates through 360 degrees in angular kinematics, how many radians has it rotated through?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["π radians","2π radians","3π/2 radians","0.5 radians"],answer:1,topic:"Degrees to Radians Conversion"},{q:"In angular kinematics, what is the relationship between the magnitude of angular acceleration and the magnitude of angular displacement?",imgURL: "https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Directly proportional","Inversely proportional","Unrelated","Equal"],answer:2,topic:"Angular Acceleration and Displacement Relationship"}];questionNumber=document.querySelector(".question-number"),questionText=document.querySelector(".question-text"),optionContainer=document.querySelector(".option-container"),homeBox=document.querySelector(".home-box"),firstBox=document.querySelector(".first-box"),quizBox=document.querySelector(".quiz-box"),resultBox=document.querySelector(".result-box"),SPREADSHEET_ID="1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc",CLIENT_ID="15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com",SCOPE="https://www.googleapis.com/auth/spreadsheets",API_KEY="AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50";var modal=document.getElementById("myModal"),btn=document.getElementById("validation"),span=document.getElementsByClassName("close")[0],spanOne=document.getElementsByClassName("close")[1],modalOne=document.getElementById("remindModal"),btn1=document.getElementById("start");let currentQuestion,questionCounter=0,availableQuestions=[],availableOptions=[],correctAnswers=0,attempt=0,topicList=[];var d=new Date;const date=d.getMonth()+"/"+d.getDate()+"/"+d.getYear(),startTime=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();function setAvailableQuestions(){for(var e=0;5!=availableQuestions.length;e++)randomNum=Math.floor(Math.random()*quiz.length),availableQuestions.push(quiz[randomNum]),quiz.splice(randomNum,1)}function quizEnd(){var e=document.querySelector("input");document.getElementById("validation").addEventListener("submit",function(t){t.preventDefault(),"2.5"===e.value?enterInfo():(modal.style.display="block",span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")})})}function enterInfo(){homeBox.classList.remove("hide"),firstBox.classList.add("hide")}function reminder(){modalOne.style.display="block",spanOne.onclick=function(){modalOne.style.display="none",startQuiz()}}function startQuiz(){homeBox.classList.add("hide"),quizBox.classList.remove("hide")}function getNewQuestion(){currentQuestion=availableQuestions[++questionCounter-1],questionNumber.innerHTML="Question "+questionCounter+" of "+availableQuestions.length,questionText.innerHTML=currentQuestion.q;var e=new Image;e.src=currentQuestion.imgURL,document.querySelector(".question-text").appendChild(e);const t=currentQuestion.options.length;for(let e=0;e<t;e++)availableOptions.push(e);optionContainer.innerHTML="";let n=.2;for(let e=0;e<t;e++){const e=availableOptions[Math.floor(Math.random()*availableOptions.length)],t=availableOptions.indexOf(e);availableOptions.splice(t,1);const o=document.createElement("div");o.innerHTML=currentQuestion.options[e],o.id=e,o.style.animationDelay=n+"s",n+=.2,o.className="option",optionContainer.appendChild(o),o.setAttribute("onclick","getResult(this)")}}let selectedOption=null;function getResult(e){if(null===selectedOption){const t=parseInt(e.id);selectedOption=t,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),selectedOption===currentQuestion.answer?(e.classList.add("correct"),correctAnswers++):(e.classList.add("wrong"),topicList.push(currentQuestion.topic)),e.style.backgroundColor=selectedOption===currentQuestion.answer?"#4CAF50":"#FF5733",e.style.color="white",e.style.fontWeight="bold",document.getElementById("changeMindButton").disabled=!1}}function changeMind(){selectedOption=null,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),document.getElementById("changeMindButton").disabled=!0}function next(){null!==selectedOption?(selectedOption=null,questionCounter===availableQuestions.length?(console.log("Exit Ticket Completed"),quizOver()):getNewQuestion()):alert("Please select an answer before moving to the next question.")}function unclickableOptions(){const e=optionContainer.children.length;for(let t=0;t<e;t++)optionContainer.children[t].classList.add("already-answered")}function quizOver(){quizBox.classList.add("hide"),resultBox.classList.remove("hide"),quizResult()}function quizResult(){var e=document.getElementById("firstName").value+" "+document.getElementById("lastName").value,t=document.getElementById("period").value,n=document.getElementById("subject").value,o=document.getElementById("lesson").value,i=correctAnswers/availableQuestions.length*100;let a=new Date,r=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".subject").innerHTML=n,resultBox.querySelector(".period").innerHTML=t,resultBox.querySelector(".lesson").innerHTML=o,resultBox.querySelector(".startTime").innerHTML=startTime,resultBox.querySelector(".endTime").innerHTML=r,resultBox.querySelector(".total-question").innerHTML=availableQuestions.length,resultBox.querySelector(".total-correct").innerHTML=correctAnswers,resultBox.querySelector(".total-wrong").innerHTML=availableQuestions.length-correctAnswers,resultBox.querySelector(".percentage").innerHTML=i.toFixed()+"%",resultBox.querySelector(".total-score").innerHTML=correctAnswers+"/"+availableQuestions.length,resultBox.querySelector(".topic-list").innerHTML=topicList,i=correctAnswers/availableQuestions.length*100;var s=document.forms["google-sheet"],l=new FormData(s);l.append("Start Time",startTime),l.append("End Time",r),l.append("Percentage",i),l.append("Period",t),l.append("Subject",n),l.append("Topic List",topicList),l.append("Lesson",o),fetch("https://script.google.com/macros/s/AKfycbwJLk90wLnD0HCeDP01HrrJM9G00ms1EeEWJDwcZUwDl2Kb55pozY2wCwHIYA5liD6yOQ/exec",{method:"POST",body:l})}window.onload=function(){quizBox.classList.add("hide"),setAvailableQuestions(),getNewQuestion()};var a=b?c%d:e[f];a=b?c%d:e[f],a=b?c%d:e[f],a=b?c%d:e[f],a=b?c%d:e[f];