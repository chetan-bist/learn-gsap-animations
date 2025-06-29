# Gsap Scroll Trigger

GSAP Scroll Trigger is a plugin that allows you to create animations that are triggered by the scroll position of the page.

With ScrollTrigger, you can define various actions to be triggered at specific scroll points, such as starting or ending

an animation, scrubbing through animations as the user

scrolls, pinning elements to the screen, and more.

Read mero about the Gsap scroll trigger feature.

<h1>code Example</h1>

            import gsap from "gsap";
            import { useRef } from "react";
            import { useGSAP } from "@gsap/react";
            import { ScrollTrigger } from "gsap/all";

            gsap.registerPlugin(ScrollTrigger);

            function App() {

            const scrollRef = useRef();

            //TODO: Implement the gsap scroll trigger

            useGSAP(() =>{

                //get all the boxes in the scrollRef
                const boxes = gsap.utils.toArray(scrollRef.current.children);

                boxes.forEach((box) =>{
                gsap.to(box,{
                    x:150 * (boxes.indexOf(box) + 5),
                    rotation:360,
                    borderRadius:'100%',
                    scale:1.5,
                    scrollTrigger:{
                    trigger:box,
                    start: 'bottom bottom',
                    end: 'top 10%',
                    scrub: true,
                    },
                    ease: 'power1.inOut'
                })
                })
            
            },{scope: scrollRef})
            }

