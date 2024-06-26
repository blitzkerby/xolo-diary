export function buttonPurpose(btn_id){
    const button = document.getElementById(`${btn_id}`);
    const default_img = document.getElementById(`${btn_id}-default`);
    const active_img  = document.getElementById(`${btn_id}-active`);
  
    active_img.classList.remove("hidden");
    default_img.classList.add("hidden");
  
    button.addEventListener("mouseleave", () => {
      default_img.classList.remove("hidden");
      active_img.classList.add("hidden");
    });

    button.addEventListener("mouseover", __hoverButton(btn_id));
}