const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const tabsBtn = document.querySelectorAll('.services__link')
const tabsItems = document.querySelectorAll('.services__content')
tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)
        if (!currentBtn.classList.contains('active__btn')) {
            tabsBtn.forEach(function (btn) {
                btn.classList.remove('active__btn');
            });
            tabsItems.forEach(function (tab) {
                tab.classList.remove('active');
            });
            currentBtn.classList.add('active__btn');
            currentTab.classList.add('active');
        }
    })
})
let defaultBtn = document.querySelector('.services__link')
defaultBtn.click()

const animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
}
function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
    animOnScroll()
}, 300);


let modal = document.querySelector(".modal")
let modalBlock = document.querySelector(".modal__block")
let closeBtn = document.querySelector('.modal__close-btn')
let openModalBtn = document.querySelector('.header__btn ')
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex'
})
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none'

    }
})


let dropdownBtn = document.querySelector('.dropdown__icon')
let dropdownList = document.querySelector('.nav__list-media ')
let dropdownLink = document.querySelectorAll('.nav__link-media')
dropdownBtn.addEventListener('click', function () {
    if (dropdownList.style.opacity == 0) {
        dropdownList.style.opacity = 1
        dropdownList.style.zIndex = 99
    } else if (dropdownList.style.opacity) {
        dropdownList.style.opacity = 0
        dropdownList.style.zIndex = -1
    }
})
for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', function () {
        if (dropdownList.style.opacity) {
            dropdownList.style.opacity = 0
            dropdownList.style.zIndex = -1
        }
    })
}
