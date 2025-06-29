# Gsap Text animatons

We can use method like gsap.to(), gsap.from(),gsap.fromTo() and gsap.timeline() to animate text.

Using these methods we can achieve various text animations and effects like fade in, fade out, slide in, slide out, and many more.

For more advanced text animations and effects, you can explore the GSAP TextPlugin or other third-party libraries that specialize in text animations.

Read mero about the Gsap TextPlugin plugin.

<h1>code example</h1>

            import {gsap} from 'gsap'
            import {useGSAP} from '@gsap/react'
            function App() {
            
                //TODO Implement gsap text animation 

                useGSAP(() =>{
                    gsap.to('#text',{
                    ease: 'power1.inOut',
                    opacity:1,
                    y: 0
                    })

                    gsap.fromTo('.para',{
                    opacity:0,
                    y:20
                    },{
                    opacity:1,
                    y:0,
                    delay:1,
                    stagger:0.1
                    })
                })
            }


