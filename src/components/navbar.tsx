import logo from "../assets/logo-bg.png";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { useState } from "react";
// need to create media queries


export default function Menubar() {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="h-fit fixed flex flex-row justify-between items-center w-3/4 rounded-lg py-5 px-10 shadow-sm text-md font-spgross backdrop-blur-lg md:fixed flex-wrap">
            <div className="flex flex-row items-center h-14 w-14">
                <img src={logo} alt="acm-logo"/>
                <p className="text-sm w-1/2">FRANSI LLC</p>
            </div>


            <div className="hidden items-center space-x-10 md:flex">
                <NavLinks/>
            </div>

            <div>
                <button className="rounded-lg p-2 hover:shadow-lg md:hidden" onClick={()=>{setIsOpen(!isOpen)}} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            

            {isOpen && (
                <div className="flex sm:flex-col md:hidden px-4 sm:px-6 pb-2 justify-start">
                    <NavLinks/>
                </div>
            )}
        </div>
    );
}


const NavLinks = () => {
    const classVals = "rounded-lg hover:bg-slate-100 p-2 hover:shadow-lg md:px-5"

    return(
        <ul className="flex flex-row space-x-10 font-mont flex-wrap basis-60">
            <div className="w-24 justify-center md:flex">
                <a href="/">
                    <div className={classVals}>
                        <li>
                            Home
                        </li>
                    </div>
                </a>
                <a href="/faqs">
                    <div className={classVals}>
                        <li>
                            FAQs
                        </li>
                    </div>
                </a>
                <a href="/careers">
                    <div className={classVals}>
                        <li>
                            Careers
                        </li>
                    </div>
                </a>
                <a href="/contact">
                    <div className={classVals}>
                        <li>Contact</li>
                    </div>
                </a>
                
            </div>
        </ul>
    )
}