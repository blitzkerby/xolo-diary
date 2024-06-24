const username = "Kerby";

const options = {
  greeting: {
    element : "h2",
    class   : "poppins-light  gradient-text",
    text    : `Welcome back, ${username}`,
  },

  hero_text: {
    element : "h1",
    class   : "poppins-extrabold  gradient-text",
    text    : "Ready to jump back in?",
  },
};

const createText = (params) => {
  return `
    <${params.element} class="${params.class}">
      ${params.text}
    </${params.element}>
  `;
};

export function loadMain() {
  document.querySelector("main").innerHTML = `
<div class="container">
    <section class="centered-x">
        ${createText(options.greeting)}
    </section>


    <section class="centered-x">
        ${createText(options.hero_text)}
    </section>
</div>
  `;
}
