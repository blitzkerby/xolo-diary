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
  constructor() {
    this.titleContainer = document.querySelector("name");
    this.notesContainer = document.querySelector("content");
    this.title = null;
    this.textarea = null;
    this.initialize();
  }

  initialize() {
    this.createTitle();
    this.createTextarea();
    this.loadSavedValue();
    this.setupEventListeners();
  }

  createTitle() {
    const name = `
      <h1
        class           = "dm-mono-regular"
        id              = "title"
        contenteditable = "true"
      >
      </h1>
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
      >
      </textarea>
    `;
    this.notesContainer.innerHTML = content;
    this.textarea = document.getElementById("notes");
  }

  loadSavedValue() {
    const savedTitle = localStorage.getItem("titleValue");
    const savedValue = localStorage.getItem("textareaValue");

    if (savedValue) {
      this.textarea.value = savedValue;
    }
    if (savedTitle) {
      this.title.innerText = savedTitle; // Update this line
    } else {
      this.title.innerText = "Untitled";
    }
  }

  setupEventListeners() {
    this.textarea.addEventListener("input", () => {
      localStorage.setItem("textareaValue", this.textarea.value);
    });

    this.title.addEventListener("input", () => {
      localStorage.setItem("titleValue", this.title.innerText);
    });
  }
}
// Instantiate the class
const noteEditor = new NoteEditor();
