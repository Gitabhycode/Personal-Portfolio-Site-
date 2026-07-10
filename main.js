

/* SCROLL ABOUT ANIMATION */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span)=>{
    gsap.to(span,{
        backgroundSize:'100% 100%',
        ease : 'none',
        scrollTrigger:{
            trigger:'.about-description',
            start:'top bottom',
            end:'bottom top',
            scrub:true,
            // markers:true,
        }
    });
});
