// Menu Toggle 
// Set variables for menu toggle, nav links and bars 
const menuToggle = document.querySelector('#showMenu');
const navLink = document.querySelector('#navLinks');
const hideBar = document.querySelector('#hideBar');
const barTop = document.querySelector('#barTop');
const barBottom = document.querySelector('#barBottom');

// Show menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        navLink.classList.toggle('show-menu');
        hideBar.classList.toggle('hide-bar');
        barTop.classList.toggle('rotate-bar-top');
        barBottom.classList.toggle('rotate-bar-bottom');
    });
}


// Scroll to top button
// Set a variable for scroll to top button
const scrollToTop = document.querySelector('#scrollButton');

// Set up a function if the window scroll down to height 500px then show button 
window.addEventListener("scroll", () => {

    // Get the current scroll height value
    const windowHeight = window.scrollY;

    // If the scroll height value is greater than the window height, add style inline-css in button 
    if (windowHeight > 500) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});


// Setup a function with animate scroll to top slower / smoother
const animateScroll = () => {

    // Set a variable for the number of pixels from the top of the document.
    const heightScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // If heightScroll value is greater than 0, scroll to top of the document.
    // Animate scroll with method requestAnimationFrame:
    if (heightScroll > 0) {
        window.requestAnimationFrame(animateScroll);

        // ScrollTo takes x and y coordinate.
        // Increase the '15' value to get a smoother/slower scroll
        window.scrollTo(0, heightScroll - heightScroll / 15);
    }
}

// When the button clicked, run animateScroll function
scrollToTop.onclick = function () {
    animateScroll();
}

//cookie pop-up
let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  //Create date object
  let d = new Date();
  //Increment the current time by 1 minute (cookie will expire after 1 minute)
  d.setMinutes(2 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
/* //Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
}; */