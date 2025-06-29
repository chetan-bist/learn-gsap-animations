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

  return (
    <>
      <div>
       <h1 id="text" className='font-mono text-[3.2em] text-[#fff] ml-7 mt-7 translate-y-15 opacity-0'>GsapFromTo</h1>
        <div className='ml-[8em] mt-5'>
         <p className='text-[rgb(83,77,73)] para'>We can use method like <span className='text-amber-600'>gsap.to()</span>, <span className='text-amber-600'>gsap.from()</span>,<span className='text-amber-600'>gsap.fromTo()</span> and <span className='text-amber-600'>gsap.timeline()</span> to animate text.</p>
          <p className='text-[rgb(83,77,73)] mt-6 para'>Using these methods we can achieve various text animations and effects like fade in, fade out, slide in, slide out, and many more.</p>
          <p className='text-[rgb(83,77,73)] mt-6 para'>For more advanced text animations and effects, you can explore the GSAP TextPlugin or other third-party libraries that specialize in text animations.</p>
          <p className='text-[rgb(83,77,73)] mt-6 para'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/Plugins/TextPlugin/#value">Gsap TextPlugin</a></span> plugin.</p>
        </div>
      </div>
    </>
  )
}

export default App
