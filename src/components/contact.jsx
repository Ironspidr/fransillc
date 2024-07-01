import React from "react";
import abstract from "../assets/abstract2.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from '@emailjs/browser';


gsap.registerPlugin(ScrollTrigger);


export default function Contact() {
    const inputClass = "p-2 m-2 md:w-1/3 justify-center text-xl rounded-md";
    const labelClass = "text-2xl";
    const main = useRef();

    useGSAP(
        () => {
          const title = gsap.utils.toArray('.title');
          
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
      

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_j69ty7v', 'template_klg7vkl', form.current, {
            publicKey: 'HRG7QHkxTjjdgYchw',
        })
        .then(
            () => {
            alert('Email sent!');
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div>
            <div className="w-full" ref={main}>
                <h1 className="title text-5xl py-5">Contact</h1>
            </div>
            <div>
                <div className='md:hidden flex flex-col items-center justify-center'>
                    <img src={abstract} alt="about" className="w-1/4 rounded-lg"/>
                    <div className='w-1/4 sm:hidden'></div>
                    <div className="flex items-center justify-center">
                        <div className="">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="justify-center flex flex-col">
                                    <div>
                                        <div className={inputClass}>
                                            <label htmlFor="name" className={labelClass}>Name:</label><br></br>
                                            <input type="text" id="name" name="name" className={inputClass} placeholder="Type name here"></input><br></br>
                                        </div>
                                        <div className={inputClass}>
                                            <label htmlFor="email" className={labelClass}>Email:</label><br></br>
                                            <input type="text" id="email" name="email" placeholder="Type email here" className={inputClass}></input><br></br>
                                        </div>
                                        <div className={inputClass}>
                                            <label htmlFor="message" className={labelClass}>Message:</label><br></br>
                                            <textarea id="message" name="message" placeholder="Type message here" className={inputClass}></textarea><br></br>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div>
                <div className='hidden md:flex flex-row items-center justify-center'>
                    <img src={abstract} alt="about" className="w-1/4 rounded-lg"/>
                    <div className='w-1/4 sm:hidden'></div>
                    <div className="flex items-center justify-center">
                        <div className="">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="justify-center flex flex-col">
                                    <div>
                                        <div className={inputClass}>
                                            <label htmlFor="name" className={labelClass}>Name:</label><br></br>
                                            <input type="text" id="name" name="name" className={inputClass} placeholder="Type name here"></input><br></br>
                                        </div>
                                        <div className={inputClass}>
                                            <label htmlFor="email" className={labelClass}>Email:</label><br></br>
                                            <input type="text" id="email" name="email" placeholder="Type email here" className={inputClass}></input><br></br>
                                        </div>
                                        <div className={inputClass}>
                                            <label htmlFor="message" className={labelClass}>Message:</label><br></br>
                                            <textarea id="message" name="message" placeholder="Type message here" className={inputClass}></textarea><br></br>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

