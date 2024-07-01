import abstract from "../assets/abstract.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function Services() {
    const main = useRef();
    useGSAP(
        ()=> {
            // const sections = gsap.utils.toArray('.section');
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
            { scope: main },
    );
    return (
      <div className="flex flex-col justify-center p-20" ref={main}>
            <h1 className="text-5xl py-5 justify-start title">Services</h1>
            <div className="items-center justify-center hidden md:flex md:flex-col">
                <div className="px-12 md:w-1/2 h-1/3 md:h-1/3 justify-center w-1/4">
                    <img src={abstract} className="rounded-lg h-1/3" alt="abstract"></img>
                </div>
                <div className="w-1/5 px-10"></div>
                <ServicesSections />
            </div>
            <div className="flex flex-col items-center justify-center md:hidden">
                <div className="px-12 md:w-1/2 h-1/3 md:h-1/3 justify-center w-1/4">
                    <img src={abstract} className="rounded-lg h-1/3" alt="abstract"></img>
                </div>
                <div className="w-1/5 px-10"></div>
                <ServicesSections />
            </div>
      </div>
    );
  }

  function ServicesSections() {
    const divClass = "sections flex flex-col md:justify-start justify-center items-center flex-wrap py-5 w-2/3"
    const headingClass = "about text-2xl py-5 text-center"
    const textClass = "text-xl md:w-2/3 items-center pt-8"
    

    useGSAP(
        () => {
            const section = gsap.utils.toArray('.sections');
            section.forEach((value) => { 
                gsap.to(value, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: value,
                        scrub: true,
                        // markers: true,
                    },
                })
                gsap.to(value, {
                    opacity: 0.25,
                })
                ;
            });
        }
    );
    return (
        <div className="flex flex-col justify-center items-center w-1/4 md:w-1/2 p-24">
            <section className={divClass}>
                <h2 className={headingClass}>Resourcing</h2>
                <p className={textClass}>Need the right talent to drive your projects forward? We provide top-notch IT professionals to meet your specific needs, ensuring a perfect match for your business requirements. From project managers to software engineers, our resourcing solutions are designed to enhance your team's capabilities.</p>
            </section>
            <section className={divClass}>
                <h2 className={headingClass}>Software as a Service (SaaS)</h2>
                <p className={textClass}>Unlock the power of cloud computing with our comprehensive SaaS solutions. We offer a wide range of applications designed to streamline your operations, improve productivity, and reduce costs. Whether you need CRM, ERP, or any other business application, we've got you covered.</p>
            </section>
            <section className={divClass}>
                <h2 className={headingClass}>Product Development</h2>
                <p className={textClass}>From ideation to launch, we turn your visions into reality. Our product development team works closely with you to design, develop, and deliver cutting-edge products that stand out in the market. We ensure a seamless development process, focusing on innovation, quality, and efficiency.</p>
            </section>
        </div>
    );
}