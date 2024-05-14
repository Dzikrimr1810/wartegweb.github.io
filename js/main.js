const humburgerMenu = document.querySelector('.humburgerMenu')
const humburgerArrow = document.querySelector('.humburgerArrow')
const humburgerNav = document.querySelector('.humburgerNav')
const humburgerToRight = "ps-40"
const humburgerToLeft = "-left-40"
const arrowRight = "ri-arrow-right-s-line"
const arrowLeft = "ri-arrow-left-s-line"
const rotateArrow = "rotate-180"

humburgerMenu.addEventListener("click",function() {
    humburgerNav.classList.toggle(humburgerToRight)
    humburgerArrow.classList.toggle(rotateArrow)
    console.log("aktif")
})

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

