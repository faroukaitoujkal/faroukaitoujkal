import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Quote, Gamepad2, Plane, Film, Heart } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
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
        case 'gamepad': return <Gamepad2 size={20} aria-hidden="true" />;
        case 'football': return <Football size={20} />;
        case 'plane': return <Plane size={20} aria-hidden="true" />;
        case 'film': return <Film size={20} aria-hidden="true" />;
        default: return <Gamepad2 size={20} aria-hidden="true" />;
    }
};

const getHighlightIcon = (index) => {
    switch (index) {
        case 0: return <Layers size={22} className="pillar-icon" aria-hidden="true" />;
        case 1: return <ShieldCheck size={22} className="pillar-icon" aria-hidden="true" />;
        case 2: return <Zap size={22} className="pillar-icon" aria-hidden="true" />;
        default: return <Layers size={22} className="pillar-icon" aria-hidden="true" />;
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
                    <div className="section-divider" aria-hidden="true"></div>
                </div>

                <div className="about-main-card glass-card">
                    <div className="about-top-layout">
                        {/* Left column: Bio & Quote */}
                        <motion.div
                            className="about-bio-col"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="about-lead">
                                {t.about.description}
                            </p>

                            <div className="about-quote-box">
                                <Quote className="quote-icon-bg" size={48} aria-hidden="true" />
                                <p className="quote-text">{t.about.quote}</p>
                            </div>
                        </motion.div>

                        {/* Right column: Sticker image */}
                        <motion.div
                            className="about-visual-col"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="sticker-glow-frame">
                                <div className="sticker-wrapper">
                                    <img
                                        src="/assets/images/sticker.png"
                                        alt="Ait Oujkal Farouk avatar sticker"
                                        className="about-sticker"
                                        width="220"
                                        height="220"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Engineering Pillars / Highlights */}
                    <div className="about-pillars-grid">
                        {t.about.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                className="pillar-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                            >
                                <div className="pillar-icon-box">
                                    {getHighlightIcon(idx)}
                                </div>
                                <h4>{highlight.title}</h4>
                                <p>{highlight.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hobbies / Personal side */}
                    <div className="about-hobbies-section">
                        <div className="hobbies-header">
                            <Heart size={17} className="heart-icon" aria-hidden="true" />
                            <span>{t.about.hobbies.title}</span>
                        </div>
                        <div className="hobbies-chips-grid">
                            {t.about.hobbies.items.map((hobby, index) => (
                                <div
                                    key={index}
                                    className="hobby-chip"
                                >
                                    <div className="hobby-chip-icon">
                                        {getHobbyIcon(hobby.icon)}
                                    </div>
                                    <span>{hobby.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
