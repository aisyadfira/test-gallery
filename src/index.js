// 1. Import classes
//===================

// Import the Cloudinary class.
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";

// 2. Set your cloud name
//========================

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "demo"
  }
});

// 3. Get your image
//===================

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image("docs/models");

// 4. Transform your image
//=========================

// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImage.resize(fill().width(250).height(250));

// 5. Deliver your image
// =========================

// Render the image in an 'img' element.
const imgElement = document.createElement("img");
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();
