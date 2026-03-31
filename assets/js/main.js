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

//change background of header

const scrollHeader = ()=>{
    const header = document.querySelector('.header');

    window.scrollY >= 20 ? header.classList.add('scroll-header')
                          : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);


// for dark light theme
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    function setTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.classList.remove('ri-moon-line');
            themeToggle.classList.add('ri-sun-line');
        } else {
            document.body.classList.remove('light-theme');
            themeToggle.classList.remove('ri-sun-line');
            themeToggle.classList.add('ri-moon-line');
        }
        localStorage.setItem('theme', theme);
        console.log('Theme changed to:', theme);
    }

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});
