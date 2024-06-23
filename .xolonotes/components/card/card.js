const data = {
  notes_container : ".notes-container",
  create_btn : ".btn",
  delete_img_path : "./.xolonotes/images/icons/delete.png",
  input_box : ".input-box",
}


const notesContainer  = document.querySelector(data.notes_container);
const createBtn       = document.querySelector(data.create_btn);
const delete_img_path = data.delete_img_path;

let notes = document.querySelectorAll(data.input_box);

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

//updates the data in the browser
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  img.src = delete_img_path;

  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
