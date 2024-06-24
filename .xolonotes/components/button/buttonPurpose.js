import { __hoverButton } from "./__hoverButton.js" 

export function buttonPurpose(params){
    const button = document.getElementById(`${params.btn_id}`)

    button.addEventListener("click", __hoverButton)
}