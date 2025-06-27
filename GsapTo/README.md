#📦 GSAP .to() Animation Example

This project demonstrates a basic usage of the gsap.to() method from the GreenSock Animation Platform (GSAP).

🔹 The gsap.to() method is used to animate HTML elements from their current state to a new state.
For example, moving, scaling, rotating, or fading an element can all be done using this method.

🔹 This project animates a blue box (#blue-box) using the gsap.to() method, moving it smoothly on component mount.
<h1>Code Example</h1>

useGSAP(() => {
  gsap.to('#blue-box', {
    x: 250,
    duration: 1,
    ease: "power2.out"
  });
}, []);

