# Gsap.fromTo method

The gsap.fromTo() method is used to animate elements from a new state to a new state.

The gsap.fromTo() method is similar to the gsap.from() and gsap.to() methods, but the difference is that the

gsap.fromTo() method animates elements from a new state to a new state, while the gsap.from() method animates elements from a new state to their current state, and the

gsap.to() method animates elements from their current state to a new state.

Read mero about the gsap.fromTo() method.


<h1>code example</h1>

useGSAP(()=>{

    gsap.fromTo('#red-box',{

      x: 0,
      rotation:0,
      borderRadius:'0%'

    },
      {
      x:250,
      repeat: -1,
      yoyo: true,
      borderRadius:'100%',
      rotation:360,
      duration: 2,
      ease: 'bounce.out'
    })
    },{});
