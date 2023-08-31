const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const savedData = JSON.parse(localStorage.getItem("myData")) || [];

  savedData.push(data);

  localStorage.setItem("myData", JSON.stringify(savedData));

  e.target.reset();
  formElements.question.focus();
});
