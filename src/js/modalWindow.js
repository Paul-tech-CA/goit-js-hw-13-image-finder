import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import refs from "./refs.js";

const instance = basicLightbox.create(refs.modalTemplate, {
  onShow(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener("click", instance.close);
  },
  onClose(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener("click", instance.close);
  },
});

function getCloseModalBtnRef(parent) {
  return parent.element().querySelector("button[data-close-modal]");
}
export default instance;
