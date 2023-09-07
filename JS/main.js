// deklar url API Recent Episode
const url = 'https://api.consumet.org/anime/gogoanime/recent-episodes?page=';
// membuat function data API
let page = 1;
// function mengambil data anime terbaru
function recentEpisodeAnime(page){
    fetch(url + page).then(Response => Response.json()).then(Response => {
        const series = Response.results;
        series.forEach(s => showCards(s));
    });
};
// memanggil function data API ketika website di buka pertama kali
recentEpisodeAnime(page);
// menambah data API ketika button Load More diklick
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
    recentEpisodeAnime(page);
});
// menampilkan data recent episode
function showCards(s){
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
    a.href = "../HTML/watching.html";
    a.addEventListener('click', ()=>{
        localStorage.setItem('episodeAnime', `${s.episodeId}`);
        localStorage.setItem('namaAnime', s.title);
        localStorage.setItem('animeId', s.id);
        localStorage.setItem('episode', s.episodeNumber);
    });
    // membuat element img
    let img = document.createElement('img');
    img.classList.add('pict');
    img.src = s.image;
    // membuat element info
    let info = document.createElement('div');
    info.classList.add('info');
    // membuat element episode
    let episode = document.createElement('span');
    episode.className = `episode ${s.episodeId}`

    // membuat element icon
    let icon = document.createElement('i');
    icon.className = "bx bx-play-circle"
    // membuat text episode
    let text = document.createTextNode(`EPISODE ${s.episodeNumber}`);
    // membuat element title
    let title = document.createElement('span');
    title.classList.add('tittle');
    title.innerText = s.title;
    // memasukan semua element sebagai child dari tiap parent element
    episode.appendChild(icon);
    episode.appendChild(text);
    info.appendChild(episode)
    info.appendChild(title);
    a.appendChild(img);
    a.appendChild(info);
    detail.appendChild(a);
    article.appendChild(detail);
    cards.appendChild(article);
    content.appendChild(cards);
}