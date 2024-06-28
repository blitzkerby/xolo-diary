import { LoadNoteEditor } from "../../components/modal/modal.js";

const card_template = `
    <div class="entry-card centered-x centered-y">
        <div class="entry-card-title"> UNTITLED </div>
        <div class="entry-card-body"> empty </div>
        <div class="entry-card-date"> #-##-#### </div>
        <img src="./.xolonotes/images/icons/delete.png" alt="delete">
    </div>
`;

const notesContainer = document.querySelector(".notes-container-wrapper");
const addMoreButton = document.querySelector("#create-button");

addMoreButton.addEventListener("click", () => {
    console.log("adding card...");

    // Generate a unique identifier for the new card
    const cardId = Date.now(); // You can use any method to create a unique ID

    // Create a new DOM element from the template
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
        <div id=${cardId}>
        </div>
    `;

    // Append the new card element to the container
    notesContainer.appendChild(cardElement);

    // load up note editor
    LoadNoteEditor(cardId)

    const closeButton = document.querySelector(".close-btn")
    closeButton.addEventListener("click", () => {
        loadCard(cardId)
    });


    // Store the card ID in local storage
    const existingCardIds = JSON.parse(localStorage.getItem("cardIds")) || [];
    existingCardIds.push(cardId);
    localStorage.setItem("cardIds", JSON.stringify(existingCardIds));
});


function loadCard(cardId)
{
    const entry = document.getElementById(cardId);
    const savedTitle = localStorage.getItem(`${cardId}-title`);
    const savedValue = localStorage.getItem(`${cardId}-textarea`);

    entry.innerHTML = `
        <div class="entry-card" id=${cardId}>
            <div class="entry-card-title"> ${savedTitle} </div>
            <div class="entry-card-body"> ${savedValue} </div>
            <div class="entry-card-date"> #-##-#### </div>
            <img src="./.xolonotes/images/icons/delete.png" alt="delete">
        </div>
    `;
}




const cardIdsString = localStorage.getItem("cardIds");

if (cardIdsString) {
    const cardIds = JSON.parse(cardIdsString);
    for (const cardId of cardIds) {
        console.log(cardId); // Access each card ID here

        // Create a new DOM element from the template
        const cardElement = document.createElement("div");
        cardElement.innerHTML = `
                <div id=${cardId}>
                </div>
            `;

        // Append the new card element to the container
        notesContainer.appendChild(cardElement);

        // load up note editor
        loadCard(cardId);
    }
} else {
    console.log("No card IDs found in local storage.");
}
