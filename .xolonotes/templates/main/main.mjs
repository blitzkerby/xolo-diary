import { loadFooter } from "../../components/footer/footer.mjs";
class TextGenerator {
  constructor() {
    this.options = {
      greeting: {
        element: "h2",
        class: "poppins-light gradient-text",
        text_welcome: "Welcome.",
        text_return: "Welcome back.",
      },
      hero_text: {
        element: "h1",
        class: "poppins-extrabold gradient-text",
        text_welcome: "Ready to jump in?",
        text_return: "Ready to jump back in?",
      },
    };
  }

  createText(params) {
    let text =
      localStorage.getItem("cardIds") !== null
        ? params.text_return
        : params.text_welcome;

    return `
      <${params.element} class="${params.class}">
        ${text}
      </${params.element}>
    `;
  }

  loadName(){
    const name = localStorage.getItem('name')
    if (name !== "") {
      this.options.greeting.text_welcome = `Welcome, ${localStorage.getItem("name")}.`;
    }
  }


  loadMain() {
    if (localStorage.getItem("name") !== null) {
      loadFooter();
      this.loadName();
      this.generateMain();
      this.loadButtons();
    } else {
      this.generateMain();
      this.getName();
    }
  }

  generateMain() {
    document.querySelector("main").innerHTML = `
      <div class="container">
        <section class="centered-x hero-title">
          ${this.createText(this.options.greeting)}
        </section>
        <section class="centered-x hero-subtitle">
          ${this.createText(this.options.hero_text)}
        </section>
      </div>
    `;
  }

  getName() {
    const sub_main = document.querySelector("sub-main");
    sub_main.innerHTML = `
        <div class="form centered-y">
            <div class="container">
              <div class="title-container centered-x">
                <p>Enter your name</p>
              </div>
              <div class="input-container centered-x">
                  <input type="text" class="dm-mono-medium">
              </div>
              <div class="button-group centered-x">
                  <button class="dm-mono-medium btn" id="save-btn">Save</button>
                  <button class="dm-mono-medium btn" id="cancel-btn">Cancel</button>
              </div>
            </div>
        </div>
    `;

    const input = sub_main.querySelector("input");
    const saveBtn = sub_main.querySelector("#save-btn");
    const cancelBtn = sub_main.querySelector("#cancel-btn");

    // input.addEventListener("input", () => {
    //   const username = input.value; // Get the input value
    //   localStorage.setItem("username", username); // Store it in local storage
    // });

    saveBtn.addEventListener("click", () => {
      const username = input.value;
      localStorage.setItem("name", username || "");
      this.loadMain()
    });

    cancelBtn.addEventListener("click", () => {
      sub_main.innerHTML = "";
      let name = localStorage.getItem("name") || "";
      localStorage.setItem("name", name);
      this.loadMain();
    });
  }

  loadButtons() {
    const sub_main = document.querySelector("sub-main");
    sub_main.innerHTML = `
        <div class="button-group-container centered-x screen-fit section-space">
            <div class="button-group centered-x even-out">
                <a class="btn" href="./journal.html">
                    <img src="/.xolonotes/images/icons/notebook-black.svg" alt="">
                </a>
                <button class="btn static">
                    <img src="/.xolonotes/images/icons/calendar-black.svg" alt="">
                </button>
                <button class="btn" id="profile">
                    <img src="/.xolonotes/images/icons/person-black.svg" alt="">
                </button>
            </div>
        </div>
    `;

    const profile_btn = document.getElementById('profile')
    profile_btn.addEventListener("click", this.getName.bind(this))
  }
}



export function generateMain(){
  const textGenerator = new TextGenerator();
  textGenerator.loadMain();
}
