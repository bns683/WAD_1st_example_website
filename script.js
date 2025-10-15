function sendEmail(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;

  const subject = encodeURIComponent("Restaurant Booking / Feedback");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:info@doerestaurant.com?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;
}
