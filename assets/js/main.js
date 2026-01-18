

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

