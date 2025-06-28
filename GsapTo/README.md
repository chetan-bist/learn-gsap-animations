#📦 GSAP .to() Animation Example

This project demonstrates a basic usage of the gsap.to() method from the GreenSock Animation Platform (GSAP).

🔹 The gsap.to() method is used to animate HTML elements from their current state to a new state.
For example, moving, scaling, rotating, or fading an element can all be done using this method.

🔹 This project animates a blue box (#blue-box) using the gsap.to() method, moving it smoothly on component mount.
<h1>Code Example</h1>

useGSAP(() => {<br/>
  gsap.to('#blue-box', {<br/>
    x: 250,<br/>
    duration: 1,<br/>
    ease: "power2.out"<br/>
  });<br/>
}, []);

 <p className='text-[rgb(83,77,73)] mt-6'>Read mero about the <span className='text-blue-400 '><a href="https://gsap.com/docs/v3/GSAP/gsap.to()/">gsap.to()</a></span> method.</p>

