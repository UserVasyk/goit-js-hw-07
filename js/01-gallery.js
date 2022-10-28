import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function makingGalleryItem(options) {
  return options
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
  </a>
</div>`
    )
    .join("");
}
galleryBox.insertAdjacentHTML("beforeend", makingGalleryItem(galleryItems));

galleryBox.addEventListener("click", onGalleryItemTarget);

function onGalleryItemTarget(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img  src="${evt.target.dataset.source}">`
  );
  instance.show();

  galleryBox.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
