import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/#contact');
            setTimeout(() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector('#contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <p className="footer-name">
                            © {new Date().getFullYear()} {t.footer.copyright}
                        </p>
                        <p className="footer-tagline">
                            {t.footer.tagline}
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="back-to-top-btn"
                        aria-label="Retourner en haut de page"
                        title="Retour en haut"
                    >
                        <ArrowUp size={18} aria-hidden="true" />
                    </button>
                </div>

                <div className="footer-bottom">
                    <p className="footer-rights">
                        {t.footer.rights}
                    </p>

                    <div className="footer-links">
                        <a href="#contact" onClick={handleContactClick}>{t.footer.contact}</a>
                        <span className="divider" aria-hidden="true">•</span>
                        <Link to="/mentions-legales">{t.footer.legal}</Link>
                        <span className="divider" aria-hidden="true">•</span>
                        <Link to="/politique-confidentialite">{t.footer.privacy}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
