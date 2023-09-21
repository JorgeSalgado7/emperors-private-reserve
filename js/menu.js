const header = document.querySelector(".estates_header");
const button = document.querySelector(".estates_header__button");
const toggle = document.querySelector(".estates_header__button__toggle");
const nav = document.querySelector(".estates_header__nav");
const menu = document.querySelector(".estates_menu");
const menuList = document.querySelector(".estates_menu__ul");
let currentPage = window.location.href;
let tempMenuHTML = "";
let tempNavHTML = "";

const menuLinks = [
  {
    name: "HERITAGE",
    link: "/emperors-private-reserve/heritage",
    active: currentPage.includes("heritage") ? true : false,
  },
  {
    name: "THE DIFFERENCE",
    link: "/emperors-private-reserve/the-difference",
    active: currentPage.includes("difference") ? true : false,
  },
  {
    name: "VALUES",
    link: "/emperors-private-reserve/values",
    active: currentPage.includes("values") ? true : false,
  },
  {
    name: "Emperor’s Private Reserve",
    link: "/emperors-private-reserve/emperors-private-reserve",
    active: currentPage.includes("/emperors-private-reserve/emperors-private-reserve")
      ? true
      : false,
  },
  {
    name: "ACCOMMODATIONS",
    link: "/emperors-private-reserve/accommodations",
    active: currentPage.includes("accommodations") ? true : false,
  },
  {
    name: "AMENITIES",
    link: "/emperors-private-reserve/amenities",
    active: currentPage.includes("amenities") ? true : false,
  },
  // {
  //   name: "GALLERY",
  //   link: "/emperors-private-reserve/gallery",
  //   active: currentPage.includes("gallery") ? true : false,
  // },
  // {
  // 	name: 'NEWS',
  // 	link: '/emperors-private-reserve/news.html',
  // 	active: currentPage.includes('news') ? true : false,
  // },
];

menuLinks.forEach((link) => {
  tempMenuHTML += `
		<li class="estates_menu__ul__li">
			<a 
				href="${link.link}" 
				class="estates_menu__ul__li__a ${
          link.active ? "estates_menu__ul__li__a--active" : ""
        }
			">
				${link.name}
			</a>
		</li>
	`;

  tempNavHTML += `
		<a 
			href="${link.link}" 
			class="estates_header__nav__a ${
        link.active ? "estates_header__nav__a--active" : ""
      }
		">
			${link.name}
		</a>
	`;
});

menuList.innerHTML = tempMenuHTML;
nav.innerHTML = tempNavHTML;

button.addEventListener("click", () => {
  menu.classList.toggle("estates_menu--active");
  toggle.classList.toggle("estates_header__button__toggle--active");
});

let lastScroll = 0;

// window.addEventListener('scroll', () => {

// 	const scrollY = window.scrollY
// 	scrollY > 100 ? header.classList.add('estates_header--hide') : false

// 	if ((scrollY < lastScroll) && header.classList.contains('estates_header--hide')) {
// 		header.classList.remove('estates_header--hide')
// 	}

// 	lastScroll = scrollY

// })
