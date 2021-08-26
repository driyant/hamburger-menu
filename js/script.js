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

/*
  End - This is for menu button 1 functionality
*/


/*
  Start - This is for menu button 2 functionality
*/

// Select Target Element
const menuBtn2 = document.querySelector(".menu__btn__2");


// Callback Function toggleMenu2
const toggleMenu2 = () => {
    menuBtn2.classList.toggle("open");
}

// Add Event Listener For Menu Button 2
menuBtn2.addEventListener("click", toggleMenu2);


/*
  End - This is for menu button 2 functionality
*/