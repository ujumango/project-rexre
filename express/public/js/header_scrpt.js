
let gnb = document.querySelector('#gnb');
let lnb = document.querySelectorAll('.lnb');
const nav = document.querySelector('#nav');
let gnbUl = document.querySelector('#gnb_ul');
const navHeight = nav.getBoundingClientRect().height;
const gnbBg = document.querySelector('#gnb_bg');
let ham_first = document.querySelector('#ham_first');
let ham_second = document.querySelector('#ham_second');
let ham_third = document.querySelector('#ham_third');
let hamberger = document.querySelector('#hamberger');
let mobile_title = document.querySelectorAll('.mobile_title');
let m_lnb = document.querySelectorAll('.m_lnb');
let mobile_nav = document.querySelector('#mobile_nav');
let mobile_gnb  = document.querySelector('#mobile_gnb');





//사이드 메뉴바 호버시 나타남
nav.addEventListener("click", () =>{
    gnbUl.classList.add('nav_active');
});
nav.addEventListener("mouseleave", () => {
    gnbUl.classList.remove('nav_active')
})


//마우스 클릭시 햄버거 X자 반응

hamberger.addEventListener("click", ()=>{
    ham_first.classList.toggle('active')
    ham_second.classList.toggle('active')
    ham_third.classList.toggle('active')
});

//햄버거 클릭시 모바일 메뉴 등장

if(mobile_nav){
    mobile_nav.addEventListener('click',()=>{
        mobile_gnb.classList.toggle('mobile_gnb_show')
        nav.classList.toggle('activeBg');
    })
};

//마우스 클릭시 서브 메뉴 아코디언



for(i=0; i< mobile_title.length; i++){
    mobile_title[i].addEventListener('click', function(){
        this.classList.toggle('mo_active');

        let next = this.nextElementSibling;

        if(next.style.maxHeight){
            next.style.maxHeight = null;
        }else{
            let act = document.querySelectorAll('.mobile_title.mo_active')

            for (j=0; j < act.length; j++){
                act[j].classList.remove('mo_active')
                act[j].nextElementSibling.style.maxHeight = null;
            }
            this.classList.add('mo_active');
            next.style.maxHeight = 'fit-content';
        }
    })
}





//마우스 호버 시 nav 높이 변화
gnb.addEventListener("mouseenter", () =>{
    gnbBg.classList.add('gnb_h');
    gnbBg.classList.remove('gnb_t');
    for(i=0; i < lnb.length; i++){
            lnb[i].style.height= '200px'
         }
});
gnb.addEventListener("mouseleave", () =>{
    gnbBg.classList.remove('gnb_h');
    gnbBg.classList.add('gnb_t');
    for (i=0; i < lnb.length; i++){
          lnb[i].style.height = '0px'
    }    
})


//마우스 호버 시 nav 칼라 수정
nav.addEventListener("mouseenter", () => {
   nav.classList.add('nav_hover')
});

nav.addEventListener("mouseleave", () =>{
    nav.classList.remove('nav_hover')
});



//스크롤 시 nav 칼라 수정

window.addEventListener('scroll',() =>{
    let scrollH = window.pageYOffset;
    let navH = nav.offsetTop;
    if(scrollH > navH) {
        nav.classList.add('fix_nav')
    }else{
        nav.classList.remove('fix_nav')
    }
});



//서브페이지 이동시, 헤더 바뀜

window.onload = function(){

    
}




