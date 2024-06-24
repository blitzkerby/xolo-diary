import { buttonPurpose } from "./buttonPurpose.js"

export function createButton(params){
  document.querySelector(`${params.target}`).innerHTML += `
    <div class="button-group">
      <button id="${params.btn_id}">
        <span>Button</span>
      </button>
    </div>
  `
  buttonPurpose(params)
} 





