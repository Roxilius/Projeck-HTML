const movie = 'https://api.consumet.org/anime/gogoanime/movie';
let page = 1;
// membuat function untuk anime movie
function movieAnime(page){
    fetch(movie + `?page=${page}`).then(Response => Response.json()).then(Response => {
        // mengambil data dari API
        let movies = Response.results;
        movies.forEach(m => showCardsMovie(m));
    });
};
movieAnime(page);
// menampilkan data anime movie
function showCardsMovie(m){
    // mengambil element content
    let content = document.querySelector('.content');
    // membuat element cards
    let cards = document.createElement('div');
    cards.classList.add('cards');
    // membuat element articel
    let article = document.createElement('article');
    article.classList.add('recent-episodes');
    // membuat element detail
    let detail = document.createElement('div');
    detail.classList.add('detail');
    // membuat element a
    let a = document.createElement('a');
    a.href = m.url;
    // membuat element img
    let img = document.createElement('img');
    img.classList.add('pict');
    img.src = m.image;
    // membuat element info
    let info = document.createElement('div');
    info.classList.add('info');
    // membuat element title
    let title = document.createElement('span');
    title.classList.add('tittle');
    title.innerText = m.title;
    // memasukan semua element sebagai child dari tiap parent element
    a.appendChild(img);
    a.appendChild(info);
    info.appendChild(title);
    detail.appendChild(a);
    article.appendChild(detail);
    cards.appendChild(article);
    content.appendChild(cards);
}
const load = document.getElementById('more');
load.addEventListener("click", ()=>{
    // menambah page API
    page++;
    // membuat perubahan text didalam button Load More
    load.innerText = 'Loading..';
    setTimeout( ()=> {
        load.innerText = 'Load More';
    }, 800);
    // memanggil function data API
    movieAnime(page);
});