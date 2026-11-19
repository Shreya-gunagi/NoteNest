// Select search elements
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const subjectCards = document.querySelectorAll(".card");

// Search function
function searchSubjects() {
    const searchText = searchInput.value.toLowerCase();
    let found = 0;

    subjectCards.forEach(function(card) {
        const subject = card.textContent.toLowerCase();

        if (subject.includes(searchText)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (searchText === "") {
        subjectCards.forEach(function(card) {
            card.style.display = "block";
        });
    }
}

// Search button click
searchButton.addEventListener("click", searchSubjects);

// Search using Enter key
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchSubjects();
    }
});