# GSAP-FROM

GsapFrom
The gsap.from() method is used to animate elements from their current state to a new state.

The gsap.from() method is similar to the gsap.to() method, but the difference is that the

gsap.from() method animates elements from a new state to their current state, while the gsap.to() method animates elements from their current state a new state

Read mero about the gsap.from() method.

    <h1>code example</h1>

     useGSAP(()=>{

    gsap.from('#green-box',{
      x:250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'power1.inOut'
    })

  },{});
