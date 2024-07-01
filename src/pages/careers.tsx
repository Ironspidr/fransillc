import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Careers() {

    const jobListings = [
        { title: "Performance Engineer", type: "full-time" },
        { title: "Quality Analyst", type: "full-time" },
        { title: "Front End Engineer", type: "full-time" },
        { title: "DevOps Engineer", type: "full-time" },
        { title: "Site Reliability Engineer", type: "full-time" },
        { title: "Software Engineer Backend II", type: "full-time" },
        { title: "React FE Engineer", type: "full-time" },
        { title: "Software Developer IV - Schedulling", type: "full-time" },
        { title: "Software Developer IV - Trueframe", type: "full-time" },
        { title: "Software Developer IV - Condition Report Platform", type: "full-time" },
        { title: "Senior Front End - Sales", type: "full-time" },
        { title: "Senior Python Engineer - Sales", type: "full-time" },
        { title: "Senior Engineer Back End, NextGen", type: "full-time" },
        { title: "Senior Front End Engineer, NextGen", type: "full-time" },
        { title: "Salesforce Eng", type: "full-time" },
        { title: "Salesforce Admin", type: "full-time" }
    ];

    return(
        <div>
            <div className='flex justify-center py-5'>
                <Navbar />
            </div>
            
            <div>
                <div className="flex flex-row justify-center items-center">
                        <div>
                            {/* ...existing code... */}
                            <div className="flex flex-col items-center justify-center h-screen">
                                <h1 className="text-3xl font-spgross">Careers</h1>
                                <p className="text-lg font-mont">We are hiring! Check out our job listings below.</p>
                                <p className="text-lg font-mont">Please apply through this email: <a href="mailto:fransiorg@gmail.com">fransiorg@gmail.com</a></p>

                            </div>
                            <div>
                                <div className="flex flex-row justify-center items-center">
                                    <ul className="grid grid-cols-1 gap-4 mt-8">
                                        {jobListings.map((job, index) => (
                                            <li
                                                key={index}
                                                className="bg-white shadow-md rounded-md p-4"
                                            >
                                                <h2 className="text-xl font-semibold">{job.title}</h2>
                                                <p className="text-gray-500">{job.type}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
             
                </div>
            </div>
            <div className="pt-5">
                <Footer />
            </div>
        </div>
    );
}