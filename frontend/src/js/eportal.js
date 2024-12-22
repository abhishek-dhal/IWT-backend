// Function to handle form submission
function submitExam() {
    const form = document.getElementById('examForm');
    const questions = form.querySelectorAll('.question');
    let score = 0;

    // Answer keys for the quizzes
    const answerKey = {
        "C++": {
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
        },
        "Java": {
            q1: "a",
            q2: "d",
            q3: "a",
            q4: "b",
            q5: "c",
            q6: "a",
            q7: "d",
            q8: "a"
        }
    };

    // Identify the current quiz type
    const quizType = document.title.includes("C++") ? "C++" : "Java";
    const currentAnswerKey = answerKey[quizType];

    // Iterate through the questions to calculate the score
    questions.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption && selectedOption.value === currentAnswerKey[questionId]) {
            score++;
        }
    });

    // Calculate percentage
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    // Display the results
    alert(`Quiz: ${quizType}\nYour Score: ${percentage}%\nCorrect Answers: ${score}/${totalQuestions}`);
}
