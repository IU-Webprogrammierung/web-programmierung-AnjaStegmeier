// Newsletter subscription functionality
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  let formData = new FormData(this);

  // Send form data to backend (here you can use AJAX to send data to server)
  // For demonstration purposes, we'll just log the email to the console
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Optionally, you can show a success message or redirect the user after form submission
  alert("Subscription successful!");
  this.reset(); // Reset form fields
});

// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Scroll to top functionality
document.addEventListener("DOMContentLoaded", function() {
  var toTopButton = document.getElementById("to-top-btn");

  // Event Listener für den Klick auf den Button hinzufügen
  toTopButton.addEventListener("click", function() {
      // Zurück zum Seitenanfang scrollen
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Funktion Hamburger Menü
function toggleMenu() {
  var menü = document.querySelector('.menü');
  menü.classList.toggle('show');
}