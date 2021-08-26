/*
  Start - This is for menu button 1 functionality
*/

// Select target element
const menuBtn1 = document.querySelector(".menu__btn__1");


// Callback function toggleMenu1
const toggleMenu1 = () => {
    menuBtn1.classList.toggle("open");
}

// Add event listener for menu button 1
menuBtn1.addEventListener("click", toggleMenu1);


/*
  End - This is for menu button 1 functionality
*/