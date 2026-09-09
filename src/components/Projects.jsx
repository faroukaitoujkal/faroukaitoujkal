import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Check, Sparkles, Radio, Monitor } from 'lucide-react';
import { Tilt } from 'react-tilt';
import SectionContainer from './SectionContainer';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkTouch = () => {
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            setIsDesktop(window.innerWidth > 968 && !hasTouch);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    const defaultTiltOptions = {
        reverse: false,
        max: 6,
        perspective: 1000,
        scale: 1.01,
        speed: 800,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    const filterButtons = [
        { id: 'all', label: t.projects.filterAll, icon: Sparkles },
        { id: 'realtime', label: t.projects.filterRealtime, icon: Radio },
        { id: 'desktop', label: t.projects.filterDesktop, icon: Monitor },
    ];

    const filteredProjects = activeFilter === 'all'
        ? t.projects.items
        : t.projects.items.filter(p => p.category === activeFilter);

    // Conditional Tilt Wrapper so mobile touch scroll is never hijacked
    const CardWrapper = ({ children }) => {
        if (isDesktop) {
            return (
                <Tilt options={defaultTiltOptions} className="tilt-wrapper">
                    {children}
                </Tilt>
            );
        }
        return <div className="tilt-wrapper">{children}</div>;
    };

    return (
        <SectionContainer id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.projects.title}</h2>
                    <p className="section-subtitle">{t.projects.subtitle}</p>
                    <div className="section-divider" aria-hidden="true"></div>
                </div>

                {/* Filter Bar */}
                <div className="projects-filter-wrapper">
                    <div className="projects-filter-bar" role="group" aria-label="Filtres des projets">
                        {filterButtons.map(btn => {
                            const Icon = btn.icon;
                            const isActive = activeFilter === btn.id;
                            return (
                                <button
                                    key={btn.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    className={`project-filter-btn ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(btn.id)}
                                >
                                    <Icon size={15} aria-hidden="true" />
                                    <span>{btn.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeProjectFilter"
                                            className="filter-active-pill"
                                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3 }}
                                className="project-grid-item"
                            >
                                <CardWrapper>
                                    <div className="project-card glass-card">
                                        {/* Card Header & Image */}
                                        <div className="project-image-container">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={`Aperçu du projet ${project.title}`}
                                                    className="project-img"
                                                    loading="lazy"
                                                    width="600"
                                                    height="340"
                                                />
                                            ) : (
                                                <div className="project-fallback-icon">
                                                    <Code2 size={44} aria-hidden="true" />
                                                </div>
                                            )}
                                            <div className="project-badge-tag">
                                                {project.badge}
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="project-details">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-desc">{project.desc}</p>

                                            {/* Key features */}
                                            {project.features && (
                                                <div className="project-features-list">
                                                    {project.features.map((feat, fIdx) => (
                                                        <div key={fIdx} className="feature-item">
                                                            <Check size={14} className="feature-check" aria-hidden="true" />
                                                            <span>{feat}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Tech tags */}
                                            <div className="project-tech-tags">
                                                {project.tech.map((tech) => (
                                                    <span key={tech} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="project-actions">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline project-action-btn"
                                                        aria-label={`${t.projects.viewCode} - ${project.title}`}
                                                    >
                                                        <Github size={16} aria-hidden="true" />
                                                        <span>{t.projects.viewCode}</span>
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary project-action-btn"
                                                        aria-label={`${t.projects.liveDemo} - ${project.title}`}
                                                    >
                                                        <ExternalLink size={16} aria-hidden="true" />
                                                        <span>{t.projects.liveDemo}</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardWrapper>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Projects;
