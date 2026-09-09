import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    // Track scroll position for header glass backdrop
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy for active section highlight
    useEffect(() => {
        if (location.pathname !== '/') return;

        const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
        const handleSpy = () => {
            const scrollPos = window.scrollY + 200;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleSpy, { passive: true });
        handleSpy();
        return () => window.removeEventListener('scroll', handleSpy);
    }, [location.pathname]);

    // Handle ESC key and body scroll lock when mobile menu is open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        setActiveSection(targetId);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { id: 'home', name: t.nav.home, href: '#home' },
        { id: 'about', name: t.nav.about, href: '#about' },
        { id: 'experience', name: t.nav.experience, href: '#experience' },
        { id: 'skills', name: t.nav.skills, href: '#skills' },
        { id: 'projects', name: t.nav.projects, href: '#projects' },
        { id: 'contact', name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="/" className="logo" aria-label="Ait Oujkal Farouk Home">
                    <img src="/assets/images/logo.png" alt="Ait Oujkal Farouk Logo" />
                </a>

                {/* Desktop Nav */}
                <div className="nav-actions">
                    <ul className="nav-links desktop-only" role="menubar">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id && location.pathname === '/';
                            return (
                                <li key={link.id} role="none">
                                    <a
                                        href={link.href}
                                        role="menuitem"
                                        className={isActive ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNavUnderline"
                                                className="active-indicator"
                                                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="toggles">
                        <button
                            onClick={toggleLanguage}
                            className="icon-btn lang-btn"
                            aria-label={language === 'en' ? 'Passer en Français' : 'Switch to English'}
                            title={language === 'en' ? 'Passer en Français' : 'Switch to English'}
                        >
                            <span>{language === 'en' ? 'FR' : 'EN'}</span>
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="icon-btn theme-btn"
                            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
                            title={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
                        >
                            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                        </button>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu & Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            className="mobile-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden="true"
                        />
                        <motion.div
                            ref={menuRef}
                            className="mobile-menu glass-card"
                            initial={{ opacity: 0, y: -15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ul role="menu">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.id && location.pathname === '/';
                                    return (
                                        <li key={link.id} role="none">
                                            <a
                                                href={link.href}
                                                role="menuitem"
                                                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                                                onClick={(e) => handleNavClick(e, link.href)}
                                            >
                                                <span>{link.name}</span>
                                                {isActive && <span className="mobile-active-dot" />}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
