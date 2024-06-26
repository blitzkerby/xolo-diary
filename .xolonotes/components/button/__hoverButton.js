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
  console.log("test")
  
  const button      = document.getElementById(btn_id);
  const default_img = document.getElementById(`${btn_id}-default`);
  const active_img  = document.getElementById(`${btn_id}-active`);

  active_img.classList.remove("hidden");
  default_img.classList.add("hidden");

  button.addEventListener("mouseleave", () => {
    default_img.classList.remove("hidden");
    active_img.classList.add("hidden");
  });
}