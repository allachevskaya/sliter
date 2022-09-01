
const dropdown = document.querySelector(".dropdown");
const menuItems = document.querySelectorAll(".menu-item")


dropdown.addEventListener('click', () => {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('show')
  }
});


const navBtns = document.querySelectorAll('.nav__btn')


navBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    clearActiveClass()
    btn.classList.add('nav__btn__active')
  })
})


function clearActiveClass() {
  navBtns.forEach((btn) => {
    btn.classList.remove('nav__btn__active')
  })
}

const sliderItems = document.querySelectorAll('.slider_item')


sliderItems.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClassSlider()
    slide.classList.add('active')
  })
})


function clearActiveClassSlider() {
  sliderItems.forEach((slide) => {
    slide.classList.remove('active')
  })
}

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.slider_item')) {
    clearActiveClassSlider()
  }
})