// Function to handle C++ Exam submission
function submitCppExam() {
    const form = document.getElementById('examForm');
    const questions = form.querySelectorAll('.question');
    let score = 0;

    // Answer key for C++ exam
    const cppAnswerKey = {
        q1: "a",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "c",
        q6: "a",
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "a"
    };

    // Calculate the score
    questions.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption && selectedOption.value === cppAnswerKey[questionId]) {
            score++;
        }
    });

    // Calculate percentage
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    // Display results
    alert(`C++ Exam\nYour Score: ${percentage}%\nCorrect Answers: ${score}/${totalQuestions}`);
}
