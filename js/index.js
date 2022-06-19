const d = document
const hamburger = d.querySelector('.hamburger')
const navMenu = d.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

d.querySelectorAll('.nav-link')
.forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
)