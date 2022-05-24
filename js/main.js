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
function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
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

    breakpoints: {
      767: {
        slidesPerView: 2.5,
        spaceBetween: 40,
        setWrapperSize: false,
      }
    }
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

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo na sua seção */
const sections = document.querySelectorAll ('main section[id]')

function activeMenu () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')

    }else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }

  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenu ()
})


