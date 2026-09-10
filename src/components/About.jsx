import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Quote, Gamepad2, Plane, Film, Heart } from 'lucide-react';
import SectionContainer from './SectionContainer';
import './About.css';

// Custom Football icon
const Football = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12 5 16 9 14.5 14 9.5 14 8 9"></polygon>
        <polyline points="12 5 12 2"></polyline>
        <polyline points="16 9 21 8"></polyline>
        <polyline points="14.5 14 17.5 18.5"></polyline>
        <polyline points="9.5 14 6.5 18.5"></polyline>
        <polyline points="8 9 3 8"></polyline>
    </svg>
);

const getHobbyIcon = (iconName) => {
    switch (iconName) {
        case 'gamepad': return <Gamepad2 size={16} aria-hidden="true" />;
        case 'football': return <Football size={16} />;
        case 'plane': return <Plane size={16} aria-hidden="true" />;
        case 'film': return <Film size={16} aria-hidden="true" />;
        default: return <Gamepad2 size={16} aria-hidden="true" />;
    }
};

const getHighlightIcon = (index) => {
    switch (index) {
        case 0: return <Layers size={24} className="highlight-icon" aria-hidden="true" />;
        case 1: return <ShieldCheck size={24} className="highlight-icon" aria-hidden="true" />;
        case 2: return <Zap size={24} className="highlight-icon" aria-hidden="true" />;
        default: return <Layers size={24} className="highlight-icon" aria-hidden="true" />;
    }
};

const About = () => {
    const { t } = useLanguage();

    return (
        <SectionContainer id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.about.title}</h2>
                    <p className="section-subtitle">{t.about.subtitle}</p>
                </div>

                <div className="about-content-wrapper">
                    {/* Text Column */}
                    <motion.div
                        className="about-text-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p>{t.about.description}</p>
                        
                        <div className="about-quote">
                            <Quote size={20} style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }} aria-hidden="true" />
                            <br />
                            {t.about.quote}
                        </div>
                    </motion.div>

                    {/* Visual Column */}
                    <motion.div
                        className="about-visual-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="sticker-container">
                            <img
                                src="/assets/images/sticker.png"
                                alt="Ait Oujkal Farouk avatar sticker"
                                className="about-sticker"
                                width="220"
                                height="220"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="about-highlights-grid">
                    {t.about.highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            className="highlight-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            {getHighlightIcon(idx)}
                            <h3 className="highlight-title">{highlight.title}</h3>
                            <p className="highlight-desc">{highlight.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Hobbies */}
                <motion.div
                    className="about-hobbies"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="hobbies-title">
                        <Heart size={18} className="hobbies-icon" aria-hidden="true" />
                        <span>{t.about.hobbies.title}</span>
                    </div>
                    <div className="hobbies-list">
                        {t.about.hobbies.items.map((hobby, index) => (
                            <div key={index} className="hobby-item">
                                {getHobbyIcon(hobby.icon)}
                                <span>{hobby.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default About;
