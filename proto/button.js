class ImageSwitcher {
    constructor(buttonId, defaultImageId, activeImageId) {
      this.button = document.getElementById(buttonId);
      this.defaultImage = document.getElementById(defaultImageId);
      this.activeImage = document.getElementById(activeImageId);
  
      this.showActiveImage(); // Initially show active image
    }
  
    showActiveImage() {
      this.activeImage.classList.remove("hidden");
      this.defaultImage.classList.add("hidden");
    }
  
    hideActiveImage() {
      this.activeImage.classList.add("hidden");
      this.defaultImage.classList.remove("hidden");
    }
  
    attachEventListeners() {
      this.button.addEventListener("mouseleave", this.hideActiveImage.bind(this));
      this.button.addEventListener("mouseover", this.__hoverButton.bind(this)); // Assuming __hoverButton is a method within the class
    }
}