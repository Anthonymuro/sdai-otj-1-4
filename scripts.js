document.addEventListener("DOMContentLoaded", function() {
    const headerImage = document.querySelector('.header-image');
    //header img
    // Wait a brief moment, then fade in the image
    setTimeout(() => {
        headerImage.style.opacity = 1;
    }, 500); // 500 ms delay before starting fade-in
//menu 
const menu = document.querySelector('.menu-description');
    
    // Wait a brief moment, then fade in the image
    setTimeout(() => {
        menu.style.opacity = 1;
    }, 500); // 500 ms delay before starting fade-in

    const location = document.querySelector('section-location');
   //location
    // Wait a brief moment, then fade in the image
    setTimeout(() => {
        location.style.opacity = 1;
    }, 500); // 500 ms delay before starting fade-in

    const hours = document.querySelector('.section-hours');
    //open hours
    // Wait a brief moment, then fade in the image
    setTimeout(() => {
        hours.style.opacity = 1;
    }, 500); // 500 ms delay before starting fade-in
});