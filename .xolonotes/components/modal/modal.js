const config = {
  font_family: "dm-mono-regular",

  close_btn : {
    path : "/.xolonotes/images/icons/close-button.svg",
    alt  : "close button"
  }
};


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
    this.createDate();
    this.loadSavedValue();
    this.setupEventListeners();
  }

  generateHTML() {
    const notes = document.querySelector("modal");
    notes.innerHTML = `
    <div class="container-wrapper centered-x centered-y">
        <div class="modal-container container">
          <div class="header-container">
            <name></name>
            <button class="close-btn">
              <img src=${config.close_btn.path} alt=${config.close_btn.alt}>
            </button>
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
      ></h1>`;

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

  createDate() {
    const dateHTML = `
    <p class="dm-mono-regular" id="date"></p>
    `;
    this.dateContainer.innerHTML = dateHTML;
    this.date = document.getElementById("date");
    document.querySelector("#date").addEventListener("click", () => { this.openCalendar();});
  }

  loadSavedValue() {
    const savedTitle = localStorage.getItem(`${this.UID}-title`);
    const savedValue = localStorage.getItem(`${this.UID}-textarea`);
    const savedDate  = localStorage.getItem(`${this.UID}-date`);

    this.title.innerText = savedTitle || "Untitled"; // Update this line
    this.textarea.value  = savedValue;
    this.date.innerText  = savedDate || "##-##-####"; // Update this line
  }

  openCalendar() {
    console.log(this.dateContainer.innerHTML)
    let calendarHTML = `
              <input 
                  class = "dm-mono-regular"
                  type  = "date" 
                  id    = "calendar" 
                  name  = "trip-start" 
                  value = "" 
                  min   = "" 
                  max   = "" />
    `; 

    this.dateContainer.innerHTML = calendarHTML;
    const calendar = document.querySelector("#calendar");
    calendar.addEventListener("change", () => {
      this.date = calendar.value;
      console.log(this.date)
      localStorage.setItem(`${this.UID}-date`, this.date);
      this.createDate();
      this.loadSavedValue();
    });
  }

  updateCard(){
    let modal = document.querySelector("modal");
    modal.innerHTML = "";
    modal.classList.add("hidden");

    //from interface not modal
    let entry = document.getElementById(this.UID);
    let savedTitle = localStorage.getItem(`${this.UID}-title`) || "Untitled";
    let savedValue = localStorage.getItem(`${this.UID}-textarea`) || "";
    let savedDate = localStorage.getItem(`${this.UID}-date`) || "##-##-####";

    entry.innerHTML = `
        <div class="entry-body">
          <div class="entry-header">
            <div class="entry-card-title ${config.font_family}">
              ${savedTitle}
            </div>
            <img class="delete-button" src="./.xolonotes/images/icons/delete.png" alt="delete">
          </div>
          <div class="entry-card-body">
            ${savedValue}
          </div>
        </div>
        <div class="entry-footer">
          <div class="entry-card-date">
            ${savedDate}  
          <div>
        </div>
      `;
  }


  setupEventListeners() {
    this.title.addEventListener("input", () => { localStorage.setItem(`${this.UID}-title`, this.title.innerText)});
    this.textarea.addEventListener("input", () => { localStorage.setItem(`${this.UID}-textarea`, this.textarea.value)});
    this.closeButton.addEventListener("click", () => { this.updateCard() });
  }
}
// Instantiate the class

export function LoadNoteEditor(id) {
  new NoteEditor(id);
}
