function createQuiz(){
    window.location.href="../html/create-quiz.html";

}

function takeQuiz(){
    window.location.href="../html/quiz-list.html";
}






// Retrieve the quizzes array from local storage
let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

// Check if quizzes array is not empty
if (quizzes.length > 0) {
// Log the quizzes array to the console
console.log('Quizzes Array:', quizzes);
} else {
console.log('No quizzes found.');
}








function loginFunction(){
window.location.href = "../html/loginPage.html";
}
function signupFunction(){
window.location.href = "../html/signupPage.html";
}




