document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight current active page in the navigation bar automatically
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".site-nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (currentPage === "" && linkPage === "Home Page.html")) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stop default form submission for validation checking

            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const country = document.getElementById("country").value;
            const message = document.getElementById("message").value.trim();

        
            if (!fullname || !email || !country || !message) {
                alert("Please fill in all required fields before submitting.");
                return;
            }

        
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            
            alert(`Thank you, ${fullname}! Your message has been sent successfully. We will get back to you soon.`);
            contactForm.reset();
        });
    }
});