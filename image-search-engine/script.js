const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=GzdY8Qlsb5qmZ9e7EHyHMhmE9daipqe5dd8IogmilKM&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear previous results if it's a new search
    }

    results.forEach((result) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const image = document.createElement("img");
        image.src = result.cover_photo.urls.small;
        image.alt = keyword;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        // Append the imageLink to the imageContainer
        imageContainer.appendChild(imageLink);

        // Append the imageContainer to the searchResult
        searchResult.appendChild(imageContainer);
    });

    if (searchResult.innerHTML === "") {
        showBtn.style.display = "none";
    } else {
        showBtn.style.display = "block";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
