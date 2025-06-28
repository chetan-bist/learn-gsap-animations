# GSAP.timeline() method

The gsap.Timeline() method is used to create a timeline instance that can be used to manage multiple animations.

The gsap.Timeline() method is similar to the gsap.to() , gsap.from() and gsap.fromTo() methods, but the difference is that the

gsap.timeline() method is used to create a timeline instance that can be used to manage multiple animation, while the gsap.to() , gsap.from() and gsap.fromTo()

methods are used to animate elements from their current state to a new state, from a new state to their current state, and from a new state to a new state, respectively.

Read mero about the gsap.timeline() method.

<h1>Code Example</h1>


import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';

function App() {
  
  // TODO : Implement the gsap timeline

  const timeline = gsap.timeline({
    repeat:-1, repeatDelay:1,yoyo:true
  });
  useGSAP(()=>{

    timeline.to('#yellow-box',{
      x:250,
      rotation:360,
      borderRadius:'100%',
      duration:2,
      ease:'back.inOut'
    })

     timeline.to('#yellow-box',{
      y:250,
      scale:2,
      rotation:360,
      borderRadius:'100%',
      duration:2,
      ease:'back.inOut'
    })

     timeline.to('#yellow-box',{
      x:500,
      scale:1,
      rotation:360,
      borderRadius:'8px',
      duration:2,
      ease:'back.inOut'
    })

  },[])

  return (
    <>
      <div>
       
        <h1 className='font-mono text-[3.2em] text-[#fff] ml-7 mt-7'>GsapTimeline</h1>
        <div className='ml-[8em] mt-5'>
          <p className='text-[rgb(83,77,73)]'>The <span className='text-amber-600'>gsap.Timeline()</span> method is used to create a timeline instance that can be used to manage multiple animations.</p>
          <p className='text-[rgb(83,77,73)] mt-6'> The <span className='text-amber-600'> gsap.Timeline()</span> method is similar to the <span className='text-amber-600'>gsap.to()</span> , <span className='text-amber-600'>gsap.from()</span> and <span className='text-amber-600'>gsap.fromTo()</span> methods, but the difference is that the </p>
          <p className='text-[rgb(83,77,73)] '> <span className='text-amber-600'>gsap.timeline()</span> method is used to create a timeline instance that can be used to manage multiple animation, while the <span className='text-amber-600'> gsap.to()</span> , <span className='text-amber-600'>gsap.from()</span> and <span className='text-amber-600'>gsap.fromTo()</span> </p>
          <p className='text-[rgb(83,77,73)] '> methods are used to animate elements from their current state to a new state, from a new state to their current state, and from a new state to a new state, respectively. </p>
          <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/GSAP/gsap.timeline()/">gsap.timeline()</a></span> method.</p>
          <div className="mt-20 space-y-10">
            <button className='rounded-sm hover:bg-sky-700  bg-gray-500 h-10 w-25' onClick={()=>{
              if(timeline.paused()){
                timeline.play();
              }else{
                timeline.pause();
              }
            }}>Play/Pause</button>
          </div>
          <div id='yellow-box' className='h-20 w-20  bg-yellow-500 mt-[5em] rounded-[1em]'></div>
        </div>

      </div>
    
    </>
  )
}

export default App


