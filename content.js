// File that interacts with the DOM of a page
var quizNumber;

// Get question from page
const questionHtml = document.getElementsByClassName("quizQuestion")[0];


// Listening to messages from other scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// Executing functions depending on the message that comes

	switch (request.action) {
		// If the text of the message starts with 'answerQuiz' and follows with a number
		// case /^answerQuiz\d$/.test(request.action) && request.action:
		// 	quizNumber = request.action.charAt(request.action.length -1 );

		// 	// Let's see if there is a question in this page
		// 	if (document.getElementsByClassName("quizQuestion")[0] != undefined) answerQuiz(request.action.charAt(request.action.length -1 ));

		// 	// Else, probably means the test is finished
		// 	else if (document.getElementsByClassName("quizContainer")[0] != undefined){
		// 		// setTimeout(()=> {
		// 		// 	console.log("Let's do another quiz!")
		// 		// 	chrome.runtime.sendMessage({
		// 		// 		action: "goToQuiz"+(parseInt(quizNumber)+1),
		// 		// 		})
		// 		// }, 3000)

		// 	}
		// 		// setTimeout(()=>{
		// 		// 	console.log("Clicking first button.")
		// 		// 	document.getElementsByClassName("kiaccountsbuttongreen")[0].click()
		// 		// },3000)
		// 		// setTimeout(()=> {
		// 		// 	console.log("Clicking second button.")
		// 		// 	document.getElementById("submit").click()
		// 		// }, 6000)

				

				

			

		// 	break;

		case "answerQuiz":
		answerQuiz();

		default:
			break;
	}



})




function answerQuestion(question) {

	const answers = document.getElementsByClassName("answerText")

	console.log("The question is: "+question);

	// let's find the answer for the question
	const answer = globalThis.answers[question];
	console.log("The answer is: ")
	console.log(answer);

	// If there's no answer, we click a random answer to prevent the extension from stopping
	if (answer == undefined) {
		// Getting a random answer (for now, it's just the first answer)
		const randomAnswer = answers[0].parentElement.getElementsByClassName("largecheckbox")[0];
		// We click it
		setTimeout(() =>
			randomAnswer.click()
		,500)
		// Clicking the button 
		const nextQuestionButton = document.getElementById("nextQuestion");
		setTimeout(() =>
			nextQuestionButton.click()
		,550)
		return;
	}


	// If there's an answer (90% of cases)
	for (let i=0; i<answers.length;i++) {
		console.log(answers[i].textContent.trim());
		if (answers[i].textContent.trim() == answer){
			// Let's get the checkbox that we have to activate
			const answerCheckbox = answers[i].parentElement.getElementsByClassName("largecheckbox")[0];
			// We click it
			setTimeout(() =>
				answerCheckbox.click()
			,500)
			// Clicking the button 
			const nextQuestionButton = document.getElementById("nextQuestion");
			setTimeout(() =>
				nextQuestionButton.click()
			,550)
			return;
		}

	}
}

function answerQuiz(){
// This function should answer the quiz, answering every question until the end.


	// While there's still a question...
	if (questionHtml != undefined){
		let question = questionHtml.textContent;
		answerQuestion(question);
	}
	// If there's no question... (quiz is finished or wrong page)
	if (!questionHtml || questionHtml == undefined){
		console.log("No question! Let's do nothing!");
	}

}

