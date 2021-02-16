const HomeButton = document.querySelector(".top-link");
const nav = document.getElementById("nav");
const ScrollLinks = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".links-container");
const linkList = document.querySelector(".links");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    HomeButton.classList.add("show-link");
  } else {
    HomeButton.classList.remove("show-link");
  }

  if (scrollHeight > nav.getBoundingClientRect().height) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});

// BUTTON AND DROP DOWN MENU
const navButton = document.querySelector(".nav-toggle");

navButton.addEventListener("click", function () {
  linksHeight = linkList.getBoundingClientRect().height;
  containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// SCROLL AND MOVE TO SECTION

ScrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    linksContainer.style.height = 0;

    navHeight = nav.getBoundingClientRect().height;
    containerHeight = linksContainer.getBoundingClientRect().height;

    let pos = element.offsetTop - navHeight;

    // In a small screen width
    if (navHeight > 100) {
      pos = pos + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: pos,
    });
  });
});
