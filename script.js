// script.js

const quizData = [
    {
      question: "Qual é a linguagem de programação usada para criar páginas web interativas?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "JavaScript"
    },
    {
      question: "Qual é a função do HTML em uma página web?",
      options: [
        "Adicionar estilos",
        "Criar a estrutura da página",
        "Interação com o usuário",
        "Nenhuma das anteriores"
      ],
      answer: "Criar a estrutura da página"
    },
    {
      question: "O que significa CSS?",
      options: [
        "Central Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startButton = document.getElementById('start-quiz');
  const quizContainer = document.getElementById('quiz-container');
  
  startButton.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startButton.style.display = 'none';
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestionIndex < quizData.length) {
      const questionData = quizData[currentQuestionIndex];
      
      quizContainer.innerHTML = `
        <h3>${questionData.question}</h3>
        ${questionData.options
          .map(
            (option, index) =>
              `<button class="option-button" data-answer="${option}">${option}</button>`
          )
          .join('')}
      `;
      
      document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', checkAnswer);
      });
    } else {
      showResults();
    }
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.getAttribute('data-answer');
    const correctAnswer = quizData[currentQuestionIndex].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
      alert('Resposta Correta!');
    } else {
      alert('Resposta Errada!');
    }
  
    currentQuestionIndex++;
    showQuestion();
  }
  
  function showResults() {
    quizContainer.innerHTML = `
      <h3>Você completou o quiz!</h3>
      <p>Sua pontuação: ${score} de ${quizData.length}</p>
    `;
  }
  