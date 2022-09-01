
const dropdown = document.querySelector(".dropdown");
const menuItems = document.querySelectorAll(".menu-item")


dropdown.addEventListener('click', () => {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('show')
  }
});


const navBtns = document.querySelectorAll('.nav__btn')


navBtns.forEach((btn) => {
  btn.addEventListener('click',()=>{
    clearActiveClass()
    btn.classList.add('nav__btn__active')
  })
})


function clearActiveClass() {
  navBtns.forEach((btn) => {
    btn.classList.remove('nav__btn__active')
  })
}