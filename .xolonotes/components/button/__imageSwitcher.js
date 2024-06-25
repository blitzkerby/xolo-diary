  class ImageSwitcher 
  {
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

    // MAKE THIS INTO A LOAD ALL CONTENT INTO BUTTON.JS



    onLoad(){
      // console.log("DOM is loaded!");
      this.hidesecondaryImage()
    }

    attachEventListeners() {
      // document.addEventListener("DOMContentLoaded", this.onLoad.bind(this))
      this.button.addEventListener("mouseover", this.showsecondaryImage.bind(this));
      this.button.addEventListener("mouseleave", this.hidesecondaryImage.bind(this));
    }
  }


// function to be exported
function createImageSwitcher(buttonId, defaultImageId, secondaryImageId) 
{
    return new ImageSwitcher(buttonId, defaultImageId, secondaryImageId);
}
  
export default createImageSwitcher;

//     (*) Usage
//   -------------------
//   > const imageSwitcher = createImageSwitcher(buttonId, defaultImageId, secondaryImageId);
//   > imageSwitcher.attachEventListeners(buttonId, defaultImageId, secondaryImageId);

