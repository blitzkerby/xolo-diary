import { LoadNoteEditor } from "../../components/modal/modal.js";

class NotesApp {
  constructor() {
    this.notesContainer = document.querySelector(".notes-container-wrapper");
    this.addMoreButton = document.querySelector("#create-button");
    this.cardIds = JSON.parse(localStorage.getItem("cardIds")) || [];

    this.addMoreButton.addEventListener("click", this.addCard.bind(this));
    this.loadExistingCards();
  }

  /*
   *  author  :   K3rby
   *  type    :   main function
   *  target  :   #create-card
   *
   *  description :
   *  -----------------------------------
   *  - Primary purpose:
   *  (1) handling the identification
   *  when creating new cards
   *
   *  (2) opens up new card by calling
   *  LoadNoteEditor()
   *
   *  (3) stores each card properly into
   *  local storage
   *
   *  - Secondary purpose:
   *  (~) handles close button logic
   *  -----------------------------------
   */
  addCard() {
    console.log("Adding card...");

    const cardId = Date.now(); // Generate a unique identifier for the new card
    const cardElement = document.createElement("card");
    cardElement.setAttribute("id", cardId);

    this.notesContainer.appendChild(cardElement);

    // Load note editor
    LoadNoteEditor(cardId);

    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
      this.loadCard(cardId)
    });

    this.cardIds.push(cardId);
    localStorage.setItem("cardIds", JSON.stringify(this.cardIds));
  }

  /*
   *  author :  K3rby
   *  type   :  sub-function
   *  target :  closeButton
   *
   *  description :
   *  -----------------------------------
   *  - Primary purpose:
   *  (~) works alongside addCard() to
   *  display the cards on screen by
   *  directly adding HTML elements into
   *  entry
   *  -----------------------------------
   */
  loadCard(cardId) {
    let entry = document.getElementById(cardId);
    let savedTitle = localStorage.getItem(`${cardId}-title`) || "Untitled";
    let savedValue = localStorage.getItem(`${cardId}-textarea`) || "";

    entry.innerHTML = `
        <div class="entry-body">
          <div class="entry-header">
            <div class="entry-card-title">${savedTitle}</div>
            <img class="delete-button" src="./.xolonotes/images/icons/delete.png" alt="delete">
          </div>
          <div class="entry-card-body">${savedValue}</div>
        </div>
        <div class="entry-footer">
          <div class="entry-card-date">#-##-####</div>
        </div>
      `;

    entry.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG") {
        document.getElementById(cardId).remove()

        const cardIds = JSON.parse(localStorage.getItem("cardIds")) || [];

        // Find the index of the card ID to remove
        const indexToRemove = cardIds.indexOf(cardId);

        if (indexToRemove !== -1) {
          // Remove the card ID from the list
          cardIds.splice(indexToRemove, 1);

          // Update local storage with the modified list
          localStorage.setItem("cardIds", JSON.stringify(cardIds));
        } else {
          console.log(`Card ID ${cardId} not found.`);
        }

        localStorage.removeItem(`${cardId}-title`);
        localStorage.removeItem(`${cardId}-textarea`);
      } else {
        LoadNoteEditor(cardId);
      }
    });
  }

  /*
   *  author :  K3rby
   *  type   :  sub-function
   *  target :  notesContainer
   *
   *  description :
   *  -----------------------------------
   *  - Primary purpose:
   *  (~) Populate the notes container
   *  with all pre-existing notes
   *  -----------------------------------
   */
  loadExistingCards() {
    for (const cardId of this.cardIds) {
      const cardElement = document.createElement("card");
      cardElement.setAttribute("id", cardId);

      this.notesContainer.appendChild(cardElement);
      this.loadCard(cardId);
    }

    if (this.cardIds.length === 0) {
      console.log("No card IDs found in local storage.");
    }
  }

}

// Initialize the NotesApp
const notesApp = new NotesApp();


