// deklar url API
let url = 'https://api.consumet.org/anime/gogoanime/watch/';
let url1 = 'https://api.consumet.org/anime/gogoanime/info/';
// mengambil value dari localstorage
let link = localStorage.getItem('episodeAnime');
let namaAnime = localStorage.getItem('namaAnime');
let animeId = localStorage.getItem('animeId');
let episode = localStorage.getItem('episode');

// membuat title TAB BAR dengan value anime yang ditonton
let title = document.querySelector('title');
title.innerText = `${namaAnime}`;

// membuat function mengambil data video anime
function watchAnime(link){
    fetch(url + link).then(Response => Response.json()).then(Response =>{
        let vid = Response.headers;
        watch(vid.Referer);
        getInfoAnime(animeId);
    });
}
// membuat function mengambil data info anime
function getInfoAnime(animeId){
    fetch(url1 + animeId).then(Response => Response.json()).then(Response =>{
        let result = Response;
        infoAnime(result);
    });
}
// memanggil function watchAnime
watchAnime(link);
// menampilkan data dari API ke halaman watch
function watch(v){
    // mengambil tag container
    let container = document.querySelector('.container');
    // membuat judul anime yang ditonton
    let judul = document.createElement('div');
    judul.classList.add('judul');
    let nama = document.createElement('h3');
    nama.innerText = `${namaAnime} Episode ${episode}`;
    judul.appendChild(nama);
    // membuat element content
    let content = document.createElement('div');
    content.classList.add('content');
    // membuat element iframe
    let iframe = document.createElement('iframe');
    // membuat attributr dan memasukan link ke element iframe
    iframe.classList.add('video-anime');
    iframe.setAttribute("frameborder","0");
    iframe.setAttribute("scrolling","no");
    iframe.setAttribute("allowfullscreen","true");
    iframe.setAttribute("marginheight","0");
    iframe.setAttribute("marginwidth","0");    
    iframe.setAttribute("style","visibility: visible");
    iframe.setAttribute("data-lazyloaded","1");
    iframe.setAttribute("data-ll-status","loaded");
    iframe.src = v;
    // memasukan semua element sebagai child dari tiap parent element
    content.appendChild(iframe);
    container.appendChild(judul);
    container.appendChild(content);
}
function infoAnime(r){
    // mengambil tag container
    let container = document.querySelector('.container');
    // membuat element info
    let info = document.createElement('div');
    info.className = 'info';
    // membuat element description
    let description = document.createElement('div');
    // description.classList.add('description');
    let p = document.createElement('p');
    p.classList.add('deskripsi');
    p.appendChild(document.createTextNode('DESCRIPTION : ' + r.description));
    description.className = "description clear";
    // membuat element img
    let gambar = document.createElement('a');
    gambar.classList.add("gambar");
    gambar.href = `https://gogoanimehd.to/${r.url}`;
    // gambar.className = "gambar clear";
    let img = document.createElement('img');
    img.src = r.image;
    gambar.appendChild(img);
    description.appendChild(gambar);
    description.appendChild(p);
    // membuat element genres
    let genres = document.createElement('div');
    genres.classList.add('genres');
    genres.innerText = 'GENRE : ';
    for(let i = 0; i < r.genres.length; i++){
        let genre = document.createElement('div');
        genre.classList.add('genre');
        genre.innerText = r.genres[i];
        genres.appendChild(genre);
    }
    // memasukan element sebagai child dari tiap element parentnya
    info.appendChild(description);
    info.appendChild(genres);
    container.appendChild(info);
}