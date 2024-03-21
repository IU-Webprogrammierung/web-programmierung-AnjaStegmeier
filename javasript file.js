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


// Scroll to top functionality
document.getElementById("to-top-btn").addEventListener("click", function() {
  // Zum Anfang der Seite scrollen
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Funktion Hamburger Menü
function toggleMenu() {
  var menü = document.querySelector('.menü');
  menü.classList.toggle('show');
}
function toggleMenu() {
  var menu = document.querySelector('.menue');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}