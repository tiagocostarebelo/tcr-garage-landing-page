//VARIABLES
const menuBtn = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu .nav-links .nav-item a');
const backToTop = document.querySelector('.btn-top');
const buttons = document.querySelectorAll('.service-btn, .hero-btn');
const submitBtn = document.querySelector('.submit-btn');


// EVENT LISTENERS
window.addEventListener('scroll', onScrollDisplay);
backToTop.addEventListener('click', returnToTop);
menuBtn.addEventListener('click', mobileMenu);
navLinks.forEach(link => {
  link.addEventListener('click', mobileMenu);
});
buttons.forEach(button => {
  button.addEventListener('click', scrollToForm);
});
submitBtn.addEventListener('submit', thankYouMessage);


//Function that displays the back to top button once the user starts scrolling
function onScrollDisplay() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
}

//HELPER FUNCTIONS
// This function grabs the height of the header and applies it to the top property of the navigation menu
function heightAdjust() {
  const header = document.querySelector('header');
  const navMenu = document.querySelector('.nav-menu');
  const headerHeight = header.offsetHeight - 1;
  navMenu.style.top = `${headerHeight}px`;
}

//This function activates/removes the mobile navigation menu while invoking the heightAdjust function when active
//to keep the nav menu leveled with the header
function mobileMenu() {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('toggle');
    navMenu.style.top = '-380px';
  } else {
    navMenu.classList.add('active');
    menuBtn.classList.add('toggle');
    heightAdjust();
  }
}

//Function that returns the user to the top of the window
function returnToTop() {
  document.body.scrollTop = 0; //Safari browsers
  document.documentElement.scrollTop = 0; 
}

//Function that directs all button clicks to the Contact form
function scrollToForm() {
  const contactSection = document.getElementById('contact');
  contact.scrollIntoView();
}


//FORM LOGIC
function thankYouMessage() {
  const form = document.getElementById('form');
  form.childNodes.style.display = "none";
}
