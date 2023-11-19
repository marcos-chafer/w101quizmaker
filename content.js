// File that interacts with the DOM of a page


// Listening to messages from other scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// Executing functions depending on the message that comes

	switch (request.action) {
		// If the text of the message starts with 'answerQuiz' and follows with a number
		case /^answerQuiz\d$/.test(request.action) && request.action:
			answerQuiz(request.action.charAt(request.action.length -1 ));
			break;
	
		default:
			break;
	}



})




function answerQuiz(quiznumber){
// This function should answer the quiz

	const question = document.getElementsByClassName("quizQuestion")[0].textContent;
	const answers = document.getElementsByClassName("answerText")

	// let's find the answer for the question
	const answer = globalThis.answers[question];
	console.log("The answer is: ")
	console.log(answer);



	for (let i=0; i<answers.length;i++) {
		console.log(answers[i].textContent.trim());
		if (answers[i].textContent.trim() == answer){
			// Let's get the checkbox that we have to activate
			const answerCheckbox = answers[i].parentElement.getElementsByClassName("largecheckbox")[0];
			// We click it
			setTimeout(() =>
				answerCheckbox.click()
			,4000)
			// Clicking the button 
			const nextQuestionButton = document.getElementById("nextQuestion");
			setTimeout(() =>
				nextQuestionButton.click()
			,7000)

		}

		
	}


	// let's mark the answer


}