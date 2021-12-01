new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});

document.querySelector('.project-text').onmousedown = e => e.target.style.cursor = 'grab';
document.querySelector('.project-text').onmouseup = e => e.target.style.cursor = 'grabbing';
