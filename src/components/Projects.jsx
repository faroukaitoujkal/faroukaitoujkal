import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, CheckSquare, Sparkles, Radio, Monitor, ZoomIn, X } from 'lucide-react';
import SectionContainer from './SectionContainer';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const filterButtons = [
        { id: 'all', label: t.projects.filterAll, icon: Sparkles },
        { id: 'realtime', label: t.projects.filterRealtime, icon: Radio },
        { id: 'desktop', label: t.projects.filterDesktop, icon: Monitor },
    ];

    const filteredProjects = activeFilter === 'all'
        ? t.projects.items
        : t.projects.items.filter(p => p.category === activeFilter);

    return (
        <SectionContainer id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.projects.title}</h2>
                    <p className="section-subtitle">{t.projects.subtitle}</p>
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
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                                className="project-grid-item"
                            >
                                <div className="project-card">
                                    {/* Card Header & Image */}
                                    <div 
                                        className="project-image-container"
                                        onClick={() => project.image && setSelectedImage(project.image)}
                                        role={project.image ? "button" : "presentation"}
                                        tabIndex={project.image ? 0 : -1}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && project.image) setSelectedImage(project.image);
                                        }}
                                        aria-label={project.image ? `Agrandir l'image de ${project.title}` : undefined}
                                    >
                                        {project.image ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={`Aperçu du projet ${project.title}`}
                                                    className="project-img"
                                                    loading="lazy"
                                                    width="600"
                                                    height="340"
                                                />
                                                <div className="zoom-indicator">
                                                    <ZoomIn size={28} />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="project-fallback-icon">
                                                <Code2 size={44} aria-hidden="true" />
                                            </div>
                                        )}

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
                                                        <CheckSquare size={16} className="feature-check" aria-hidden="true" />
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lightbox-overlay"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="lightbox-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="lightbox-close"
                                    onClick={() => setSelectedImage(null)}
                                    aria-label="Fermer"
                                >
                                    <X size={28} />
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Aperçu agrandi"
                                    className="lightbox-img"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SectionContainer>
    );
};

export default Projects;
