import createImageSwitcher from "./__imageSwitcher.js"

function buttonHTML(params){
  return `
  <button id="${params.btn_id}">
    <img src="${params.img_path}"         alt="${params.img_alt}"         id="${params.btn_id}-default">
    <img src="${params.img_secondary_path}"  alt="${params.img_secondary_alt}"  id="${params.btn_id}-secondary">
  </button>
`
}

function load() {
  const buttonList = document.querySelectorAll("button");
  buttonList.forEach(button => {
    console.log(button)
  });
}



export function createButton(params){
  const content = buttonHTML(params)

  if (!params.target.includes(".button-container")){
    document.querySelector(`${params.target}`).innerHTML += `<div class="button-container">${content}</div>`;
  }else{
    document.querySelector(`${params.target}`).innerHTML += content;
  }

  // buttonPurpose(params.btn_id);
  const imageSwitcher = createImageSwitcher(params.btn_id, `${params.btn_id}-default`,`${params.btn_id}-secondary`);
  imageSwitcher.attachEventListeners();
  // load()
} 





