
function quiz1(){
    window.location.href = "quiz1.html";
}


document.addEventListener('DOMContentLoaded', function() {
var quizName = localStorage.getItem('newQuiz');

// Check if there is a quiz name in localStorage
if (quizName) {
    var quizListDiv = document.getElementById('quiz-list');
    var newButton = document.createElement('button');
    
    newButton.textContent = quizName;
    
    quizListDiv.appendChild(newButton);
    newButton.id = 'quiz2';
    newButton.classList.add("quiz-list-button");
    
    
    
    
    var deleteQuizButton = document.createElement('button');
    deleteQuizButton.textContent = "Delete Quiz";
    quizListDiv.appendChild(deleteQuizButton);
    deleteQuizButton.id = 'delete-quiz-button';
    deleteQuizButton.classList.add("delete-quiz-list-button");


    quiz2function();
}
});




function quiz2function(){



document.getElementById('quiz2').addEventListener('click', function(){
    window.location.href = 'quiz2.html';
});




document.getElementById('delete-quiz-button').addEventListener('click', function(){
    location.reload();
    localStorage.removeItem('newQuiz');
    localStorage.removeItem('quizzes');
})

}

