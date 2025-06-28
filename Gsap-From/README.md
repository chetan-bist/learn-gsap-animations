# GSAP-FROM

GsapFrom
The gsap.from() method is used to animate elements from their current state to a new state.

The gsap.from() method is similar to the gsap.to() method, but the difference is that the

gsap.from() method animates elements from a new state to their current state, while the gsap.to() method animates elements from their current state a new state

 <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/GSAP/Timeline/from()/">gsap.from()</a></span> method.</p>

<h1>Code Example</h1>

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


