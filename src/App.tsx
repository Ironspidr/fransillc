import Home from './pages/Home';
import Careers from './pages/careers';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FAQs from './pages/faqs';
import ContactPage from './pages/contact';

export default function App() {
  return (
    <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
    </Router>
  );
}