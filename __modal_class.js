// async function fetchText() {
//   try {
//     const response = await fetch('./temporary.txt');
//     if (!response.ok) {
//       throw new Error(`Error fetching the file: ${response.status} ${response.statusText}`);
//     }
//     const text = await response.text();
//     // const formattedText = text.replace(/\n/g, '<br>');
//     return text;

//   } catch (error) {
//     console.error('Error fetching the file:', error);
//     return null;
//   }
// }

// // Usage:
// const content = await fetchText();

// const notes = document.querySelector("notes")
// const content = `
//     <textarea class="dm-mono-regular" placeholder="Enter text" id="notes">${content}</textarea>
// `;

// notes.innerHTML = `
//     <div class="container-wrapper centered-x centered-y">
//         <div class="modal-container container">
//             <div class="header-container">
//                 <h1 class="dm-mono-regular" contenteditable="True"  placeholder="Untitled">
//                     The End?
//                 </h1>
//             </div>
//             <div class="content-container">
//                 ${content}
//             </div>
//             <div class="date-container">
//                 <!-- <p class="dm-mono-regular">
//                     2021-01-01
//                 </p> -->
//                 <input 
//                     class = "dm-mono-regular"
//                     type  = "date" 
//                     id    = "start" 
//                     name  = "trip-start" 
//                     value = "2018-07-22" 
//                     min   = "2018-01-01" 
//                     max   = "2018-12-31" />
//             </div>
//         </div>
//     </div>
//     `;


// const textarea = document.getElementById("notes");
// localStorage.setItem('textareaValue', textarea.value);

class NoteEditor {
  constructor(id) {
    this.UID = id
    this.generateHTML();

    this.titleContainer = document.querySelector("name");
    this.notesContainer = document.querySelector("content");
    this.dateContainer = document.querySelector("date")

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

  generateHTML(){
    const notes = document.querySelector("notes")
    notes.innerHTML = `
    <div class="container-wrapper centered-x centered-y">
        <div class="modal-container container">
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
    let dateHTML = `<p class="dm-mono-regular" id="date">27-06-1955</p>`
    this.dateContainer.innerHTML = dateHTML
    this.date = document.getElementById("date")
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
  }
}
// Instantiate the class

export function LoadNoteEditor(id){
  new NoteEditor(id);
}
