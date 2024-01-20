// Function to remove ".html" extension from the URL
function removeHtmlExtension() {
  var currentPath = window.location.pathname;
  if (currentPath.endsWith(".html")) {
    var newPath = currentPath.slice(0, -5); // Remove the last 5 characters (".html")
    history.pushState({}, "", newPath);
  }
}

// Add an event listener to call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", removeHtmlExtension);

// loading starts
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loading-animation').style.display = 'none';
    document.body.style.visibility = 'visible';
  }, 3000); 
});
// loading ends

// smooth loading of bg video starts
window.addEventListener('DOMContentLoaded', (event) => {
  const bgVideo = document.getElementById('bg-video');

  bgVideo.addEventListener('loadeddata', () => {
    bgVideo.play();
  });

  bgVideo.addEventListener('ended', () => {
    bgVideo.currentTime = 0;
    bgVideo.play();
  });
});
// smooth loading of bg video ends

// defining all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

