// Function to handle Java Exam submission
function submitJavaExam() {
    const form = document.getElementById('examForm');
    const questions = form.querySelectorAll('.question');
    let score = 0;

    // Answer key for Java exam
    const javaAnswerKey = {
        q1: "a",
        q2: "d",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "d",
        q8: "a"
    };

    // Calculate the score
    questions.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption && selectedOption.value === javaAnswerKey[questionId]) {
            score++;
        }
    });

    // Calculate percentage
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    // Display results
    alert(`Java Exam\nYour Score: ${percentage}%\nCorrect Answers: ${score}/${totalQuestions}`);
}
