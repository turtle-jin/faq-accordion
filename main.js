const sections = document.querySelectorAll(".sections");
const answers = document.querySelectorAll(".sections>p")



// Add event listener to each section
sections.forEach((section) => {
    section.addEventListener("click", toggleAnswers);
});

// Function to toggle answers' display
function toggleAnswers(event) {
    // Find the clicked section
    const parentSection = event.currentTarget;
    // console.log(parentSection);
    // Find the answers within the clicked section
    const directChildAnswers = parentSection.querySelector(".answers");
    let icon = parentSection.querySelector("img");

    // Toggle the display property
    if (directChildAnswers.style.display === "none" || directChildAnswers.style.display === "") {
        directChildAnswers.style.display = "flex";
        icon.src = "assets/images/icon-minus.svg";
    } else {
        directChildAnswers.style.display = "none";
        icon.src = "assets/images/icon-plus.svg";
    }
}