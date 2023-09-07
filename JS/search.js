// deklar url API For Search
const url = 'https://api.consumet.org/anime/gogoanime/';
let page = 1;

// mengambil value dari inputan search di localstorage
let keyword = localStorage.getItem('keyword');
// membuat judul dari keyword search
const judul = document.getElementById('judul');
const hasil = document.createElement('h3');
// mengambil element content
let content = document.querySelector('.content');
// mambuat element image untuk nothing found
let nothing = document.createElement('img');
nothing.classList.add('nothing');
nothing.src = '../image/error.png';
hasil.classList.add('judul');
// membuat function untuk mencari data anime berdasarkan search
function searchAnime(keyword,page){
    fetch(url + keyword + `?page=${page}`).then(Response => Response.json()).then(Response =>{
        // mengambil data dati API
        let results = Response.results;
        // mengambil kondisi page dari API
        let nextPage = Response.hasNextPage;
        // membuat judul keyword dari search
        hasil.innerText = `Search Result For ${keyword}`;
        // validasi hasil data dari search
        if(results.length > 0){
            // looping data API ke function
            results.forEach(r => showCardsSearch(r));
            // validasi konsidi page API
            if(nextPage == true){
                page++;
                searchAnime(keyword,page);
            }
            else{
                // mengembalikan value page ketika page data dari API sudah habis
                page = 1;
            }
        }
        else{
            // membuat judul ketika hasil dari data API tidak ada
            hasil.innerText = `Nothing Found!!!`;
            content.appendChild(nothing);
            judul.style.background = 'transparent';
            content.style.border = 'none';
        }
        // memasukan judul keyword dari search
        judul.appendChild(hasil);  
    });
    // membuat title TAB BAR dari hasil search
    let title = document.querySelector('title');
    title.innerText = `You Searched For ` + keyword;
    delete(keyword);
}
// memanggil function untuk mencari hasil dari search
searchAnime(keyword,page);
// menampilkan data di halaman search & movie
function showCardsSearch(r){
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
    a.href = r.url;
    // membuat element img
    let img = document.createElement('img');
    img.classList.add('pict');
    img.src = r.image;
    // membuat element info
    let info = document.createElement('div');
    info.classList.add('info');
    // membuat element title
    let title = document.createElement('span');
    title.classList.add('tittle');
    title.innerText = r.title;
    // memasukan semua element sebagai child dari tiap parent element
    a.appendChild(img);
    a.appendChild(info);
    info.appendChild(title);
    detail.appendChild(a);
    article.appendChild(detail);
    cards.appendChild(article);
    content.appendChild(cards);
}