/*
  Start - This is for menu button 1 functionality
*/

// Select Target Element
const menuBtn1 = document.querySelector(".menu__btn__1");


// Callback Function toggleMenu1
const toggleMenu1 = () => {
    menuBtn1.classList.toggle("open");
}

// Add Event Listener For Menu Button 1
menuBtn1.addEventListener("click", toggleMenu1);