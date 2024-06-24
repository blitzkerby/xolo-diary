export function createButton(params){
  return `
  <div scale-up style="--order:1; --bg:220,38,38">

    <img src="${params.path}" alt="${params.alt}">

    <button type="button">
      <p>Furniture</p>
    </button>
  </div>
  `;
}