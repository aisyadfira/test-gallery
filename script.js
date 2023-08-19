const imageGallery = document.getElementById("image-gallery");

// Fetch images from the API
fetch("https://13.239.136.78.nip.io/images")
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const images = data.images;

      // Create <img> elements and append to the image gallery
      images.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Uploaded Image";
        imageGallery.appendChild(imgElement);
      });
    } else {
      console.error("Error fetching images:", data.message);
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
