const header_assets = {
  xolo_logo     : { id: "xolo-logo"  , className:"logo", alt: "xolo logo"  , path: "./.xolonotes/images/icons/xolo-logo.png" },
  github_logo   : { id: "github-logo", className:"logo", alt: "github logo", path: "./.xolonotes/images/icons/github-logo.svg" },
  page_text     : {
    home    : { id : "home-text"   , alt: "home"   , className:"text-card", path: "./.xolonotes/images/icons/Home.svg" },
    journal : { id : "jounral-text", alt: "journal", className:"text-card", path: "./.xolonotes/images/icons/Journal.svg"},
  }
};



function imgHTML (item)
{
    return `
    <img 
            class=${item.className}
            src=${item.path} 
            alt=${item.alt}
            id =${item.id}
        >
    `;
}

const xoloHTML    = imgHTML(header_assets.xolo_logo);
const githubHTML  = imgHTML(header_assets.github_logo);
const homeHTML    = imgHTML(header_assets.page_text.home);
const journalHTML = imgHTML(header_assets.page_text.journal);

export function loadHeader()
{
  document.querySelector("header").innerHTML = `
  <ul class="nav-list">
      <li class="nav-item nav-logo">${xoloHTML}</li>
      <li class="nav-item nav-text">${homeHTML}</li>
      <li class="nav-item nav-logo">${githubHTML}</li>
  </ul>
  <div class="header-canvas left-shift"><div>
  <div class="header-canvas right-shift"><div>
  `;
}