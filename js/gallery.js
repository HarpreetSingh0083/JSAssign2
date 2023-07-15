// JavaScript code for image gallery

// Array of gallery items
const galleryItems = [
  {
    largeImage: "images/flowers-pink-large.jpg",
    smallImage: "images/flowers-pink-small.jpg",
    title:
      "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
    credit:
      "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61514522",
  },
  {
    largeImage: "images/flowers-purple-large.jpg",
    smallImage: "images/flowers-purple-small.jpg",
    title: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
    credit:
      "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40957238",
  },
  {
    largeImage: "images/flowers-red-large.jpg",
    smallImage: "images/flowers-red-small.jpg",
    title:
      "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
    credit:
      "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48211466",
  },
  {
    largeImage: "images/flowers-white-large.jpg",
    smallImage: "images/flowers-white-small.jpg",
    title: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
    credit:
      "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48576226",
  },
  {
    largeImage: "images/flowers-yellow-large.jpg",
    smallImage: "images/flowers-yellow-small.jpg",
    title: "Market in Münster, North Rhine-Westphalia, Germany",
    credit:
      "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62071586",
  },
];

// Function to display the selected image in the featured area
function displayImage(index) {
  const featuredImage = document.querySelector("#gallery figure img");
  const imageTitle = document.querySelector("#gallery figure figcaption");

  // Update the featured image source and alt attributes
  featuredImage.src = galleryItems[index].largeImage;
  featuredImage.alt = galleryItems[index].title;

  // Update the image title
  imageTitle.textContent = galleryItems[index].title;
}

// Function to handle thumbnail click event
function handleThumbnailClick(index) {
  displayImage(index);
}

// Function to dynamically build the thumbnail list
function buildThumbnailList() {
  const thumbnailList = document.querySelector("#gallery ul");
  thumbnailList.innerHTML = ""; // Clear existing list

  // Iterate through gallery items and create list items with thumbnail images
  galleryItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    const thumbnailImage = document.createElement("img");

    // Set thumbnail image attributes
    thumbnailImage.src = item.smallImage;
    thumbnailImage.alt = item.title;
    thumbnailImage.width = 240;
    thumbnailImage.height = 160;

    // Add click event listener to the thumbnail image
    thumbnailImage.addEventListener("click", () => {
      handleThumbnailClick(index);
    });

    // Append the thumbnail image to the list item
    listItem.appendChild(thumbnailImage);

    // Append the list item to the thumbnail list
    thumbnailList.appendChild(listItem);
  });
}

// Initialize the image gallery
function initializeGallery() {
  // Build the thumbnail list
  buildThumbnailList();

  // Display the first image in the featured area
  displayImage(0);
}

// Call the initializeGallery function when the DOM is ready
document.addEventListener("DOMContentLoaded", initializeGallery);
