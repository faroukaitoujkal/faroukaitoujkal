import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { Analytics } from '@vercel/analytics/react';

const MainContent = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </>
);

function App() {
    React.useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <LanguageProvider>
            <ThemeProvider>
                <div className="app-container">
                    <Router>
                        <Routes>
                            <Route path="/" element={<MainContent />} />
                            <Route path="/mentions-legales" element={<MentionsLegales />} />
                            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                        </Routes>
                    </Router>
                </div>
                <Analytics />
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
