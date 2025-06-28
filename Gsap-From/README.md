# GSAP-FROM

<div>
       
       <h1 className='font-mono text-[3.2em] text-[#fff] ml-7 mt-7'>GsapFrom</h1>
        <div className='ml-[8em] mt-5'>
          <p className='text-[rgb(83,77,73)]'>The <span className='text-amber-600'>gsap.from()</span> method is used to animate elements from their current state to a new state.</p>
          <p className='text-[rgb(83,77,73)] mt-6'> The <span className='text-amber-600'> gsap.from()</span> method is similar to the <span className='text-amber-600'>gsap.to()</span> method, but the difference is that the </p>
          <p className='text-[rgb(83,77,73)] '> <span className='text-amber-600'>gsap.from()</span> method animates elements from a new state to their current state, while the <span className='text-amber-600'> gsap.to()</span> method animates elements from their current state a new state</p>
          <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/GSAP/Timeline/from()/">gsap.from()</a></span> method.</p>
          <div id='green-box' className='h-20 w-20  bg-green-500 mt-[5em] rounded-[1em]'></div>
        </div>

      </div>

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