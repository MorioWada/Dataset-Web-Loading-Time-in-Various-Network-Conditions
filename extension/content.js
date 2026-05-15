function replaceImages() {
  // Skip if the page itself is just an image
  if (document.body.childElementCount === 1 &&
      document.body.firstChild.tagName === "IMG") {
    return;
  }

  const images = document.querySelectorAll("img");

  images.forEach(img => {
    const src = img.src;

    // Create button placeholder
    const button = document.createElement("button");
    button.textContent = "Open Image";
    button.style.width = img.width ? img.width + "px" : "auto";
    button.style.height = img.height ? img.height + "px" : "auto";

    // Replace image with button
    img.replaceWith(button);

    // On click, open image in new tab
    if (src) {
      button.addEventListener("click", () => {
        window.open(src, "_blank");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", replaceImages);