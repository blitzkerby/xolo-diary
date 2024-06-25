/* Purpose :  
 * -------------------------------------------------------
 * should change the svg color 
 * from white to black when 
 * the cursor is on hover
 * 
 * i am greatly considering of just using 2 svg files
 * that toggles when on hover and whatnot
 * rather than directly manipulating the darn svg file ):
 */


export function __hoverButton(btn_id) {
  const button = document.querySelector(`${btn_id}`);
  const svg_path_element = document.querySelector(`${btn_id} svg path`);

  svg_path_element.style.fill = "Black";

  button.addEventListener("mouseleave", () => {
    svg_path_element.style.fill = "White";
  });
}