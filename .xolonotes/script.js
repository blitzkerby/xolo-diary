import { loadFooter } from "./components/footer/footer.mjs";
import { loadHeader }   from "./components/header/header.mjs";
import { generateMain } from "./templates/main/main.mjs";


loadHeader();
generateMain();
loadFooter();
