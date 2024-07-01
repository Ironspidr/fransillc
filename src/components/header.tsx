import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";
import { useState, useEffect } from "react";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Typewriter: React.FC = () => {
    // const texts: string[] = ["Transformation", "Innovation", "Growth", "Success"];
    const text: string = "Transformation";
    const delay: number = 100;

    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        
        if (currentIndex < text.length) {
            const timeout: NodeJS.Timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
}



// eslint-disable-next-line
export default function Header() {

    useGSAP(()=> {
        gsap.to("#cursor", {opacity:0, repeat:-1, yoyo:true, duration:0.5, ease: "SteppedEase.config(1)"});
    })

    return (
        <div className="flex justify-center items-center font-mont flex-wrap w-screen overflow-hidden">
            <h1 className="flex-wrap w-1/2 text-4xl md:text-5xl basis" id="main">
                Empowering Your Digital <br></br>
                <span className="flex-wrap w-1/2 text-5xl md:text-8xl text-blue-900"><Typewriter/></span>
                <span id="cursor" className="text-5xl text-blue-900">_</span>
            </h1>
            <div className="w-1/4 h-screen text-2xl bg-transparent rounded-lg">
                <canvas>
                    <p>Canvas</p>
                </canvas>
            </div>
        </div>
    );
}