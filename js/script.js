document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.projcard');

    // IntersectionObserver callback function
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                // Add animation classes based on the index (odd/even)
                if (Array.from(cards).indexOf(card) % 2 === 0) {
                    card.classList.add('enter-left');
                } else {
                    card.classList.add('enter-right');
                }
                // Add class to make the card visible
                card.classList.add('animated');

                // Stop observing once animation is triggered
                observer.unobserve(card);
            }
        });
    };

    // Create IntersectionObserver
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1, // Trigger when 10% of the card is visible
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });
});