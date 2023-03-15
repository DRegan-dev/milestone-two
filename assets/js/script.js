document.addEventListener("DOMContentLoaded", function() {
    let questions = [{
        question: "What 1949 science fiction book by author George Orwell describes a dystopian world in the future?",
        choices: ["A. Bladerunner", "B. The Stranger", "C. 1984", "D. The Road"],
        answer: "C"
      },
      {
        question: "Which Italian town is the setting for Shakespeares Romeo and Juliet?",
        choices: ["A. Rome", "B. Milan", "C. Venice", "D. Verona"],
        answer: "D"
      },
      {
        question: "Which globally-dreaded disease did the World Health Organization declared eradicated in 1980?",
        choices: ["A. Sars", "B. Small Pox", "C. Tuberculosis", "D. Man Flu"],
        answer: "B"
      },
      {
        question: "Who was the first “American Idol” winner?",
        choices: ["A. Katy Perry", "B. Celine Dion", "C. Kacy Musgraves", "D. Kelly Clarkson"],
        answer: "D"
      },
      {
        question: "What movie is 'you had me at hello' from?",
        choices: ["A. Billy Elliot", "B. Lil Nicky", "C. The Social Network", "D. Jerry Maguire"],
        answer: "D"
      },
      {
        question: "Which of the six main characters on the TV show “Friends” never got married?",
        choices: ["A. Ross", "B. Rachel", "C. Joey", "D. Phoebe"],
        answer: "C"
      },
      {
        question: "What species of fish is Nemo?",
        choices: ["A. Pufferfish", "B. Clownfish", "C. Blowfish", "D. Salmon"],
        answer: "B"
      },
      {
        question: "Where did the 2000 Summer Olympics take place?",
        choices: ["A. Greece", "B. Australia", "C. Ireland", "D. Russia"],
        answer: "B"
      },
      {
        question: "What is an eight-sided shape called?",
        choices: ["A. Hexagon", "B. Rectangle", "C. Decahedron", "A. Octagon"],
        answer: "D"
      },
      {
        question: "Where is the worlds largest Starbucks?",
        choices: ["A. New York", "B. Brisbane", "C. Chicago", "D. Tokyo"],
        answer: "C"
      },
      {
        question: "What is a single strand of spaghetti called?",
        choices: ["A. Spaghetto", "B. Noodle", "C. String", "D. Tendon"],
        answer: "A"
      },
      {
        question: "Which NBA team plays its home games at Madison Square Garden?",
        choices: ["A. Lakers", "B. Bulls", "C. Knicks", "D. Nets"],
        answer: "C"
      },
      {
        question: "What color is a giraffe’s tongue",
        choices: ["A. Black", "B. Yellow", "C. Red", "D. Purple"],
        answer: "D"
      },
      {
        question: "Who wrote “The Little Mermaid”? ",
        choices: ["A. Walt Disney", "B. Hans Christian Anderson", "C. Roald Dahl", "D. Bob Ross"],
        answer: "B"
      },
      {
        question: "How many ghosts show up in “A Christmas Carol”?",
        choices: ["A. Three", "B. Two", "C. Four", "D. Five"],
        answer: "C"
      }
    ];
    let score;
    let questionIndex;
    document.addEventListener("DOMContentLoaded", function() {
      function playQuiz(questions) {
        console.log(questions);
        score = 0;
        questionIndex = 0;
        let timerContainer = document.getElementsByClassName("quiztimer")[0];
        let timeLeft = 60;
        let timer = setInterval(() => {
          timeLeft--;
          timerContainer.textContent = `Time left ${timeLeft}s`;
          if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
          }
        }, 1000);
      }
  
      function displayQuestion() {
        let quizContainer = document.getElementsByClassName("quizquestions")[0];
        let questionContainer = document.createElement("div");
        questionContainer.innerHTML = `<p>Question ${questionIndex+1}: ${questions[questionIndex].question}</p>`;
        quizContainer.appendChild(questionContainer);
        console.log("hey whats up?")
  
        let answerBtn;
        for (let j = 0; j < questions[questionIndex].choices.length; j++) {
          answerBtn = document.createElement("button");
          answerBtn.className = "answer-btn";
          answerBtn.textContent = questions[questionIndex].choices[j];
          questionContainer.appendChild(answerBtn);
  
          answerBtn.addEventListener("click", function() {
            if (this.textContent.charAt(0) === questions[questionIndex].answer) {
              this.className += " correct";
              score += 100;
            } else {
              this.textContent += " incorrect";
            }
            console.log(score);
  
            let answerBtns = questionContainer.querySelectorAll(".answer-btn");
  
            for (let k = 0; k < answerBtns.length; k++) {
              answerBtns[k].disabled = true;
            };
            questionIndex++;
            if (questionIndex < questions.length) {
              quizContainer.innerHTML = "";
              displayQuestion();
            } else {
              endQuiz();
            }
  
          });
          questionContainer.appendChild(answerBtn);
        }
  
      };
  
      function endQuiz() {
        clearInterval(timer);
        quizContainer.innerHTML = "";
        timerContainer.innerHTML = "";
  
        let finalScore = document.createElement("p");
        finalScore.textContent = `You have Saved ${score} out of ${questions.length}`;
        quizContainer.appendChild(finalScore);
        setTimeout(() => {
          window.location.href = "index.html"
        }, 3000);
      }
      displayQuestion();
    })
  });
