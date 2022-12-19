

let scrollLink = document.querySelectorAll('.sc_link');


scrollLink.forEach((link) => {
    link.addEventListener('click', (e) =>{
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href');
        const sec = document.querySelector(id);
        const secTop = sec.offsetTop;

        window.scrollTo({
            left: 0,
            top: secTop
        })
    })
})





//스와이퍼

var swiper = new Swiper(".mySwiper0", {
  slidesPerView:  1,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next0",
    prevEl: ".swiper-button-prev0",
  }, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper1", {
 slidesPerView:  1,
 spaceBetween: 40,
 loop: true,

 breakpoints: {
  
  747: {
    slidesPerView: 2,  //브라우저가 747보다 클 때
    spaceBetween: 40,
  },
  1400: {
    slidesPerView: 3,  //브라우저가 1400보다 클 때
    spaceBetween: 30,
  },
},
 navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  }
});
var swiper = new Swiper(".mySwiper2", {
 slidesPerView: 2,
 spaceBetween: 30,
 loop: true,

 breakpoints: {
  0:{
    slidesPerView: 1,  //브라우저가 747보다 클 때
    spaceBetween: 50,
  },
 600: {
    slidesPerView: 2,  //브라우저가 747보다 클 때
    spaceBetween: 30,
  },
  1400: {
    slidesPerView: 3,  //브라우저가 1290보다 클 때
    spaceBetween: 20,
  },
},
 navigation: {
    nextEl: ".swiper-btn-next2",
    prevEl: ".swiper-btn-prev2",
  }
});
var swiper = new Swiper(".mySwiper3", {
 slidesPerView: 2,
 spaceBetween: 40,
 loop: true,

 breakpoints: {
  
  747: {
    slidesPerView: 3,  //브라우저가 747보다 클 때
    spaceBetween: 30,
  },
  1400: {
    slidesPerView: 4,  //브라우저가 1290보다 클 때
    spaceBetween: 30,
  },
},
 navigation: {
    nextEl: ".swiper-btn-next2",
    prevEl: ".swiper-btn-prev2",
  }
});

let main_product_img = document.querySelectorAll('.main_product_img');

for(let i=0; i<main_product_img.length; i++){
  main_product_img[i].addEventListener('mouseenter', ()=>{
    main_product_img[i].classList.add('product_active')
})
};
for(let i=0; i<main_product_img.length; i++){
  main_product_img[i].addEventListener('mouseleave', ()=>{
    main_product_img[i].classList.remove('product_active')
})
};


let btnBk = document.querySelectorAll('.btn_bk')

for(let i=0; i<btnBk.length; i++){
  btnBk[i].addEventListener('mouseenter', ()=>{
    btnBk[i].classList.add('.btn_bk:hover')
})
};
for(let i=0; i<btnBk.length; i++){
  btnBk[i].addEventListener('mouseleave', ()=>{
    btnBk[i].classList.remove('.btn_bk:hover')
})
};


console.log(window.pageYOffset);