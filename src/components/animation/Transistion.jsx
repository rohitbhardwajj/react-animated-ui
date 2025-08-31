import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Transistion = () => {
  
useGSAP(() => {
      let tl = gsap.timeline();
  tl.from(".stairs", {
    height: 0,     // bahut fast
    stagger: {
        amount:-0.3
    },     // chhota gap
    ease: "power1.out" // fast ease
  });
  tl.to(".stairs", {
    y: "100%", 
    stagger: {
        amount:0.3
    },      // bahut fast
  });

  
});


  return (
    <div className='transition-div'>
        <div className="stairs" style={{ backgroundColor: "black" }}>
        </div>
        <div className="stairs" style={{ backgroundColor: "black" }}>
        </div>
        <div className="stairs" style={{ backgroundColor: "black" }}>
        </div>
        <div className="stairs" style={{ backgroundColor: "black" }}>
        </div>
    </div>
  )
}

export default Transistion