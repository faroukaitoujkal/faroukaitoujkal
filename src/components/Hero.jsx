import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { slideInLeft } from '../utils/animations';
import SectionContainer from './SectionContainer';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <SectionContainer id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={slideInLeft}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Pill */}
                    <div className="status-badge" role="status" aria-label={t.hero.status}>
                        <span className="status-dot" aria-hidden="true"></span>
                        <span>{t.hero.status}</span>
                    </div>

                    <span className="greeting">{t.hero.greeting}</span>
                    <h1 className="name">Ait Oujkal Farouk</h1>
                    <h2 className="role-gradient">{t.hero.role}</h2>

                    <p className="description">{t.hero.description}</p>

                    {/* Location Tag */}
                    <div className="hero-meta-badge">
                        <MapPin size={16} className="meta-icon" aria-hidden="true" />
                        <span>{t.hero.location}</span>
                    </div>

                    {/* CTA Group */}
                    <div className="cta-group">
                        <motion.a
                            href="#contact"
                            className="btn btn-primary hero-btn"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span>{t.hero.cta}</span>
                            <ArrowRight size={17} aria-hidden="true" />
                        </motion.a>

                        <motion.a
                            href="/assets/documents/CV_Ait-Oujkal_Farouk.pdf"
                            download="CV_Ait-Oujkal_Farouk.pdf"
                            className="btn btn-outline hero-btn"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label={t.hero.downloadCV}
                        >
                            <Download size={17} aria-hidden="true" />
                            <span>{t.hero.downloadCV}</span>
                        </motion.a>
                    </div>

                    {/* Social Quick Links */}
                    <div className="hero-socials" aria-label="Liens réseaux sociaux">
                        <a
                            href="https://www.linkedin.com/in/farouk-aitoujkal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="Profil LinkedIn d'Ait Oujkal Farouk"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} aria-hidden="true" />
                        </a>
                        <a
                            href="https://github.com/faroukaitoujkal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="Profil GitHub d'Ait Oujkal Farouk"
                            title="GitHub"
                        >
                            <Github size={18} aria-hidden="true" />
                        </a>
                        <a
                            href="mailto:faroukaitoujkal@gmail.com"
                            className="hero-social-link"
                            aria-label="Envoyer un email directement à Farouk"
                            title="Email"
                        >
                            <Mail size={18} aria-hidden="true" />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Avatar & Visual Frame */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="avatar-frame">
                        <div className="avatar-glow-backdrop" aria-hidden="true"></div>
                        <div className="image-wrapper">
                            <img
                                src="/assets/images/avatar.jpeg"
                                alt="Ait Oujkal Farouk - Software Developer"
                                width="300"
                                height="300"
                                loading="eager"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Ambient Grid Overlay */}
            <div className="hero-bg-grid" aria-hidden="true"></div>
        </SectionContainer>
    );
};

export default Hero;
