# Gsap Stagger

GSAP stagger is a feature that allows you to apply animations with a staggered delay to a group of elements.

By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations between each

elements, as well as customize the easing and duration of each individual animations. This enables you to create dynamic

and visually appealing effects, such as staggered fades, rotations,movements,and more.

Read mero about the Gsap Stagger feature.

<h1> code example</h1>

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