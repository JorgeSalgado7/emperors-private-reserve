let WINDOW_HEIGHT = document.documentElement.clientHeight
const hero = document.getElementById('estates_hero')
let screen_width = window.matchMedia("(max-width: 992px)")

if (screen_width.matches) {
	hero.style.height = `${WINDOW_HEIGHT}px`
}
else{
	hero.style.height = '100vh'
}

window.addEventListener('resize', () => {

	let WINDOW_HEIGHT = document.documentElement.clientHeight

	if (screen_width.matches) {
    hero.style.height = `${WINDOW_HEIGHT}px`
  }
	else{
		hero.style.height = '100vh'
	}

}, true)