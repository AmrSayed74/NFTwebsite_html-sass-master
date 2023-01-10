/* ======== Start Header ======== */

let barIcon = document.querySelector(".bar-icon");
let nav = document.querySelector(".nav");

barIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  nav.style.cssText = "background-color: #000000f2"; //black
});

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    document.querySelector(".header").style.cssText =
      "background-color: #000000f2"; //black
    nav.style.cssText = "background-color: #000000f2";
    nav.classList.remove("active");
  } else if (window.scrollY >= 0) {
    document.querySelector(
      ".header"
    ).style.cssText = `background-color: #ffffff1a `;
    nav.style.cssText = "background-color: ffffff1a";
  }
});

function myFunction(media) {
  if (media.matches) {
    // If media query matches
    nav.style.cssText = "background-color: transparent";
  } else {
    nav.style.cssText = "background-color: #000000f2";
  }
}

let media = window.matchMedia("(min-width: 992px)");
myFunction(media); // Call listener function at run time
media.addListener(myFunction); // Attach listener function on state changes

/* ======== End Header ======== */

/* ======== Start About ======== */
let aboutImg = document.querySelector(".about-img");
function blur() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 800) {
      aboutImg.style.cssText = "filter: blur(0px)";
    } else if (window.scrollY <= 849) {
      aboutImg.style.cssText = "filter: blur(3px)";
    }
  });
}
blur();
/* ======== End About ======== */

/* ======== Start Collections ======== */
let switcherLis = document.querySelectorAll(".filter-btn .filter");
let boxContent = document.querySelectorAll(".collections-content .box");

switcherLis.forEach((li) => {
  li.addEventListener("click", () => {
    switcherLis.forEach((li) => {
      // Remove Active Class From All Lis
      li.classList.remove("active");
    });
    // Add Active Class To The Clicked Li
    li.classList.add("active");

    // Make All Boxes Display None
    boxContent.forEach((box) => {
      box.style.display = "none";
    });
    // Display Block The Box Which have The Same Class To The Click Li Which have Attribute Shapes Specific Class Box
    document.querySelectorAll(li.dataset.filter).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});

/* ======== End Collections ======== */

/* ======== Start Featured Collections & Creator ======== */
var swiper = new Swiper(".card-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 70,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
/* ======== End Featured Collections & Creator ======== */

/* ======== Start FAQ ======== */
let allBoxes = document.querySelectorAll(".faq-box");
console.log(allBoxes);
let titleText = document.querySelectorAll(".title-text");
console.log(titleText);

allBoxes.forEach((e) => {
  e.onclick = function () {
    e.lastElementChild.classList.toggle("d-block");
  };
});

/* ======== End FAQ ======== */
