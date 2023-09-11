document.addEventListener("contextmenu",e=>e.preventDefault());const quiz=[{q:"Two hikers start from the same point and walk in opposite directions. How does the magnitude of their displacement vectors compare when they return to the starting point?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["The magnitudes are equal","The magnitudes are not equal","Cannot determine without more information","They cannot return to the starting point","None of the above"],answer:0,topic:" Vector Displacement"},{q:"If you swim across a river from one bank to the other and return to the starting point, what can you say about your net displacement?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["It is zero","It is half the river width","It depends on the river's width","It is equal to the river's width","None of the above"],answer:0,topic:" Vector Displacement"},{q:"If a car travels a circular path at a constant speed, is its velocity constant? Why or why not?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Yes, because speed is constant","No, because direction is changing","Yes, because direction is constant","No, because speed is changing","None of the above"],answer:1,topic:"Velocity in Circular Motion"},{q:"When you walk in a straight line from point A to point B and then return to point A, what is your displacement compared to your total distance traveled?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Displacement is greater","Displacement is equal","Displacement is smaller","Displacement depends on the path","None of the above"],answer:0,topic:"Vector Displacement"},{q:"If two vectors have the same magnitude, when can their resultant vector have the same magnitude as one of the original vectors?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Always","Never","Only when the vectors are collinear","Only when the vectors are perpendicular","None of the above"],answer:1,topic:"Vector Addition"},{q:"If a boat is sailing downstream in a river, what can you say about the direction of its velocity vector compared to its direction of motion?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Velocity vector is upstream","Velocity vector is downstream","Velocity vector is perpendicular to the motion","Velocity vector is in the opposite direction","None of the above"],answer:1,topic:"Relative Motion"},{q:"When you add two vectors with equal magnitudes but in opposite directions, what is the magnitude of their resultant vector?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Zero","Half the magnitude of each vector","The magnitude of one of the vectors","Double the magnitude of each vector","None of the above"],answer:0,topic:" Vector Addition"},{q:"If you walk in a circle at a constant speed, is your acceleration zero? Why or why not?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Yes, because speed is constant","No, because direction is changing","Yes, because direction is constant","No, because speed is changing","None of the above"],answer:1,topic:" Acceleration in Circular Motion"},{q:"When two vectors are added, can their resultant vector ever be smaller than the magnitude of either original vector? If so, under what conditions?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Never","Yes, when they are perpendicular","Yes, when they are parallel","Yes, when their magnitudes are different","None of the above"],answer:2,topic:"  Addition"},{q:"When a ball is thrown straight up into the air, what happens to its velocity as it reaches its highest point? Why?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["Velocity increases","Velocity decreases","Velocity remains constant","Velocity changes direction","None of the above"],answer:1,topic:" Free Fall and Projectile Motion"},{q:"Suppose that vector A = 5 @ 53 degrees, and vector B = 10 @ 143 degrees.  In component form, what is A + B? (x,y)",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["(5, -10)","(11, -2)","(-5, 10)","(-11, 2)","(-11, -10)"],answer:2,topic:" Vector Components"},{q:"Suppose that vector A = 10 @ -37 degrees and vector B = 5 @ 127 degrees.  In component form, what is A - B?",imgURL:"https://drive.google.com/uc?export=view&id=1fcIpZx-r5UqhKSZmdMP4NPhplvK9Gjku",options:["(5, -2)","(-5, 2)","(-11, 10)","(11, -10)","(11, 10)"],answer:3,topic:" Vector Components"},{q:"Which vectors have the same direction as -'X'?",imgURL:"https://drive.google.com/uc?export=view&id=1EmfFvDvChytICTT9IAya8zkvg2Fb5-si",options:["B,E,H","A, C","A, C, G ","A, G","D, F, G"],answer:1,topic:" Vector Direction"},{q:" ",imgURL:"https://drive.google.com/uc?export=view&id=1W0-tSNB2J9Vor8KLewZ_FCaGUWUcL9A2",options:["A>B>E=F>G>H>C>D","A>B>E=F>A>H>C>D","A>B>E>F>G>H>C>D","D>C>E=F>H>G>B>A","D>C>H>G>E=F>B>A"],answer:0,topic:" Adding Vectors"},{q:"Which of the following vectors has an x-component equal to 0?",imgURL:"https://drive.google.com/uc?export=view&id=1_n8wD8B1bKMQTmRCv42kaFmVtSaPSzL3",options:["G","C","E","C and E","A"],answer:0,topic:" Vector Components"},{q:"Which of the following vectors has a y-component equal to 0?",imgURL:"https://drive.google.com/uc?export=view&id=1_n8wD8B1bKMQTmRCv42kaFmVtSaPSzL3",options:["G","C","E","C and E","A"],answer:3,topic:" Vector Components"},{q:"Which student is correct?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["All of them","None of them","Ayesha","Bashir","Claudio"],answer:1,topic:" Adding Vectors"}];function quizEnd(){var e=document.querySelector("input");document.getElementById("validation").addEventListener("submit",function(t){t.preventDefault(),"gru"===e.value?enterInfo():(modal.style.display="block",span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")})})}questionNumber=document.querySelector(".question-number"),questionText=document.querySelector(".question-text"),optionContainer=document.querySelector(".option-container"),homeBox=document.querySelector(".home-box"),firstBox=document.querySelector(".first-box"),quizBox=document.querySelector(".quiz-box"),resultBox=document.querySelector(".result-box"),SPREADSHEET_ID="1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc",CLIENT_ID="15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com",SCOPE="https://www.googleapis.com/auth/spreadsheets",API_KEY="AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50";var modal=document.getElementById("myModal"),btn=document.getElementById("validation"),span=document.getElementsByClassName("close")[0],spanOne=document.getElementsByClassName("close")[1],modalOne=document.getElementById("remindModal"),btn1=document.getElementById("start");let currentQuestion,questionCounter=0,availableQuestions=[],availableOptions=[],correctAnswers=0,attempt=0,topicList=[];var d=new Date;const date=d.getMonth()+"/"+d.getDate()+"/"+d.getYear(),startTime=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();function setAvailableQuestions(){for(var e=0;5!=availableQuestions.length;e++)randomNum=Math.floor(Math.random()*quiz.length),availableQuestions.push(quiz[randomNum]),quiz.splice(randomNum,1)}function enterInfo(){homeBox.classList.remove("hide"),firstBox.classList.add("hide")}function reminder(){modalOne.style.display="block",spanOne.onclick=function(){modalOne.style.display="none",startQuiz()}}function startQuiz(){homeBox.classList.add("hide"),quizBox.classList.remove("hide")}function getNewQuestion(){currentQuestion=availableQuestions[++questionCounter-1],questionNumber.innerHTML="Question "+questionCounter+" of "+availableQuestions.length,questionText.innerHTML=currentQuestion.q;var e=new Image;e.src=currentQuestion.imgURL,document.querySelector(".question-text").appendChild(e);const t=currentQuestion.options.length;for(let e=0;e<t;e++)availableOptions.push(e);optionContainer.innerHTML="";let o=.2;for(let e=0;e<t;e++){const e=availableOptions[Math.floor(Math.random()*availableOptions.length)],t=availableOptions.indexOf(e);availableOptions.splice(t,1);const n=document.createElement("div");n.innerHTML=currentQuestion.options[e],n.id=e,n.style.animationDelay=o+"s",o+=.2,n.className="option",optionContainer.appendChild(n),n.setAttribute("onclick","getResult(this)")}}let selectedOption=null;function getResult(e){if(null===selectedOption){const t=parseInt(e.id);selectedOption=t,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),selectedOption===currentQuestion.answer?(e.classList.add("correct"),correctAnswers++):(e.classList.add("wrong"),topicList.push(currentQuestion.topic)),document.getElementById("changeMindButton").disabled=!1}}function changeMind(){selectedOption=null,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),document.getElementById("changeMindButton").disabled=!0}function next(){null!==selectedOption?(selectedOption=null,questionCounter===availableQuestions.length?(console.log("Exit Ticket Completed"),quizOver()):getNewQuestion()):alert("Please select an answer before moving to the next question.")}function unclickableOptions(){const e=optionContainer.children.length;for(let t=0;t<e;t++)optionContainer.children[t].classList.add("already-answered")}function quizOver(){quizBox.classList.add("hide"),resultBox.classList.remove("hide"),quizResult()}function quizResult(){var e=document.getElementById("firstName").value+" "+document.getElementById("lastName").value,t=document.getElementById("period").value,o=document.getElementById("subject").value,n=document.getElementById("lesson").value,i=correctAnswers/availableQuestions.length*100;let r=new Date,s=r.getHours()+":"+r.getMinutes()+":"+r.getSeconds();resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".subject").innerHTML=o,resultBox.querySelector(".period").innerHTML=t,resultBox.querySelector(".lesson").innerHTML=n,resultBox.querySelector(".startTime").innerHTML=startTime,resultBox.querySelector(".endTime").innerHTML=s,resultBox.querySelector(".total-question").innerHTML=availableQuestions.length,resultBox.querySelector(".total-correct").innerHTML=correctAnswers,resultBox.querySelector(".total-wrong").innerHTML=availableQuestions.length-correctAnswers,resultBox.querySelector(".percentage").innerHTML=i.toFixed()+"%",resultBox.querySelector(".total-score").innerHTML=correctAnswers+"/"+availableQuestions.length,resultBox.querySelector(".topic-list").innerHTML=topicList,i=correctAnswers/availableQuestions.length*100;var a=document.forms["google-sheet"],c=new FormData(a);c.append("Start Time",startTime),c.append("End Time",s),c.append("Percentage",i),c.append("Period",t),c.append("Subject",o),c.append("Topic List",topicList),c.append("Lesson",n),fetch("https://script.google.com/macros/s/AKfycbwJLk90wLnD0HCeDP01HrrJM9G00ms1EeEWJDwcZUwDl2Kb55pozY2wCwHIYA5liD6yOQ/exec",{method:"POST",body:c})}window.onload=function(){quizBox.classList.add("hide"),setAvailableQuestions(),getNewQuestion()};
