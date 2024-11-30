// Изначально меню не активно
let doc = document
const fullscreenMenu = document.getElementById('fullscreenMenu');
let burger_menu = doc.querySelector('.burger-menu')
let aside = doc.querySelector('.fullscreen-menu ')
let burger1 = doc.querySelector('.burger1')
let burger2 = doc.querySelector('.burger2')
let burger3 = doc.querySelector('.burger3')
burger_menu.addEventListener('click', function () {
  fullscreenMenu.classList.toggle('active')
  burger1.classList.toggle("rotate");
  burger2.classList.toggle("hide");
  burger3.classList.toggle("rotate2");
  // burger_menu.classList.toggle('brg')
});
console.log('hello');
// Закрытие при клике на пустое место

const closeButton = document.getElementById('closeBtn');
const images = document.querySelectorAll('.clickable');
const fullscreenContainer = document.getElementById('fullscreen');
const fullscreenImage = document.getElementById('fullscreenImage');
fullscreenContainer.addEventListener('click', (event) => {
  if (event.target === fullscreenContainer) {
    closeFullscreen();
  }
});

// Открытие изображений в полноэкранном режиме
images.forEach(image => {
  image.addEventListener('click', () => {
    openFullscreen(image.src);
  });
});
closeButton.addEventListener('click', () => {
  closeFullscreen();
});
function openFullscreen(imageSrc) {
  fullscreenContainer.style.display = 'flex';
  fullscreenImage.src = imageSrc;
}

function closeFullscreen() {
  fullscreenContainer.style.display = 'none';
  fullscreenImage.src = '';
}


// Простая анимация заголовка и текста
doc.addEventListener('DOMContentLoaded', () => {
  let header = doc.querySelector('.header h1');
  let poem = doc.querySelector('.poem');

  header.style.opacity = '0';
  header.style.transition = 'opacity 1s ease';

  poem.style.transform = 'translateY(20px)';
  poem.style.opacity = '0';
  poem.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

  setTimeout(() => {
    header.style.opacity = '1';
  }, 500);

  setTimeout(() => {
    poem.style.opacity = '1';
    poem.style.transform = 'translateY(0)';
  }, 1000);
});
let dec = doc.querySelector('.header')
let sec_13 = doc.querySelector('.content')
let pos_sec13 = sec_13.offsetTop
let pos_sec13_w = sec_13.offsetWidth
let pos_sec13_2 = dec.offsetTop
let pos_sec13_w_2 = dec.offsetWidth
console.log(pos_sec13,pos_sec13_w);
let a = document.querySelectorAll('.menu-link')
let ikon = doc.querySelector('.perviy')
for(let item of a) {
  item.addEventListener('click', (event)=>{
    event.preventDefault() // ссылка перестает перекидывать или обновлять страницу

    window.scrollTo({top: pos_sec13 - 0, left : 0, behavior: 'smooth'})
})
}

ikon.addEventListener('click', (event)=>{
  event.preventDefault() // ссылка перестает перекидывать или обновлять страницу

  window.scrollTo({top: pos_sec13_2 - 200, left : 0, behavior: 'smooth'})
})