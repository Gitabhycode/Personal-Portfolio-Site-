

/* SCROLL ABOUT ANIMATION */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span)=>{
    gsap.to(span,{
        backgroundSize:'100% 100%',
        ease : 'none',
        scrollTrigger:{
            trigger:'.about-section',
            start:'top 80%',
            end:'bottom 20%',
            scrub:true,
// Uncommented for debugging
        }
    });
});

/* PORTFOLIO FILTERING */
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.work-item');
    const workCards = document.querySelectorAll('.work-card-container');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            filterItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            workCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
