let burgerMenu = document.querySelector('.burger_menu');
let mobileNavigation = document.querySelector('.mobile_navigation');

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.querySelector('.burger__').classList.toggle('burg_act');
    mobileNavigation.classList.toggle('nav_act');
    document.body.classList.toggle('overflow_hidden');
});

const sliderBlockOne = document.querySelector('.s1');
const sliderBlock = document.querySelector('.s2');


let searchBtn = document.querySelectorAll('.search_');
let searchInput = document.querySelector('.search_input');
let infoNav = document.querySelector('.info_block');


// function openSearch() {
//     searchBtn.forEach(function (searchButton) {
//         searchButton.addEventListener('click', function (e) {
//             if(searchInput.classList.contains('search_act'){
//                 searchInput.classList.remove('search_act');
//             }else(
//                 searchInput.classList.add('search_act');
//         )
//             )}
// openSearch();


function openSearch() {
    searchBtn.forEach(function (searchButton) {
        searchButton.addEventListener('click', function (e) {
            let searchInput = searchButton.previousElementSibling;
            searchInput.classList.toggle('search_act');
            infoNav.classList.toggle('hidden_nav');
            console.log(searchInput);
        })
    })
}
openSearch();
// searchBtn.addEventListener('click', function () {
//     searchInput.classList.toggle('search_act');
// });

if (sliderBlockOne) {
    var swiper = new Swiper(".s1", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
if (sliderBlock) {
    var swiper = new Swiper(".s2", {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        speed: 500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            475: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1366: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        }
    });
}


let faq_blocks = document.querySelectorAll('.faq_box_block');
faq_blocks.forEach(function (faqBlock) {
    faqBlock.addEventListener('click',function (e) {
        e.preventDefault();
        let colapsed =  faqBlock.getAttribute('collapes');
        let childContent = faqBlock.querySelector('.collapes_content');
        let childHeight = childContent.scrollHeight;
        let targetIcon = faqBlock.querySelector('.more-less');
        let faqTitle = faqBlock.querySelector('.panel-title');
        if (colapsed === 'false') {
            childContent.style.height = `${childHeight}px`;
            childContent.style.opacity = `1`;
            faqBlock.setAttribute('collapes','true');
            targetIcon.className = 'more-less fas fa-chevron-up';
        }else{
            childContent.style.height = `${0}px`;
            childContent.style.opacity = `0`;
            childContent.style.paddingTop = `0px`;
            faqBlock.setAttribute('collapes','false');
            targetIcon.className = 'more-less fas fa-chevron-down';
        }
    });
});