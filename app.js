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

// TO check if small screen or not
var screenWidth = window.matchMedia("(max-width: 900px)");
// BUTTON AND DROP DOWN MENU
const navButton = document.querySelector(".nav-toggle");

navButton.addEventListener("click", function () {
  linksHeight = linkList.getBoundingClientRect().height;
  containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    // If screenwidth is small, then hide the links else give it an auto height
    if (screenWidth.matches) {
      linksContainer.style.height = 0;
    } else {
      linksContainer.style.height = `auto`;
    }
  }
});

// SCROLL AND MOVE TO SECTION

ScrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // If screenwidth is small, then hide the links else give it an auto height
    if (screenWidth.matches) {
      linksContainer.style.height = 0;
    } else {
      linksContainer.style.height = `auto`;
    }

    navHeight = nav.getBoundingClientRect().height;
    containerHeight = linksContainer.getBoundingClientRect().height;

    let pos = element.offsetTop - navHeight;

    // For big screens as it has auto height we need to reduce that also
    if (!screenWidth.matches) {
      pos = pos - containerHeight;
    }

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
