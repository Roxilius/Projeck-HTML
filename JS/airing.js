// deklar API untuk Top Airing Anime
const airing = 'https://api.consumet.org/anime/gogoanime/top-airing';
// membuat function Top Airing
function airingAnime(){
    fetch(airing).then(Response => Response.json()).then(Response => {
        let results = Response.results;
        results.forEach(r => cardsAiring(r));
    });
}
airingAnime();
// menampilkan data top airing di halaman index/home & watch
function cardsAiring(r){
    // mengambil element ul
    let ul = document.querySelector('.list');
    // membuat element li
    let li = document.createElement('li');
    li.classList.add('top');
    // membuat element gambar
    let gambar = document.createElement('div');
    gambar.classList.add('gambar1');
    let a = document.createElement('a');
    a.href = r.url;
    let img = document.createElement('img');
    img.src = r.image;
    // memasukan element sebagai chil dari tiap parentnya
    a.appendChild(img);
    gambar.appendChild(a);
    // membuat element info anime
    let infoAnime = document.createElement('div');
    infoAnime.classList.add('info-anime');
    let h4 = document.createElement('h4');
    let a1 = document.createElement('a');
    a1.href = r.url;
    a1.innerText = r.title;

    let kategori = document.createElement('span');
    kategori.classList.add('kategori');
    let b = document.createElement('b');
    b.innerText = 'Genres : ';
    // memasukan element sebagai chil dari tiap parentnya
    h4.appendChild(a1);
    infoAnime.appendChild(h4);
    kategori.appendChild(b);
    for(let i = 0; i < r.genres.length; i++){
        let span = document.createElement('span');
        span.innerText = r.genres[i];
        kategori.appendChild(span);
    }
    infoAnime.appendChild(kategori);
    li.appendChild(gambar);
    li.appendChild(infoAnime);
    ul.appendChild(li);
}