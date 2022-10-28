import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function makingGalleryItem(options) {
  return options
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");
}
galleryBox.insertAdjacentHTML("beforeend", makingGalleryItem(galleryItems));

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
