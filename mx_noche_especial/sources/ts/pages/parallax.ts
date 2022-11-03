import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

export const parallax = () => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(max-width:425px)", () => {
        gsap.to(".bottle", {
            yPercent: 110,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".section-bottle",
                start: "top 50%", // the default values
                end: "bottom top",
                scrub: 1,
            }, 
        });
    });
}

parallax();