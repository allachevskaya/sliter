console.log(2)

const dropdown = document.querySelector(".dropdown");
const menuItems = document.querySelectorAll(".menu-item")


dropdown.addEventListener('click', () => {
for(let i=0;i<menuItems.length;i++){
  menuItems[i].classList.toggle('show')
}
})