let noteUID = [
    "note-1",
    "note-2",
]

let title = localStorage.getItem(`${noteUID[0]}-title`)
let text  = localStorage.getItem(`${noteUID[0]}-textarea`)


const notes_container = document.querySelector(".notes-container-wrapper")
notes_container.innerHTML = `
    <p class="input-box">
        ${title}
        ${text}
        <img src="/.xolonotes/images/icons/delete.png" alt="delete">
    </p>
`

