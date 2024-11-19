const questions = [
    { question: "What's my favorite color?" },
    { question: "Where did we first meet?" },
    { question: "What is my favorite food?" }
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestion].question;
    } else {
        document.getElementById('question').textContent = "That's all! Thank you for answering ❤️";
        document.getElementById('answer').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}

function submitAnswer() {
    const answer = document.getElementById('answer').value;
    if (!answer) {
        alert("Please enter your answer.");
        return;
    }

    // WhatsApp number (replace with your own number)
    const phoneNumber = "234XXXXXXXXXX"; // Nigerian number format
    const question = questions[currentQuestion].question;
    
    // WhatsApp message link
    const message = `Hey! ❤️ Here's my answer:\n\n${question}\nAnswer: ${answer}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp link
    window.open(whatsappLink, '_blank');

    // Clear the input and load the next question
    document.getElementById('answer').value = '';
    currentQuestion++;
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;
