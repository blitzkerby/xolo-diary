import { loadHeader } from "./components/header/header.mjs";
import { loadMain } from "./templates/main/main.mjs";
import { createButton } from "./components/button/button.mjs";

const buttons = {
  furniture: {
    path: "./.xolonotes/images/icons/furniture.svg",
    alt: "furniture",
  },
};

loadHeader();
loadMain();

document.querySelector(".hero").innerHTML += `
    <div class="buttons">
        ${createButton(buttons.furniture)}
    </div>
`;
