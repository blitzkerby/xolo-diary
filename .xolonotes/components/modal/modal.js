class NoteEditor {
  constructor(id) {
    this.UID = id;
    this.generateHTML();

    this.titleContainer = document.querySelector("name");
    this.notesContainer = document.querySelector("content");
    this.dateContainer  = document.querySelector("date");
    this.closeButton    = document.querySelector(".close-btn");

    this.title = null;
    this.textarea = null;
    this.date = null;

    this.initialize();
  }

  initialize() {
    this.createTitle();
    this.createTextarea();
    this.createCalendar();
    this.loadSavedValue();
    this.setupEventListeners();
  }

  generateHTML() {
    const notes = document.querySelector("modal");
    notes.innerHTML = `
    <div class="container-wrapper centered-x centered-y">
        <div class="modal-container container">
            <button class="close-btn">TEST</button>
            <div class="header-container">
                <name></name>
            </div>
            <div class="content-container">
                <content></content>
            </div>
            <div class="date-container">
                <date></date>
                <!-- <p class="dm-mono-regular">
                    2021-01-01
                </p> -->
                <!-- <input 
                    class = "dm-mono-regular"
                    type  = "date" 
                    id    = "start" 
                    name  = "trip-start" 
                    value = "" 
                    min   = "" 
                    max   = "" /> -->
            </div>
        </div>
    </div>
    `;
  }

  createTitle() {
    const name = `
      <h1
        class           = "dm-mono-regular"
        id              = "title"
        contenteditable = "true"
      ></h1>
    `;

    this.titleContainer.innerHTML = name;
    this.title = document.getElementById("title");
  }

  createTextarea() {
    const content = `
      <textarea
        class       = "dm-mono-regular"
        id          = "notes"
        placeholder = "Enter text"
      ></textarea>
    `;
    this.notesContainer.innerHTML = content;
    this.textarea = document.getElementById("notes");
  }

  createCalendar() {
    let dateHTML = `<p class="dm-mono-regular" id="date">27-06-1955</p>`;
    this.dateContainer.innerHTML = dateHTML;
    this.date = document.getElementById("date");
  }

  loadSavedValue() {
    const savedTitle = localStorage.getItem(`${this.UID}-title`);
    const savedValue = localStorage.getItem(`${this.UID}-textarea`);

    this.title.innerText = savedTitle || "Untitled"; // Update this line
    this.textarea.value = savedValue;
  }

  setupEventListeners() {
    this.textarea.addEventListener("input", () => {
      localStorage.setItem(`${this.UID}-textarea`, this.textarea.value);
    });

    this.title.addEventListener("input", () => {
      localStorage.setItem(`${this.UID}-title`, this.title.innerText);
    });

    this.closeButton.addEventListener("click", () => {
      document.querySelector("modal").innerHTML = "";
      
      //from interface not modal
      let entry         = document.getElementById(this.UID)
      let savedTitle    = localStorage.getItem(`${this.UID}-title`) || "Untitled"
      let savedValue    = localStorage.getItem(`${this.UID}-textarea`) || ""

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
    });
  }
}
// Instantiate the class

export function LoadNoteEditor(id) {
  new NoteEditor(id);
}
