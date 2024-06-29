class TextGenerator {
  constructor(username) {
    this.username = username;
    this.options = {
      greeting: {
        element: "h2",
        class: "poppins-light gradient-text",
        text: `Welcome back, ${this.username}`,
      },
      hero_text: {
        element: "h1",
        class: "poppins-extrabold gradient-text",
        text: "Ready to jump back in?",
      },
    };
  }

  createText(params) {
    return `
      <${params.element} class="${params.class}">
        ${params.text}
      </${params.element}>
    `;
  }

  loadMain() {
    document.querySelector("main").innerHTML = `
      <div class="container">
        <section class="centered-x">
          ${this.createText(this.options.greeting)}
        </section>
        <section class="centered-x">
          ${this.createText(this.options.hero_text)}
        </section>
      </div>
    `;
  }
}

export function generateMain(name){
  const textGenerator = new TextGenerator(name);
  textGenerator.loadMain();
}
