// Toggle class active untuk humberger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamberger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  searchBox.focus();
};

// document.querySelector('#search-button').onclick = (e) => {
//    searchForm.classList.toggle('active');
//    searchBox.focus();
//    e.prevenDefault(); ini agar ketika klik menu pencarian tidak secrol ke awal
//toggle untuk menambahkan kelas akktif ketika belum ada tapi kalo udah ada kelas aktifnya akan hilang
// };

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('.search-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
