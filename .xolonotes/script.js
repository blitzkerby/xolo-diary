import { loadHeader } from "./components/header/header.mjs";
import { loadMain } from "./templates/main/main.mjs";
import { createButton } from "./components/button/button.js";

loadHeader();
loadMain();

const button = {
    note : 
    { 
        id : "notebook-button",
        img_path : "./.xolonotes/images/icons/notebook.svg",
        img_alt  : "notebook icon",
    }

}


const params = {
    target    : 'main .container',
    btn_id    : 'notebook-btn',
    img_path  : "./.xolonotes/images/icons/notebook.svg",
    img_alt   : "notebook icon",
}

createButton(params)