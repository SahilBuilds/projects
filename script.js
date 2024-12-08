const   navMenu= document.querySelector("#nav-menu"),
        navToggle = document.querySelector("#nav-toggle"),
        navClose = document.querySelector("#nav-close");


if(navToggle){
    navToggle.addEventListener("click",() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ====remove menu mobile====

const navLink = document.querySelectorAll(".nav-link")


const linkAction = ()=> {
    const   navMenu= document.querySelector("#nav-menu");
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener("click",linkAction));



// ======showd header =====

const shadowHeader = () =>{
   const header = document.querySelector(".header")
   //Add a class if the bottom offset is greater than 50 of the viewport

   window.scrollY >=50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener("scroll",shadowHeader)



// ======swip popular ======

const swiperPopular = new Swiper('.popular-swiper', {
     loop: true,
     grabCursor: true,
     slidesPerView: 'auto',
     centeredSlides: 'auto' 
})

const scrollUp =()=>{
    const scrollUp = document.querySelector("#scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ======scroll section active link =====

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');


              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }else{
                sectionsClass.classList.remove('active-link')
              }
    })
}

// ==============scroll animation =======


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,

})

sr.reveal(`.home-data`)
sr.reveal(`.footer`)
sr.reveal(`.home-board`, {delay: 700, distance: '100px', origin:'right'})
sr.reveal(`.home-pizza`, {delay: 1400, distance: '900px', origin:'bottom', rotate: {z: -90}})
sr.reveal(`.home-ingrendient`, {delay: 2000, interval: 100}) 
sr.reveal(`.about-data `, {origin: 'right'}); 
sr.reveal(`.about-image `, {origin: 'left'}); 
sr.reveal(`.recipe-list `, {origin: 'right'}); 
sr.reveal(`.contact-data `, {origin: 'right'}); 
sr.reveal(`.recipe-imges `, {origin: 'left'}); 
sr.reveal(`.contact-image`, {origin: 'left'}); 
sr.reveal(`.products-card`, {interval: 100}); 



