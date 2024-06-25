class ImageSwitcher {
    constructor(buttonId, defaultImageId, secondaryImageId) {
      this.button = document.getElementById(buttonId);
      this.defaultImage = document.getElementById(defaultImageId);
      this.secondaryImage = document.getElementById(secondaryImageId);
  
      this.showsecondaryImage(); // Initially show active image
    }
  
    showsecondaryImage() {
      this.secondaryImage.classList.remove("hidden");
      this.defaultImage.classList.add("hidden");
    }
  
    hidesecondaryImage() {
      this.secondaryImage.classList.add("hidden");
      this.defaultImage.classList.remove("hidden");
    }

    toggleImages(){
      const toggleVisibility = () => {
        this.defaultImage.classList.toggle("hidden");
        this.secondaryImage.classList.toggle("hidden");
        console.log("BLYAT")
      }

      this.button.addEventListener("mouseover", toggleVisibility);
      this.button.addEventListener("mouseleave", toggleVisibility);
    }
  
    attachEventListeners() {
      this.button.addEventListener("mouseleave", this.hidesecondaryImage.bind(this));
      this.button.addEventListener("mouseover", this.toggleImages.bind(this)); // Assuming __hoverButton is a method within the class
    }
  }


// function to be exported
function createImageSwitcher(buttonId, defaultImageId, secondaryImageId) {
    return new ImageSwitcher(buttonId, defaultImageId, secondaryImageId);
}
  
export default createImageSwitcher;

//     (*) Usage
//   -------------------
//   > const imageSwitcher = createImageSwitcher("btn_id", "btn_id-default", "btn_id-active");
//   > imageSwitcher.attachEventListeners();

