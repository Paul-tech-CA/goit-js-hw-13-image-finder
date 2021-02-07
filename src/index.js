import "./css/style.css";
import refs from "./js/refs.js";
import service from "./js/service.js";
import markupGallery from "./js/markupGallery";

refs.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  service.query = form.elements.query.value;
  refs.galleryContainer.innerHTML = "";
  service.resetPage();
  form.reset();

  refs.loadMoreBtn.classList.add("is-hidden");

  service.fetchPictures().then((pictures) => {
    markupGallery(pictures);
    refs.loadMoreBtn.classList.remove("is-hidden");
  });
});

refs.loadMoreBtn.addEventListener("click", () => {
  service.fetchPictures().then((pictures) => {
    markupGallery(pictures);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  });
});
