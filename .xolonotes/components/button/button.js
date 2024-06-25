import { buttonPurpose } from "./__buttonPurpose.js"

export function createButton(params){
  const buttonHTML = (params) => {
    return `
      <button id="${params.btn_id}">
        <img src="${params.img_path}"         alt="${params.img_alt}"         id="${params.btn_id}-default">
        <img src="${params.img_active_path}"  alt="${params.img_active_alt}"  id="${params.btn_id}-active">
      </button>
    `
  }

  const content = buttonHTML(params)

  document.querySelector(`${params.target}`).innerHTML += `
    <div class="button-group">
      <button id="${params.btn_id}" class='fade-in'>
        <span>${content}</span>
      </button>
    </div>
  `;
  buttonPurpose(params.btn_id);
} 





