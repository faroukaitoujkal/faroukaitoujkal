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
                        <MapPin size={18} aria-hidden="true" />
                        <span>{t.hero.location}</span>
                    </div>

                    {/* CTA Group */}
                    <div className="cta-group">
                        <a href="#contact" className="btn btn-primary hero-btn">
                            <span>{t.hero.cta}</span>
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>

                        <a
                            href="/assets/documents/CV_Ait-Oujkal_Farouk.pdf"
                            download="CV_Ait-Oujkal_Farouk.pdf"
                            className="btn btn-outline hero-btn"
                            aria-label={t.hero.downloadCV}
                        >
                            <Download size={18} aria-hidden="true" />
                            <span>{t.hero.downloadCV}</span>
                        </a>
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
                            <Linkedin size={22} aria-hidden="true" />
                        </a>
                        <a
                            href="https://github.com/faroukaitoujkal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="Profil GitHub d'Ait Oujkal Farouk"
                            title="GitHub"
                        >
                            <Github size={22} aria-hidden="true" />
                        </a>
                        <a
                            href="mailto:faroukaitoujkal@gmail.com"
                            className="hero-social-link"
                            aria-label="Envoyer un email directement à Farouk"
                            title="Email"
                        >
                            <Mail size={22} aria-hidden="true" />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Avatar Frame */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="avatar-frame">
                        <div className="image-wrapper">
                            <img
                                src="/assets/images/avatar.jpeg"
                                alt="Ait Oujkal Farouk - Software Developer"
                                width="320"
                                height="320"
                                loading="eager"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Hero;
