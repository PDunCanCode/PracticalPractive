const imageContainer = document.getElementById("image-container");

// Unsplash API
const count = 30;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = "ttRI_MQgnIWeN9KoZu-VqNSWn0TluV0l1vghEYU0Ygs";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//fetch some pics from unsplash

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {}
}

// On Load
getPhotos();
