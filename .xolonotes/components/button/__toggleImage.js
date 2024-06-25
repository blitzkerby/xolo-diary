function toggleImagesOnHover(buttonId, image1Id, image2Id) {
    const button = document.getElementById(buttonId);
    const image1 = document.getElementById(image1Id);
    const image2 = document.getElementById(image2Id);
  
    const toggleVisibility = () => {
      image1.classList.toggle("hidden");
      image2.classList.toggle("hidden");
    };
  
    button.addEventListener("mouseover", toggleVisibility);
    button.addEventListener("mouseleave", toggleVisibility);
  }
