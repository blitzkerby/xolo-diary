const header_assets = {
  xolo_logo: { id: "xolo-logo", className: "logo", alt: "xolo logo", path: "./.xolonotes/images/icons/xolo-logo.png" },
  github_logo: { id: "github-logo", className: "logo", alt: "github logo", path: "./.xolonotes/images/icons/github-logo.svg", link: "https://github.com/blitzkerby/xolo-diary.git" },
  page_text: {
    home: { id: "home-text", alt: "home", className: "text-card", path: "./.xolonotes/images/icons/Home.svg" },
    journal: { id: "journal-text", alt: "journal", className: "text-card", path: "./.xolonotes/images/icons/Journal.svg" },
  }
};

function imgHTML(item) {
  return `
    <img 
      class=${item.className}
      src=${item.path} 
      alt=${item.alt}
      id=${item.id}
    >
  `;
}

const xoloHTML = imgHTML(header_assets.xolo_logo);
const githubHTML = imgHTML(header_assets.github_logo);

export function loadHeader() {
  const header = document.querySelector("header");
  const elementId = header.getAttribute("id");

  // Dynamically select the correct page text based on elementId
  const pageText = header_assets.page_text[elementId];
  const pageImg = imgHTML(pageText);

  header.innerHTML = `
    <ul class="nav-list">
      <li class="nav-item nav-logo">${xoloHTML}</li>
      <li class="nav-item nav-text">${pageImg}</li>
      <li class="nav-item nav-logo">
        <a href="${header_assets.github_logo.link}" target="_blank">${githubHTML}</a>
      </li>
    </ul>
    <div class="header-canvas left-shift"></div>
    <div class="header-canvas right-shift"></div>
  `;
}
