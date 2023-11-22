document.addEventListener("DOMContentLoaded",()=>{

	const startButtonPopup = document.getElementById("startButtonPopup");

	startButtonPopup.addEventListener('click',() => {
		// if(!confirm("W101 Trivia Maker is going to start completing quizs for you. Are you signed up?")) return;
		
		// chrome.runtime.sendMessage({action:"goToQuiz0"});

		chrome.runtime.sendMessage({action: "answerQuiz"});
	
	})
	
	
	

})
