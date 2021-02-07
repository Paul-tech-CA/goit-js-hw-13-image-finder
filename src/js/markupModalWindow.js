import pictureTpl from "../templates/pictureTpl.hbs";
import refs from "./refs.js";

function markupPicture({ hits }) {
  const markupPic = pictureTpl(hits);
  refs.modalTemplate.insertAdjacentHTML("beforeend", markup);
}

export default markupPicture;
