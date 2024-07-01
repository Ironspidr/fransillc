import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import aboutImg from "../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    const main = useRef();

    useGSAP(
        () => {
          const title = gsap.utils.toArray('.about');
          
          title.forEach((value) => { // Explicitly type box as TweenTarget
            gsap.to(value, {
              x: 100,
              scrollTrigger: {
                trigger: value,
                start: 'bottom bottom',
                end: 'top 50%',
                scrub: true,
                // markers: true,
              },
            });
          });
        },
        { scope: main }
      );

    return (
        <div className="justify-center flex flex-col" ref={main}>
            <h1 className="about text-5xl py-5 ">About</h1>
            <div className=' items-center justify-center flex flex-col flex-wrap md:hidden'>
              <p className="text-xl w-1/4 flex-wrap p-24">At Fransi LLC, we are dedicated to transforming your digital landscape with innovative, scalable, and efficient IT solutions. Our team of experts specializes in resourcing, Software as a Service (SaaS), web development, and product development, ensuring your business stays ahead in the competitive market.</p>
              <div className='w-1/4 sm:hidden'>
              </div>
              <img src={aboutImg} alt="about" className="w-1/4 rounded-lg"/>
            </div>

            <div className='hidden md:flex items-center justify-center flex-wrap'>
              <p className="text-xl w-1/4 flex-wrap p-24">At Fransi LLC, we are dedicated to transforming your digital landscape with innovative, scalable, and efficient IT solutions. Our team of experts specializes in resourcing, Software as a Service (SaaS), web development, and product development, ensuring your business stays ahead in the competitive market.</p>
              <div className='w-1/4 sm:hidden'>
              </div>
              <img src={aboutImg} alt="about" className="w-1/4 rounded-lg"/>
            </div>
        </div>
    );
}



