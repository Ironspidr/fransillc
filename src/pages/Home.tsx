import About from '../components/about.jsx';
import Contact from '../components/contact.jsx';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Services from '../components/services.jsx';
import '../index.css';
// import SlidingCards from './components/slidingCards';


function App() {
  

  return (
      <>
        <div className='pt-5 font-mont'>
          <div className='flex justify-center py-5'>
            <Navbar />
          </div>
          <div className='flex-row justify-center'>
            <Header />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <About />
          </div>
          <>
            <Services />
          </>
          <>
            <Contact />
          </>
          <div className='pt-5'>
            <Footer />
          </div>
        </div>
      </>
  );
}

export default App;
