class NotesManager {
    constructor(config) {
        this.container        = document.querySelector(config.notes_container);
        this.createBtn        = document.querySelector(config.create_btn);
        this.deleteImagePath  = config.delete_img_path;
        this.notes            = [];

        this.showNotes();
        this.attachEventListeners();
    }

    showNotes() {
        const storedNotes = localStorage.getItem("notes");
        this.container.innerHTML = storedNotes || ""; // Set empty string if no notes stored
    }

    updateStorage() {
        localStorage.setItem("notes", this.container.innerHTML);
    }

    createNote() {
        const inputBox  = document.createElement("p");
        const deleteImg = document.createElement("img");

        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");

        deleteImg.src = this.deleteImagePath;

        this.container.appendChild(inputBox).appendChild(deleteImg);
        this.notes.push(inputBox); // Add new note to notes array
        this.updateStorage();
    }

    attachEventListeners() {
        this.createBtn.addEventListener("click", this.createNote.bind(this)); // Bind 'this' context

        this.container.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            const noteToDelete = e.target.parentElement;
            this.container.removeChild(noteToDelete);
            this.notes.splice(this.notes.indexOf(noteToDelete.querySelector("p")), 1); // Remove from notes array
            this.updateStorage();
        }
        else if (e.target.tagName === "P") {
            this.notes.forEach((note) => {
            note.addEventListener("keyup", this.updateStorage.bind(this));
            });
        }
        });
    }
}

const config = {
    notes_container: ".notes-container-wrapper",
    create_btn: ".btn",
    delete_img_path: "./.xolonotes/images/icons/delete.png",
    input_box: ".input-box",
};

const notesManager = new NotesManager(config);