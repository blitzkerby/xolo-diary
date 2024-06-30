class TextGenerator {
  constructor() {
    this.options = {
      greeting: {
        element: "h2",
        class: "poppins-light gradient-text",
        text_welcome : 'Welcome.',
        text_return: 'Welcome back.',
      },
      hero_text: {
        element: "h1",
        class: "poppins-extrabold gradient-text",
        text: "Ready to jump back in?",
      },
    };
  }

  createText(params) {
    let greet_text = localStorage.getItem("cardIds") !== null ? params.text_return : params.text_welcome;
    return `
      <${params.element} class="${params.class}">
        ${greet_text || params.text}
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

export function generateMain(){
  const textGenerator = new TextGenerator();
  textGenerator.loadMain();
}
