const search = document.getElementById("search");
const sbar = document.getElementById("s-bar");
const sbtn = document.getElementById("s-btn");
const lbtn = document.getElementById("l-btn");
const result1 = document.getElementById("result1");

const accessKey = "e92xgELB4tDfAqjRzxwvD-409cfIZmPPblaoKDKhRKI";
let page = 1;
let keyword = "";

async function getImages() {
  keyword = sbar.value;
  const url = `https://api.unsplash.com/search/photos?per_page=12&page=${page}&query=${keyword}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    result1.appendChild(imageLink);
  });

  lbtn.style.display = "block";
}

search.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  result1.innerHTML = "";
  getImages();
});

lbtn.addEventListener("click", () => {
  page++;
  getImages();
});
