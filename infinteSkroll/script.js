const imageContainer = document.getElementById("image-container");
const laoder = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

//Helper function
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attribute[key]);
  }
}

// Create Elements for Links
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Event Listener, check when each is finished loading
    img.addEventListener("load", imageLoaded);
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Unsplash API
const count = 30;
const apiKey = "ttRI_MQgnIWeN9KoZu-VqNSWn0TluV0l1vghEYU0Ygs";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//fetch some pics from unsplash

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
  } catch (error) {}
}

//Event Listeners
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();
