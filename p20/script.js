const apiKey = "563492ad6f9170000100000149d816776f7243dda2bc52af65f83197";
const gallery = document.getElementById('gallery');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const form = document.getElementById('form');
const more = document.getElementById('more');
let searchValue;
let page = 1;
let fetchLink;
let currentSearch;


// API key 563492ad6f9170000100000149d816776f7243dda2bc52af65f83197

// Functions

// 1.
async function curatedphotos() {
    fetchLink = 'https://api.pexels.com/v1/curated?per_page=15&page=1';
    const data = await fetchApi(fetchLink);
    generatePhotos(data);

}

// 2.
async function searchPhotos(query) {
    clear();
    fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
    const data = await fetchApi(fetchLink);
    generatePhotos(data);
}

// 3.
function updateInput(e) {
    searchValue = e.target.value;

}

// 4.
async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: apiKey
        }
    });
    const data = await dataFetch.json();
    return data;
}

// 5. 
function generatePhotos(data) {
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `
        <img src="${photo.src.large}">
         <div class="img-info">     
        <p>${photo.photographer}</p>
        <a href="${photo.src.original}">Download</a>
        </div>
        `;
        gallery.appendChild(galleryImg);
    });
}

function clear() {
    gallery.innerHTML = '';
    searchBar.value = '';
}

// 6.

async function loadMore() {
    page++;
    if (currentSearch) {
        fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${page}`;
    } else {
        fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
    }
    const data = await fetchApi(fetchLink);
    generatePhotos(data);
}

// Event listeners

// 1.
searchBar.addEventListener('input', updateInput);

// 2.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
})

more.addEventListener('click', loadMore);

curatedphotos();