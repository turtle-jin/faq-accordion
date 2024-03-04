const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".sections>p")

const section1Para = document.querySelector(".section1>p");
section1Para.style.display = "flex";


function toggleAnswers(e) {
    if (e.style.display = "none") {
        e.style.display = "flex";
    } else {
        e.style.display = "none";
    }
}

