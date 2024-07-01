import Footer from '../components/footer';
import Navbar from '../components/navbar';

import { useState } from 'react';

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We specialize in IT resourcing, product development, and providing comprehensive solutions for digital transformation and operational efficiency. Our services range from custom software development to IT staff augmentation.'
        },
        {
            question: 'How do you ensure the quality of your services?',
            answer: 'Quality is our top priority. We employ rigorous testing methods, follow best practices in project management, and keep up with the latest industry standards to ensure that our deliverables meet the highest quality benchmarks.'
        },
        {
            question: 'Can you customize solutions to fit our business needs?',
            answer: 'Absolutely! We work closely with our clients to understand their specific needs and challenges. Our team is skilled in designing and developing customized solutions that align with your business goals and integrate seamlessly with your existing systems.'
        },
        {
            question: 'What industries do you serve?',
            answer: 'We serve a diverse range of industries including healthcare, finance, retail, education, and more. Our broad industry experience enables us to provide tailored solutions that meet the unique requirements of each sector.'
        },
        {
            question: 'How do you handle data security in your products?',
            answer: 'Data security is paramount in all our projects. We adhere to strict security protocols and use the latest technologies to ensure that all data handled by our systems is secure from unauthorized access and breaches.'
        },
        {
            question: 'What is your approach to project management?',
            answer: 'Our project management approach is based on the Agile methodology, allowing for flexibility and continuous improvement throughout the development process. This ensures timely delivery and alignment with our clients\' evolving requirements.'
        },
        {
            question: 'Do you offer support and maintenance for the solutions you develop?',
            answer: 'Yes, we provide comprehensive support and maintenance services to ensure our solutions continue to perform optimally and evolve with your business needs. Our support team is available to assist with any issues or upgrades required.'
        },
        {
            question: 'What makes your IT resourcing services stand out?',
            answer: 'Our IT resourcing services stand out due to our access to a wide network of top-tier talent, our ability to quickly match the right skills with client needs, and our commitment to fostering a productive, engaging environment for both our clients and our consultants.'
        },
        {
            question: 'How do you keep up with technology advancements?',
            answer: 'We continually invest in training and development for our team to keep up with the latest technologies and trends. This commitment enables us to leverage cutting-edge technologies in our solutions and advise our clients on the best practices in the industry.'
        },
        {
            question: 'What is the typical timeline for a product development project?',
            answer: 'The timeline for product development varies depending on the complexity and scope of the project. After an initial consultation, we provide a detailed project timeline, including key milestones and delivery dates, tailored to your specific project requirements.'
        }
    ];

    const handleAccordionClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className='flex justify-center py-5'>
                <Navbar />
            </div>
            
            <div>
                <div className="flex flex-row justify-center items-center">
                    <div>
                        <div className="flex flex-col items-center justify-center h-screen">
                            <h1 className="text-3xl font-spgross">FAQs</h1>
                            <p className="text-lg font-mont">Frequently asked questions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pb-10'>
                <div className='w-1/2'>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <div
                                className="flex items-center justify-between cursor-pointer py-3"
                                onClick={() => handleAccordionClick(index)}
                            >
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 transition-transform ${
                                        activeIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            {activeIndex === index && (
                                <div className="py-3">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <Footer />
            </div>
        </div>
    );
}