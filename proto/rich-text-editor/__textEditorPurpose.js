class TextEditor {
  constructor() {
    this.optionsButtons = document.querySelectorAll(".option-button");
    this.advancedOptionButton = document.querySelectorAll(".adv-option-button");
    this.fontName = document.getElementById("fontName");
    this.fontSizeRef = document.getElementById("fontSize");
    this.linkButton = document.getElementById("createLink");
    this.alignButtons = document.querySelectorAll(".align");
    this.spacingButtons = document.querySelectorAll(".spacing");
    this.formatButtons = document.querySelectorAll(".format");
    this.scriptButtons = document.querySelectorAll(".script");

    this.fontList = [
      "Arial",
      "Verdana",
      "Times New Roman",
      "Garamond",
      "Georgia",
      "Courier New",
      "cursive",
    ];

    this.initialize();
  }

  initialize() {
    this.highlightButtons(this.alignButtons, true);
    this.highlightButtons(this.spacingButtons, true);
    this.highlightButtons(this.formatButtons, false);
    this.highlightButtons(this.scriptButtons, true);

    this.createFontOptions();
    this.createFontSizeOptions();

    this.fontSizeRef.value = 3;

    this.optionsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.modifyText(button.id, false, null);
      });
    });

    this.advancedOptionButton.forEach((button) => {
      button.addEventListener("change", () => {
        this.modifyText(button.id, false, button.value);
      });
    });

    this.linkButton.addEventListener("click", () => {
      const userLink = prompt("Enter a URL");
      const formattedLink = /http/i.test(userLink)
        ? userLink
        : "http://" + userLink;
      this.modifyText(this.linkButton.id, false, formattedLink);
    });
  }

  modifyText(command, defaultUi, value) {
    document.execCommand(command, defaultUi, value);
  }

  createFontOptions() {
    this.fontList.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.innerHTML = value;
      this.fontName.appendChild(option);
    });
  }

  createFontSizeOptions() {
    for (let i = 1; i <= 7; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.innerHTML = i;
      this.fontSizeRef.appendChild(option);
    }
  }

  highlightButtons(className, needsRemoval) {
    className.forEach((button) => {
      button.addEventListener("click", () => {
        if (needsRemoval) {
          let alreadyActive = false;
          if (button.classList.contains("active")) {
            alreadyActive = true;
          }
          this.highlighterRemover(className);
          if (!alreadyActive) {
            button.classList.add("active");
          }
        } else {
          button.classList.toggle("active");
        }
      });
    });
  }

  highlighterRemover(className) {
    className.forEach((button) => {
      button.classList.remove("active");
    });
  }
}

// Usage
const textEditor = new TextEditor();
