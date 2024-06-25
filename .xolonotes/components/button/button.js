import createImageSwitcher from "./__imageSwitcher.js"

function buttonHTML(params){
  return `
  <button id="${params.btn_id}">
    <img src="${params.img_path}"         alt="${params.img_alt}"         id="${params.btn_id}-default" >
    <img src="${params.img_active_path}"  alt="${params.img_active_alt}"  id="${params.btn_id}-secondary"  class="hidden">
  </button>
`
}




export function createButton(params){
  const content = buttonHTML(params)

  document.querySelector(`${params.target}`).innerHTML += `
    <div class="button-container">
      ${content}
    </div>
  `;

  // buttonPurpose(params.btn_id);
  const imageSwitcher = createImageSwitcher(params.btn_id, `${params.btn_id}-default`,`${params.btn_id}-secondary`);
  imageSwitcher.attachEventListeners();
} 





