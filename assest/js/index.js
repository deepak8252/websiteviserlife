$('.hero-banner').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// animal logo 
$('.animal-logo').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplayTimeout:4000,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:true
        }
    }
})

// filter able gallery

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Remove 'active' class from all buttons and add to clicked one
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show/hide images based on category
            galleryItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    // Close lightbox using ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});

// faq
let faqHeadings = document.querySelectorAll(".faq-heading");

faqHeadings.forEach((heading) => {
    heading.addEventListener("click", () => {
        let faq = heading.parentElement; // Get the parent .faq div
        let content = faq.querySelector(".faq-content"); // Select the content inside

        // Toggle the active class on the clicked FAQ
        content.classList.toggle("actives");

        // Close other open FAQs
        document.querySelectorAll(".faqs").forEach((item) => {
            if (item !== faq) {
                item.querySelector(".faq-content").classList.remove("actives");
            }
        });
    });
});
// counter
document.addEventListener("DOMContentLoaded", () => {
    let counter_Heading = document.querySelectorAll(".counter-heading");
    let speed = 200; // Adjust speed for animation

    counter_Heading.forEach((counter) => {
        let target = +counter.innerText.replace(/\D/g, ""); // Extract numbers
        let count = 0;

        let updateCount = () => {
            let increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target; // Ensure exact final value
            }
        };

        updateCount(); // Start counting for this counter
    });
});

