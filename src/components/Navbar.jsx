import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll events for navbar style and active section
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const location = useLocation();
    const navigate = useNavigate();

    const scrollTo = (id) => {
        setIsMobileMenuOpen(false);
        
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 70,
                        behavior: 'smooth',
                    });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    };

    const navItems = [
        { id: 'home', label: t.nav.home },
        { id: 'about', label: t.nav.about },
        { id: 'experience', label: t.nav.experience },
        { id: 'skills', label: t.nav.skills },
        { id: 'projects', label: t.nav.projects },
        { id: 'contact', label: t.nav.contact },
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
                    className="nav-logo"
                    aria-label="Retour à l'accueil"
                >
                    farouk<span className="logo-accent">.dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollTo(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    
                    {/* Utility Buttons */}
                    <div className="nav-utils">
                        <button
                            onClick={toggleLanguage}
                            className="icon-btn"
                            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                        >
                            <Globe size={18} aria-hidden="true" />
                            <span className="sr-only" style={{ display: 'none' }}>{language.toUpperCase()}</span>
                        </button>
                        
                        <button
                            onClick={toggleTheme}
                            className="icon-btn"
                            aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
                            title={isDark ? t.nav.themeLight : t.nav.themeDark}
                        >
                            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="icon-btn mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                className="mobile-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                            <motion.div
                                className="mobile-menu"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                            >
                            <div className="mobile-nav-links">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollTo(item.id);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                            
                            <div className="mobile-utils">
                                <button
                                    onClick={toggleLanguage}
                                    className="icon-btn"
                                    aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                                    title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                                >
                                    <Globe size={20} aria-hidden="true" />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, marginLeft: '4px' }}>{language.toUpperCase()}</span>
                                </button>
                                
                                <button
                                    onClick={toggleTheme}
                                    className="icon-btn"
                                    aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
                                    title={isDark ? t.nav.themeLight : t.nav.themeDark}
                                >
                                    {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
                                </button>
                            </div>
                        </motion.div>
                        </>
                    )}
                </AnimatePresence>
        </>
    );
};

export default Navbar;
