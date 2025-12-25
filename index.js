document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Logic ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImg");
    const captionText = document.getElementById("caption");
    const workshopItems = document.querySelectorAll(".workshop-box img");

    workshopItems.forEach(img => {
        img.style.cursor = "zoom-in"; // Changes cursor to a magnifying glass
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        // Uses the <h4> text from the parent box as the caption
            captionText.innerHTML = this.closest('.workshop-box').querySelector('h4').innerHTML;
        }
    });

// Close when clicking (X)
document.querySelector(".close-modal").onclick = function() {
    modal.style.display = "none";
}

// Close when clicking anywhere outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
    // 1. Highlight Active Page in Navigation
    const navLinks = document.querySelectorAll('.floating-nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Check if the link href matches the current filename
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active-link'); // We use a class to style the active state
        }
    });

    // 2. Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.project-card-large, .workshop-box');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Set initial state for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. Hover Effect Enhancement for Workshop Images
    const workshopImages = document.querySelectorAll('.ws-img img');
    workshopImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.5s ease";
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
        });
    });
});