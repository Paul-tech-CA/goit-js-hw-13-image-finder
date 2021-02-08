import imageTpl from "../templates/imageTpl.hbs";
import refs from "./refs.js";
import { error } from "@pnotify/core/";
import { success } from "@pnotify/core/";
import "../js/notifications.js";

function markupGallery({ hits }) {
  if (hits.length === 0) {
    error({
      text: "Incorrect input! Please, try one more time!",
      delay: 3000,
    });
  }
  const markup = imageTpl(hits);
  refs.galleryContainer.insertAdjacentHTML("beforeend", markup);
  success({
    text: hits[0].tags,
    delay: 3000,
  });
}

export default markupGallery;
