import { __hoverButton } from "./__hoverButton.js" 

export function buttonPurpose(btn_id){
    const button = document.getElementById(`${btn_id}`);

    const default_img = document.getElementById(`${btn_id}-default`);
    const active_img = document.getElementById(`${btn_id}-active`);
     

    button.addEventListener("mouseover", __hoverButton(btn_id));
}