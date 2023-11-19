document.addEventListener("DOMContentLoaded",()=>{

	const startButtonPopup = document.getElementById("startButtonPopup");

	startButtonPopup.addEventListener('click',() => {
		// if(!confirm("W101 Trivia Maker is going to start completing 10 quizs for you. Are you signed up?")) return;
		
		chrome.runtime.sendMessage({action:"goToQuiz0"});
	
	})
	
	
	

})
