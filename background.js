// Importing the data needed from trivia
import { quizs } from "./quizs.js";

console.log("Initiating background worker...");


// Listening to messages from other scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// Executing functions depending on the message that comes
	console.log("Message received!: "+request.action);

	switch (request.action) {
		// If the text of the message starts with 'goToQuiz' and follows with a number
		case /^goToQuiz\d$/.test(request.action) && request.action:
			console.log("Let's go to a quiz!");
			goToQuiz(request.action.charAt(request.action.length -1 ));
			break;

		case "answerQuiz":

			chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
				var activeTab = tabs[0];
				chrome.tabs.sendMessage(activeTab.id, {action: "answerQuiz"});
			});

			console.log("Let's answer the quiz");
			break;
	
		default:
			break;
	}
})

// FUNCTIONS

// function goToQuiz(quiznum) {
// // Opens new tab with a quiz open
// 	chrome.tabs.create({url: quizs[quiznum]}, (tab) =>{
// 		// Check if new tab is updated
// 		chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
// 			// If the update says it's loaded...
// 			if (tabId == tab.id && changeInfo.status == "complete") {
// 				// Calls to content to start working
// 					chrome.tabs.sendMessage(tab.id,{action: "answerQuiz"+quiznum})
// 			}
// 		})
// 	})
// }



// Detect pages that update

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	// When the page is loaded
	if (changeInfo.status=='complete'){
		// Answer the quiz
		chrome.tabs.sendMessage(tab.id,{action: "answerQuiz"})
	}
 }); 