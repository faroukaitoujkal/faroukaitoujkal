import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        farouk<span className="logo-accent">.dev</span>
                    </div>
                    
                    <p className="footer-tagline">
                        {t.footer.tagline}
                    </p>

                    <div className="footer-links">
                        <Link to="/mentions-legales" onClick={scrollToTop} className="footer-link">{t.footer.legal}</Link>
                        <Link to="/politique-confidentialite" onClick={scrollToTop} className="footer-link">{t.footer.privacy}</Link>
                    </div>

                    <div className="footer-bottom">
                        <div className="copyright">
                            &copy; {currentYear} {t.footer.copyright}. {t.footer.rights}
                        </div>
                        
                        <div className="footer-socials">
                            <a
                                href="https://github.com/faroukaitoujkal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="GitHub"
                            >
                                <Github size={20} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/farouk-aitoujkal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} aria-hidden="true" />
                            </a>
                            <a
                                href="mailto:faroukaitoujkal@gmail.com"
                                className="footer-social-link"
                                aria-label="Email"
                            >
                                <Mail size={20} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
