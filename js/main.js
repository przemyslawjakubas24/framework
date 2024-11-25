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


//contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne działanie formularza

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tutaj możesz dodać kod do wysyłania danych na serwer

    // Wyświetlenie komunikatu po wysłaniu formularza
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Dziękujemy za kontakt, ${name}! Twoja wiadomość została wysłana.</p>`;
    
    // Resetowanie formularza
    document.getElementById('contactForm').reset();
});

