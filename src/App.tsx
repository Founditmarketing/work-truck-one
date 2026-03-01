import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';
import IndustryPage from './pages/IndustryPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/:id" element={<ServicePage />} />
          <Route path="industries/:id" element={<IndustryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
