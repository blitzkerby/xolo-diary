import { loadHeader } from "./components/header/header.mjs";
import { loadMain } from "./templates/main/main.mjs";
import { createButton } from "./components/button/button.js";

loadHeader();
loadMain();

const buttons = {
    notes : {
        target    : 'main .container',
        btn_id    : 'notebook-btn',
        img_path  : "./.xolonotes/images/icons/notebook-white.svg",
        img_alt   : "notebook icon",
        img_active_path  : "./.xolonotes/images/icons/notebook-black.svg",
        img_active_alt   : "notebook active icon",
    },
    

}

createButton(buttons.notes)