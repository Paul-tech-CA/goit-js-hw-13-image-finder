const key = "20176699-556ee3aada6e9037c58dacf6e";
const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientantion=horisontal";

console.log("1");

// const fetchPictures = async function (searchQuery) {
//     try {
//   const url = `${BASE_URL}&q=${searchQuery}&page=${page}$per_page=12&key=${key}`;
//   const response = await fetch(url);
//   const pictures = await response.json();
//   console.log(pictures);
//   return pictures;
//     } catch (error) {
//       console.log((error) => error);
//     }
// };
console.log("2");
export default {
  page: 1,
  searchQuery: "",
  fetchPictures() {
    const url = `${BASE_URL}&q=${this.query}&page=${this.page}&per_page=12&key=${key}`;
    return fetch(url)
      .then((res) => res.json())
      .then((pictures) => {
        this.incrementPage();
        return pictures;
      })
      .catch((error) => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
