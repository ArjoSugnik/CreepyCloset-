let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');

// Toggle search form visibility
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
};

// Toggle navbar visibility
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
};

// Scroll spy functionality for updating navigation links based on scroll position
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
  searchForm.classList.remove('active');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// Ensure the header is correctly styled on page load based on the scroll position
window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// Initialize the home slider with Swiper.js
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

// Initialize the products slider with Swiper.js
var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// Generate costume based on user input
document.getElementById("generate-costume").addEventListener("click", function() {
  // Get user choices
  const clothingType = document.getElementById("clothing-type").value;
  const color = document.getElementById("color").value;
  const fashionStyle = document.getElementById("fashion-style").value;

  // Generate a costume description based on choices
  const costumeDescription = `You created a ${fashionStyle} style  ${clothingType} in color ${color}.`;

  // Display the generated costume in the costume preview section
  document.getElementById("generated-costume").textContent = costumeDescription;

  // Optionally, you can style this further or show a costume image based on user selection
});
