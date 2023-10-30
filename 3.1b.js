document.addEventListener("contextmenu",e=>e.preventDefault());const quiz=[{q:"What is the centripetal force responsible for in circular motion?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Starting motion","Stopping motion","Maintaining motion in a circle","Changing the direction of motion"],answer:2,topic:"Centripetal Force Purpose"},{q:"In centripetal acceleration, what does the term 'centripetal' mean?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Inward","Outward","Upward","Downward"],answer:0,topic:"Meaning of 'Centripetal'"},{q:"What causes an object in circular motion to experience centripetal acceleration?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Gravity","Friction","Tension in a string","An external force directed toward the center of the circle"],answer:3,topic:"Cause of Centripetal Acceleration"},{q:"In centripetal acceleration, what is the direction of the acceleration vector?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Inward","Outward","Upward","Downward"],answer:0,topic:"Direction of Centripetal Acceleration"},{q:"Which factor determines the magnitude of centripetal acceleration in circular motion?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Tangential speed","Radius of the circle","Mass of the object","Surface area of the circle"],answer:0,topic:"Factors Affecting Centripetal Acceleration"},{q:"What happens to the centripetal acceleration of an object if its tangential speed is increased?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["It increases","It decreases","It remains constant","It becomes zero"],answer:0,topic:"Effect of Increased Tangential Speed on Centripetal Acceleration"},{q:"What is the formula for centripetal acceleration in terms of tangential speed and radius?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["a = v/r","a = r/v","a = v²/r","a = r²/v"],answer:0,topic:"Centripetal Acceleration Formula"},{q:"What is the direction of centripetal force in circular motion?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Inward","Outward","Upward","Downward"],answer:0,topic:"Direction of Centripetal Force"},{q:"What force provides centripetal force for a car moving in a circular path?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Gravity","Friction between tires and the road","Wind resistance","Tension in a string"],answer:1,topic:"Centripetal Force in Circular Motion"},{q:"In circular motion, what is the relationship between centripetal force and centripetal acceleration?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["They are inversely proportional","They are directly proportional","They are unrelated","They are equal"],answer:1,topic:"Relationship between Centripetal Force and Acceleration"},{q:"What happens to the centripetal force required for an object when its mass increases in circular motion?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["It increases","It decreases","It remains constant","It becomes zero"],answer:0,topic:"Effect of Increased Mass on Centripetal Force"},{q:"In centripetal force, what is the relationship between centripetal force and the radius of the circle?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Directly proportional","Inversely proportional","Unrelated","Equal"],answer:0,topic:"Centripetal Force and Radius Relationship"},{q:"What is the formula for centripetal force in terms of mass, tangential speed, and radius?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["F = mv²/r","F = mr²/v","F = ma","F = mv/r"],answer:0,topic:"Centripetal Force Formula"},{q:"In centripetal acceleration, what is the relationship between the mass of an object and its centripetal acceleration?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Directly proportional","Inversely proportional","Unrelated","Equal"],answer:0,topic:"Mass and Centripetal Acceleration Relationship"},{q:"What factor can be adjusted to increase centripetal force for an object in circular motion?",imgURL:"https://drive.google.com/uc?export=view&id=1hV_GXJ86SKbHmz9fDQuOqZrJEcBn7Llp",options:["Tangential speed","Radius of the circle","Mass of the object","Surface area of the circle"],answer:0,topic:"Adjusting Centripetal Force"}];questionNumber=document.querySelector(".question-number"),questionText=document.querySelector(".question-text"),optionContainer=document.querySelector(".option-container"),homeBox=document.querySelector(".home-box"),firstBox=document.querySelector(".first-box"),quizBox=document.querySelector(".quiz-box"),resultBox=document.querySelector(".result-box"),SPREADSHEET_ID="1QyB3WT1LrfJDNjiaVvLQYkGlu_GB8fT3yXDdjXGsoFc",CLIENT_ID="15494048086-sg57jbj9cjdlmuiekvt7sd1cdh2p6qb3.apps.googleusercontent.com",SCOPE="https://www.googleapis.com/auth/spreadsheets",API_KEY="AIzaSyCgv5WIgpm4DaWQFgSuVd2wAcLxRparQ50";var modal=document.getElementById("myModal"),btn=document.getElementById("validation"),span=document.getElementsByClassName("close")[0],spanOne=document.getElementsByClassName("close")[1],modalOne=document.getElementById("remindModal"),btn1=document.getElementById("start");let currentQuestion,questionCounter=0,availableQuestions=[],availableOptions=[],correctAnswers=0,attempt=0,topicList=[];var d=new Date;const date=d.getMonth()+"/"+d.getDate()+"/"+d.getYear(),startTime=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();function setAvailableQuestions(){for(var e=0;5!=availableQuestions.length;e++)randomNum=Math.floor(Math.random()*quiz.length),availableQuestions.push(quiz[randomNum]),quiz.splice(randomNum,1)}function quizEnd(){var e=document.querySelector("input");document.getElementById("validation").addEventListener("submit",function(t){t.preventDefault(),"2.5"===e.value?enterInfo():(modal.style.display="block",span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")})})}function enterInfo(){homeBox.classList.remove("hide"),firstBox.classList.add("hide")}function reminder(){modalOne.style.display="block",spanOne.onclick=function(){modalOne.style.display="none",startQuiz()}}function startQuiz(){homeBox.classList.add("hide"),quizBox.classList.remove("hide")}function getNewQuestion(){currentQuestion=availableQuestions[++questionCounter-1],questionNumber.innerHTML="Question "+questionCounter+" of "+availableQuestions.length,questionText.innerHTML=currentQuestion.q;var e=new Image;e.src=currentQuestion.imgURL,document.querySelector(".question-text").appendChild(e);const t=currentQuestion.options.length;for(let e=0;e<t;e++)availableOptions.push(e);optionContainer.innerHTML="";let o=.2;for(let e=0;e<t;e++){const e=availableOptions[Math.floor(Math.random()*availableOptions.length)],t=availableOptions.indexOf(e);availableOptions.splice(t,1);const n=document.createElement("div");n.innerHTML=currentQuestion.options[e],n.id=e,n.style.animationDelay=o+"s",o+=.2,n.className="option",optionContainer.appendChild(n),n.setAttribute("onclick","getResult(this)")}}let selectedOption=null;function getResult(e){if(null===selectedOption){const t=parseInt(e.id);selectedOption=t,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),selectedOption===currentQuestion.answer?(e.classList.add("correct"),correctAnswers++):(e.classList.add("wrong"),topicList.push(currentQuestion.topic)),e.style.backgroundColor=selectedOption===currentQuestion.answer?"#4CAF50":"#FF5733",e.style.color="white",e.style.fontWeight="bold",document.getElementById("changeMindButton").disabled=!1}}function changeMind(){selectedOption=null,document.querySelectorAll(".option").forEach(e=>{e.classList.remove("correct","wrong")}),document.getElementById("changeMindButton").disabled=!0}function next(){null!==selectedOption?(selectedOption=null,questionCounter===availableQuestions.length?(console.log("Exit Ticket Completed"),quizOver()):getNewQuestion()):alert("Please select an answer before moving to the next question.")}function unclickableOptions(){const e=optionContainer.children.length;for(let t=0;t<e;t++)optionContainer.children[t].classList.add("already-answered")}function quizOver(){quizBox.classList.add("hide"),resultBox.classList.remove("hide"),quizResult()}function quizResult(){var e=document.getElementById("firstName").value+" "+document.getElementById("lastName").value,t=document.getElementById("period").value,o=document.getElementById("subject").value,n=document.getElementById("lesson").value,i=correctAnswers/availableQuestions.length*100;let r=new Date,a=r.getHours()+":"+r.getMinutes()+":"+r.getSeconds();resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".full-name").innerHTML=e,resultBox.querySelector(".subject").innerHTML=o,resultBox.querySelector(".period").innerHTML=t,resultBox.querySelector(".lesson").innerHTML=n,resultBox.querySelector(".startTime").innerHTML=startTime,resultBox.querySelector(".endTime").innerHTML=a,resultBox.querySelector(".total-question").innerHTML=availableQuestions.length,resultBox.querySelector(".total-correct").innerHTML=correctAnswers,resultBox.querySelector(".total-wrong").innerHTML=availableQuestions.length-correctAnswers,resultBox.querySelector(".percentage").innerHTML=i.toFixed()+"%",resultBox.querySelector(".total-score").innerHTML=correctAnswers+"/"+availableQuestions.length,resultBox.querySelector(".topic-list").innerHTML=topicList,i=correctAnswers/availableQuestions.length*100;var c=document.forms["google-sheet"],s=new FormData(c);s.append("Start Time",startTime),s.append("End Time",a),s.append("Percentage",i),s.append("Period",t),s.append("Subject",o),s.append("Topic List",topicList),s.append("Lesson",n),fetch("https://script.google.com/macros/s/AKfycbwJLk90wLnD0HCeDP01HrrJM9G00ms1EeEWJDwcZUwDl2Kb55pozY2wCwHIYA5liD6yOQ/exec",{method:"POST",body:s})}window.onload=function(){quizBox.classList.add("hide"),setAvailableQuestions(),getNewQuestion()};var a=b?c%d:e[f];a=b?c%d:e[f],a=b?c%d:e[f],a=b?c%d:e[f],a=b?c%d:e[f];
