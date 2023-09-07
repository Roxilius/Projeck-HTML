const mode = document.getElementById('mode');
// cek key di dalam localStorage
if(!localStorage.getItem('theme')){
    // jika tidak ada, buat key di localStorage dengan default theme dark
    localStorage.setItem('theme', 'dark');
}
// mengambil value dari key di localStorage
let theme = localStorage.getItem('theme');
// cek value theme
if(theme === 'dark'){
    darkMode();
}else{
    lightMode();
}
// membuat function theme mode
function darkMode(){
    mode.classList.add('bxs-sun');
    mode.classList.remove('bxs-moon');
    // menghapus class theme di body ketika theme dark mode
    document.body.classList.remove('theme');
    // mengganti value dari key di localStorage
    localStorage.setItem('theme', 'dark');
}
function lightMode(){
    mode.classList.add('bxs-moon');
    mode.classList.remove('bxs-sun');
    // menambahkan class theme ke body ketika theme light mode
    document.body.classList.add('theme');
    // mengganti value dari key di localStorage
    localStorage.setItem('theme', 'light');
}
// membuat swap icon theme ketika di click
mode.addEventListener("click", ()=>{
    // mengambil value tema sekarang dari key di localStorage
    let themeNow = localStorage.getItem('theme');
    // cek value tema sekarang
    if(themeNow === 'dark'){
        lightMode();
    }
    else{
        darkMode();
    }
});
// menu mobile
const menu = document.getElementById('menu-bar');
const nav = document.querySelector(".navlist");
menu.addEventListener("click", ()=>{
    nav.classList.toggle('slide');
    menu.classList.toggle('bx-x');
});
// search form
// let input = document.getElementById('keyword');
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    search();
})
function search() {
    let form = document.getElementById('form-search').addEventListener("submit", (e)=>{
        let input = document.getElementById('keyword');
        if(input.value == ''){
            e.preventDefault();
        }else{
            localStorage.setItem('keyword',input.value);
        }
    });
}
// membuat background music di footer
let music = '../music/counting-create-by-fajri.mp3'
let audio = new Audio(music);
let footer = document.querySelector('footer');
let play = document.getElementById('play');
play.addEventListener("click", ()=>{
    if(play.className === 'bx bx-play-circle bx-tada pause'){
        play.className = 'bx bx-pause-circle bx-spin play';
        footer.style.backgroundImage = 'url(../image/lufy.gif), url(../image/gojo.gif)';
        footer.style.backgroundSize = '100px, 68px';
        footer.style.backgroundPosition = 'bottom left, bottom right';
        footer.style.backgroundRepeat = 'no-repeat';
        audio.loop = true;
        audio.play();
    }
    else if(play.className === 'bx bx-pause-circle bx-spin play'){
        play.className = 'bx bx-play-circle bx-tada pause';
        footer.style.backgroundImage = 'none';
        audio.pause();
        audio.currentTime = 0;
    }
});