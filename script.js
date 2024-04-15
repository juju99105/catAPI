const url = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCats);

function createCatImage(photoUrl) {
   const image = document.createElement("img");
   image.src = photoUrl;
   image.alt = "A random cat";
   image.style.maxWidth = "100%";
   container.appendChild(image);
}

async function getRandomCats() {
   container.innerHTML = "";
   try {
      const response = await fetch(url);
      const json = await response.json();
      createCatImage(json[0].url);
   } catch (error) {
      console.error("Error fetching the cat image:", error);
      container.textContent = "Failed to load cat image. Try again.";
   }
}
