       
 
// Wait for the DOM to be fully loaded before running the code
document.addEventListener('DOMContentLoaded', () => {

    // Target the form by its ID
    const form = document.getElementById('checkoutForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            //  Prevent the form from submitting in the default way (reloading)
            event.preventDefault();

            //  Perform Validation
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            // Simple check to ensure required fields aren't empty
            if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
                alert("Please fill in all mandatory fields.");
                return;
            }

            // Regex for basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            //  Simulate AJAX Submission
            console.log("Submitting form data...");
            
            // You can replace this alert with actual AJAX code to send data to a server if needed
            alert("Thank you, Angel Rugs has received your request! We will be in touch shortly.");

            //  Reset the form after submission
            form.reset();
        });
    }
});

 const lightbox = document.getElementById('lightbox');
const fullImage = document.getElementById('full-image');

// When a rug image is clicked
document.querySelectorAll('.rug-img').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        fullImage.src = image.src;
    });
});

// Close when clicking anywhere on the lightbox
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // How far up you need to scroll before it triggers

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: remove "active" if you want it to fade out when scrolling up
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


function filterSelection(category) {
    // Select all images that have the 'rug-img' class
    const allImages = document.querySelectorAll('.rug-img');

    allImages.forEach(image => {
        // If 'all' is selected, show everything
        if (category === 'all') {
            image.style.display = 'inline-block'; 
        } 
        // Otherwise, only show images that have the selected category class
        else if (image.classList.contains(category)) {
            image.style.display = 'inline-block';
        } 
        // Hide everything else
        else {
            image.style.display = 'none';
        }
    });
}



