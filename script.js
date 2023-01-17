var images = ['img/23277.jpg', 'img/31189.webp', 'img/1534864.jpg','img/wp2827631.jpg'];

var currentImageIndex = 0;

function previous() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateSlider();
}

function next() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  var sliderImage = document.getElementById('slider-image');
  sliderImage.style.opacity = 0; // Set the opacity to 0
  setTimeout(function() {
    sliderImage.src = images[currentImageIndex];
    sliderImage.style.opacity = 1; // Set the opacity to 1
  }, 400); // wait for 1s before changing the image
}




