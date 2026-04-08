// Google Reviews Slider
document.addEventListener('DOMContentLoaded', function() {
    const reviewsData = [
        {
            name: "Shanti Uyana",
            avatar: "S",
            rating: 5,
            date: "2 weeks ago",
            text: "Wrackdell has been instrumental in elevating our online presence. Their creative approach and deep understanding of the hospitality industry helped us reach the right audience and increase bookings significantly."
        },
        {
            name: "Sarah Johnson",
            avatar: "SJ",
            rating: 5,
            date: "1 month ago",
            text: "Outstanding service! The team at Wrackdell truly understands digital marketing. Our ROI has increased by 300% since working with them. Highly recommended!"
        },
        {
            name: "Michael Chen",
            avatar: "MC",
            rating: 5,
            date: "3 weeks ago",
            text: "Professional, creative, and results-driven. Wrackdell transformed our social media presence and helped us connect with our target audience effectively."
        },
        {
            name: "Emma Williams",
            avatar: "EW",
            rating: 5,
            date: "2 months ago",
            text: "The best digital marketing agency we've worked with! Their attention to detail and strategic approach have been game-changing for our business."
        }
    ];

    let currentReview = 0;
    const track = document.querySelector('.google-reviews-track');
    const dots = document.querySelectorAll('.google-review-dot');

    function updateReview() {
        if (track) {
            track.style.transform = `translateX(-${currentReview * 100}%)`;
        }

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentReview);
        });
    }

    // Auto-rotate reviews every 5 seconds
    setInterval(function() {
        currentReview = (currentReview + 1) % reviewsData.length;
        updateReview();
    }, 5000);

    // Manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentReview = index;
            updateReview();
        });
    });

    // Initialize
    updateReview();
});
