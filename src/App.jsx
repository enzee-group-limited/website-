import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/landingPage/home';
import About from './pages/aboutPage/about';
import Event from './pages/eventPage/event';
import Contact from './pages/contactPage/contact';
import Footer from './components/footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'events', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div
          style={{
            minHeight: '100vh',
            color: 'white',
          }}
        >
          <Navbar activeSection={activeSection} />
          <div id="home" className="section">
            <Home />
          </div>
          <div id="about" className="section">
            <About />
          </div>
          <div id="events" className="section">
            <Event />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>
          <Footer />

        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
