const burgerBtn = document.querySelector('.burger')
const navList = document.querySelector('.nav__list')
const sizeNav = document.querySelector('.nav__container')
const sizeNavLogo = document.querySelector('.logo')
const allNavItem = document.querySelectorAll('.nav__item')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burger--active')
	navList.classList.toggle('nav__list--active')
	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			burgerBtn.classList.remove('burger--active')
			navList.classList.remove('nav__list--active')
		})
	})
})

function handleScroll() {
	if (window.scrollY >= 200) {
		sizeNav.style.padding = '1em 2em'
		sizeNavLogo.style.width = '40px'
	} else {
		sizeNav.style.padding = '1.5em 2em'
		sizeNavLogo.style.width = '50px'
	}
}

window.addEventListener('scroll', handleScroll)

