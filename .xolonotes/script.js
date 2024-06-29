import { loadHeader }       from "./components/header/header.mjs";
import { loadMain }         from      "./templates/main/main.mjs";
// import { createButton }     from  "./components/button/button.js";

loadHeader();
loadMain();

// const buttons = {
//     notes : {
//         container    : 'main .container',
//         btn_id    : 'notebook-btn',
//         img_path  : "./.xolonotes/images/icons/notebook-white.svg",
//         img_alt   : "notebook icon",
//         img_secondary_path  : "./.xolonotes/images/icons/notebook-black.svg",
//         img_secondary_alt   : "notebook secondary icon",
//     },
    
//     calendar : {
//         container : 'main .button-container',
//         btn_id : 'calendar-btn',
//         img_path : "./.xolonotes/images/icons/calendar-white.svg",
//         img_alt : "calendar icon",
//         img_secondary_path : "./.xolonotes/images/icons/calendar-black.svg",
//         img_secondary_alt  : "calendar secondary icon",
//     },
// }

// createButton(buttons.notes)
// createButton(buttons.calendar)
