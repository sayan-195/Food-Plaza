    // Smooth Scroll to Sections
    const links = document.querySelectorAll('.navbar-nav .nav-link');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    const href = this.getAttribute('href');

    // If the link is an anchor link (starts with "#"), apply smooth scrolling
    if (href.startsWith('#')) {
      event.preventDefault(); // Prevent default link behavior for anchor links
      
      // Get the target section id and scroll to it
      const targetId = href.substring(1); // Get the ID of the section
      const targetSection = document.getElementById(targetId);
      
      // Smooth scroll to the section
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    // If the link is a page link (like "about.html"), allow normal navigation
    // No need to prevent the default action
  });
});
  
    // Form Validation (for Book A Table Modal)
    const form = document.querySelector('#staticBackdrop form');
    const submitButton = document.querySelector('.modal-footer .btn-success');
    
    submitButton.addEventListener('click', function (event) {
      const inputs = form.querySelectorAll('input');
      let valid = true;
  
      // Check each input field
      inputs.forEach(input => {
        if (input.value === "") {
          input.classList.add("is-invalid"); // Add bootstrap invalid class
          valid = false;
        } else {
          input.classList.remove("is-invalid");
        }
      });
  
      // If the form is valid, allow submission
      if (valid) {
        alert("Form submitted successfully!");
        // Here, you can also send the data to the server if needed
      } else {
        alert("Please fill out all fields.");
      }
    });
  
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    
    window.onscroll = function () {
      if (window.scrollY > 100) {
        navbar.classList.add('fixed-top'); // Add the sticky class when scrolled down
      } else {
        navbar.classList.remove('fixed-top'); // Remove the sticky class when at the top
      }
    };


 // Get the "Menu" link and the menu section
 const menuLink = document.getElementById('menuLink');
      const menuSection = document.getElementById('menuSection');

      // Add a click event listener to the menuLink
      menuLink.addEventListener('click', function() {
        // Scroll smoothly to the menuSection
        menuSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align to the top of the section
        });
      });

//Get the "About" link and the about section
      const aboutLink = document.getElementById('aboutLink');
      const aboutSection = document.getElementById('aboutSection');

      // Add a click event listener to the menuLink
      aboutLink.addEventListener('click', function() {
        // Scroll smoothly to the menuSection
        aboutSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align to the top of the section
        });
      });


//Get the "About" link and the about section
const homeLink = document.getElementById('homeLink');
      const homeSection = document.getElementById('homeSection');

      // Add a click event listener to the menuLink
      homeLink.addEventListener('click', function() {
        // Scroll smoothly to the menuSection
        homeSection.scrollIntoView({
          behavior: 'smooth', // Smooth scroll
          block: 'start' // Align to the top of the section
        });
      });