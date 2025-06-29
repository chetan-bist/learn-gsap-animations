import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';

function App() {
 
  // TODO: Implement the gsap.stagger() method

  useGSAP(() =>{

    gsap.to('.stagger-box',{
      y:250,
      rotaion:360,
      borderRadius:'100%',
      repeat:-1,
      yoyo:true,
     // stagger:0.5
     stagger:{
      amount:1.5,
      grid:[2,1],
      axis: 'y',
      ease: 'circ.inOut',
      from: 'center'
     }
    })
  })

  return (
    <>
      <div>
        <h1 className='font-mono text-[3.2em] text-[#fff] ml-7 mt-7'>GsapFromTo</h1>
        <div className='ml-[8em] mt-5'>
          <p className='text-[rgb(83,77,73)]'>GSAP stagger is a feature that allows you to apply animations with a staggered delay to a group of elements. </p>
          <p className='text-[rgb(83,77,73)] mt-6'>By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations between each</p>
          <p className='text-[rgb(83,77,73)] '>elements, as well as customize the easing and duration of each individual animations. This enables you to create dynamic</p>
          <p className='text-[rgb(83,77,73)] '>and visually appealing effects, such as staggered fades, rotations,movements,and more.</p>
          <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/resources/getting-started/Staggers/">Gsap Stagger</a></span> feature.</p>
          
          <div id='red-box' className='mt-[5em] flex gap-6 grid-cols-7 '>
            <div className="bg-blue-300 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-400 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-500 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-600 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-700 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-800 h-20 w-14 rounded-md stagger-box"></div>
            <div className="bg-blue-900 h-20 w-14 rounded-md stagger-box"></div>


          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
