import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


import './App.css'

function App() {

  // TODO : Implement the gsap.to() method
  
   useGSAP(()=>{

    gsap.to('#blue-box',{
      x:250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'bounce'
    })

  },{});
  

  return (
    <>
      <div>
        <h1 className='font-mono text-[3.2em] text-[#fff] ml-7 mt-7'>GsapTo</h1>
        <div className='ml-[8em] mt-5'>
          <p className='text-[rgb(83,77,73)]'>The <span className='text-amber-600'>gsap.to()</span> method is used to animate elements from their current state to a new state.</p>
          <p className='text-[rgb(83,77,73)] mt-6'> The <span className='text-amber-600'> gsap.to()</span> method is similar to the <span className='text-amber-600'>gsap.from()</span> method, but the difference is that the </p>
          <p className='text-[rgb(83,77,73)] '> <span className='text-amber-600'>gsap.to()</span> method animates elements from their current state to a new state, while the <span className='text-amber-600'> gsap.from()</span> method animates elements from a new state to their current state.</p>
          <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/GSAP/gsap.to()/">gsap.to()</a></span> method.</p>
          <div id='blue-box' className='h-20 w-20  bg-blue-500 mt-[5em] rounded-[1em]'></div>
        </div>

        
        
      </div>
     
    </>
  )
}

export default App
