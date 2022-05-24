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

/* box-shadow no header quando ter scroll*/ 
function chanceHeader () {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

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
#contact .text, #contact .links,
footer .brand, footer .social
`, {interval: 100})

/* btn back to top */
function backToTop() {
    const backToTop = document.querySelector('.back-to-top')
    
    if (window.scrollY >= 500) {
        backToTop.classList.add('show')
    }else {
        backToTop.classList.remove('show')
    }
}


/* When Scroll */
window.addEventListener('scroll', () => {
    chanceHeader()
    backToTop()
})