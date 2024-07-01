import Contact from "../components/contact.jsx";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactPage() {
    return(
        <div>
            <div className='flex justify-center py-5'>
                <Navbar />
            </div>
            
            <div className='py-20'>
                <Contact />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}