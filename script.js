// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
})();

// Handle contact form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Show loading state
  const submitButton = this.querySelector(".submit-button");
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Prepare email template parameters
  const templateParams = {
    to_email: "prosserbasketball8@gmail.com",
    from_name: name,
    from_email: email,
    from_phone: phone,
    message: message,
    subject: `New Contact from ${name} - ${email} - ${phone}`,
  };

  // Send email using EmailJS
  // This is a work in progress, but it should work if you follow the steps below
  // What You Need to Do:
  // Sign up for EmailJS (free account)
  // Connect your Gmail (prosserbasketball8@gmail.com)
  // Create an email template
  // Get your API keys (Service ID, Template ID, Public Key)
  // Replace the placeholders in the code
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      function (response) {
        // Success
        alert(
          `Thank you for your message, ${name}! We'll get back to you soon.`
        );
        document.querySelector("form").reset();
      },
      function (error) {
        // Error
        alert(
          "Sorry, there was an error sending your message. Please try again or contact us directly."
        );
        console.error("EmailJS Error:", error);
      }
    )
    .finally(function () {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
});

// Add scroll effect to header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll(".about-card, .service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
