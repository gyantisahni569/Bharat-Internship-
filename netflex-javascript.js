// Get all elements with the class "FAQ-toggle"
const FAQButtons = document.querySelectorAll(".FAQ-toggle");
const FAQAnswers = document.querySelectorAll(".FAQ-answer");

FAQButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleAnswer(index));
});

function toggleAnswer(index) {
  // Toggle the answer's display based on the index
  if (FAQAnswers[index].style.display === "block" || FAQAnswers[index].style.display === "") {
    FAQAnswers[index].style.display = "none";
  } else {
    FAQAnswers[index].style.display = "block";
  }
}