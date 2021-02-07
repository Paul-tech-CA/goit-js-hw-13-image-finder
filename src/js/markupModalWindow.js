import pictureTpl from "../templates/pictureTpl.hbs";
import refs from "./refs.js";

function markupPicture(data) {
  const markupPic = pictureTpl(data);
  console.log(markupPic);
  refs.modalTemplate.insertAdjacentHTML("beforeend", markupPic);
}

export default markupPicture;
