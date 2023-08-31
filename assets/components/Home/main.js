const savedData = JSON.parse(localStorage.getItem("myData")) || [];

const container = document.querySelector('[data-js="question-content"]');

for (let i = 0; i < savedData.length; i++) {
  let question = savedData[i];

  let questionCard = document.createElement("div");
  questionCard.classList.add("question-card");

  questionCard.innerHTML = `
    <div class="question-card-bookmark">
        <i class="uil uil-bookmark" data-js="bookmark-button"></i>
    </div>

    <div class="question-card-question" data-js="question-card-question">
        <h3>#${[i + 1]} ${question.question}</h3>
    </div>

    <button class="show-answer-button" data-js="button">Show Answer</button>
    
    <div class="question-card-answer display-none" data-js="question-card-answer">
        <h3>${question.answer}</h3>
    </div>
    
    <div class="question-card-tags">
        <ul class="tag-list">
            <li class="tag-list-item">${question.tag}</li>
        </ul>
    </div>
    
    `;

  container.appendChild(questionCard);

  const showAnswerButton = questionCard.querySelector('[data-js="button"]');
  const questionCardQuestion = questionCard.querySelector(
    '[data-js="question-card-question"]'
  );
  const questionCardAnswer = questionCard.querySelector(
    '[data-js="question-card-answer"]'
  );

  const bookmarkButton = questionCard.querySelector(
    '[data-js="bookmark-button"]'
  );

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("uis-bookmark");
  });

  showAnswerButton.addEventListener("click", () => {
    questionCardQuestion.classList.toggle("display-none");
    questionCardAnswer.classList.toggle("display-none");
    if (showAnswerButton.innerHTML === "Show Answer") {
      showAnswerButton.innerHTML = "Hide Answer";
    } else {
      showAnswerButton.innerHTML = "Show Answer";
    }
  });
}

const restoreDefault = document.querySelector(
  '[data-js="delete-local-storage"]'
);

restoreDefault.addEventListener("click", () => {
  if (savedData.length > 6) {
    savedData.pop();
    localStorage.setItem("myData", JSON.stringify(savedData));
    location.reload();
  } else {
    alert("Can't delete default questions!");
  }
});
