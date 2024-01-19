let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

document.getElementById('submitQuiz').addEventListener('click', function() {
    let question = document.getElementById('question').value;
    let correctAnswer = document.getElementById('correctAnswer').value;
    let answers = [
        { text: document.getElementById('option1').value, correct: document.getElementById('option1').value === correctAnswer },
        { text: document.getElementById('option2').value, correct: document.getElementById('option2').value === correctAnswer },
        { text: document.getElementById('option3').value, correct: document.getElementById('option3').value === correctAnswer },
        { text: document.getElementById('option4').value, correct: document.getElementById('option4').value === correctAnswer }
    ];

    if (question && answers.some(option => option.text) && answers.some(option => option.correct)) {
        quizzes.push({ question, answers });

        // Store updated quizzes array in local storage
        localStorage.setItem('quizzes', JSON.stringify(quizzes));

        alert('Quiz added successfully!');
        resetCreateForm();
    } else {
        alert('Please fill in all fields and ensure at least one correct answer');
    }


});




function resetCreateForm() {
document.getElementById('question').value = '';
document.getElementById('option1').value = '';
document.getElementById('option2').value = '';
document.getElementById('option3').value = '';
document.getElementById('option4').value = '';
document.getElementById('correctAnswer').value = '';
}



console.log(quizzes);





function resetQuizName(){
    document.getElementById('name-of-quiz').value = '';
}




let addCompleteQuiz = document.getElementById('add-complete-quiz');





document.getElementById('add-complete-quiz').addEventListener('click', function() {
    var quizName = document.getElementById('name-of-quiz').value;

    // Check if the quiz name is not empty
    if (quizName.trim() !== '') {
        // Store the quiz name in localStorage
        localStorage.setItem('newQuiz', quizName);

        // Optional: Redirect to quiz-list.html
        window.location.href = '../index.html';
    } else {
        alert("Please enter a quiz name.");
    }


    resetQuizName();
});





