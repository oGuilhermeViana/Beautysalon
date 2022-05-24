<<<<<<< HEAD
=======
/* Menu hamburger */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}

/* quando clicar no menu, fechar o menu */
const links = document.querySelectorAll('nav ul li a') 

for (const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* box-shadow quando ter scroll*/ 

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    mousewheel: {
        invert: true,
    },
    keyboard: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


/* Scroll reveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .swiper-wrapper,
#contact .text, #contact .links
`, {interval: 100})
>>>>>>> parent of 76d4c00 (configuração nas fonts e fim mobile)
