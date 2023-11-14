// Smooth scroll

const anchorsListList = document.querySelectorAll('.header__nav-link[href^="#"], .mobile-menu__nav-link[href^="#"]')
const menuBtn = document.querySelector('.header__menu-btn')
const header = document.querySelector('.header')
const mobileMenu = document.querySelector('.mobile-menu')

const closeMenu = () => {
	document.body.classList.remove('is-locked')
	header.classList.remove('header--menu')
	mobileMenu.classList.remove('mobile-menu--active')
	setTimeout(() => {
		mobileMenu.style.display = ''
	}, 300)
}

anchorsListList.forEach(function (a) {
	a.addEventListener('click', function (event) {
		event.preventDefault()
		const hash = event.target.getAttribute('href')
		const scrollTarget = document.querySelector(hash)
		const headerHeight = document.querySelector('.header').scrollHeight

		if(event.target.classList.contains('mobile-menu__nav-link')) {
			closeMenu();
		}

		window.scrollTo({
			top: scrollTarget.offsetTop - headerHeight,
			left: 0,
			behavior: "smooth"
		})
	})
})

menuBtn.addEventListener('click', () => {
	if (header.classList.contains('header--menu')) {
		closeMenu()
	} else {
		header.classList.add('header--menu')
		mobileMenu.style.display = 'flex'
		document.body.classList.add('is-locked')
		setTimeout(() => {
			mobileMenu.classList.add('mobile-menu--active')
		})
	}
})

document.addEventListener('click', (evt) => {
	evt.stopPropagation()
	if(!evt.target.closest('.mobile-menu') && !evt.target.closest('.header__menu-btn')) {
		closeMenu()
	}
})




