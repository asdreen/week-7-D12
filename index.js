let generate = document.querySelector(".generate");
const hideBtn = document.querySelectorAll("#hide");
const input = document.querySelector(".search-input");

const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const contentDiv = document.querySelector(".content");
const moreBtn = document.querySelector(".more");
let searchValue;
let searchCount = 2;
let randomCount = 2;

const options = {
  headers: {
    Authorization: "563492ad6f91700001000001ee10de53b7fc413f962db60e4f7f7759",
  },
};

loadPics = (photos) => {
  generate.innerHTML = "";
  for (let photo of photos) {
    generate.innerHTML += `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img class="img-card-top img-fluid" src="${photo.src.medium}">
    <div class="card-body">
        <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
        </p>
        <div
        class="d-flex justify-content-between align-items-center"
        >
        <div class="btn-group">
            <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            >
            View
            </button>
            <button
            type="button"
            class="btn btn-sm btn-outline-secondary" id="hide"
            >
            Hide
            </button>
       
    </div>
    </div>
    </div>`;
  }
  const hideBtn = document.querySelectorAll("#hide");
  for (btn of hideBtn) {
    btn.addEventListener("click", hideCard);
  }
};

const loadFirstImg = () => {
  fetch("https://api.pexels.com/v1/search?query=christmas", options)
    .then((response) => response.json())
    .then((response) => loadPics(response.photos));
};

const loadSecImg = () => {
  fetch("https://api.pexels.com/v1/search?query=sports", options)
    .then((response) => response.json())
    .then((response) => loadPics(response.photos));
};

const hideCard = (e) => {
  e.path[5].style.display = "none";
};

for (btn of hideBtn) {
  btn.addEventListener("click", hideCard);
}

const searchphoto = (event) => {
  const searchTerm = event.target.value;

  fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, options)
    .then((response) => response.json())
    .then((response) => loadPics(response.photos));
};

input.addEventListener("input", searchphoto);

//async function searchPhoto() {
//  clear();
//  if (searchValue !== "" || searchValue === undefined) {
//    searchValue = searchInput.value;
// request the photo which matches the search input
//    await fetchData(
//      `https://api.pexels.com/v1/search?query=${searchValue}+query&page=1&per_page=15?orientation=square`
//    );
//    searchInput.value = "";
//  }
//}
