import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SectionContainer from './SectionContainer';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('work');

    return (
        <SectionContainer id="experience" className="experience-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.experience.title}</h2>
                    <p className="section-subtitle">{t.experience.subtitle}</p>
                    <div className="section-divider" aria-hidden="true"></div>
                </div>

                {/* Tab Switcher */}
                <div className="experience-tabs-wrapper">
                    <div className="experience-tabs" role="tablist" aria-label="Catégories du parcours">
                        <button
                            role="tab"
                            aria-selected={activeTab === 'work'}
                            aria-controls="panel-work"
                            id="tab-work"
                            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
                            onClick={() => setActiveTab('work')}
                        >
                            <Briefcase size={17} aria-hidden="true" />
                            <span>{t.experience.tabs.experience}</span>
                            {activeTab === 'work' && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="tab-pill"
                                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                />
                            )}
                        </button>
                        <button
                            role="tab"
                            aria-selected={activeTab === 'education'}
                            aria-controls="panel-education"
                            id="tab-education"
                            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            <GraduationCap size={18} aria-hidden="true" />
                            <span>{t.experience.tabs.education}</span>
                            {activeTab === 'education' && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="tab-pill"
                                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="experience-content">
                    <AnimatePresence mode="wait">
                        {activeTab === 'work' ? (
                            <motion.div
                                key="work"
                                id="panel-work"
                                role="tabpanel"
                                aria-labelledby="tab-work"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="timeline-cards"
                            >
                                {t.experience.work.map((item, idx) => (
                                    <div key={idx} className="experience-card glass-card">
                                        <div className="exp-card-header">
                                            <div className="exp-role-info">
                                                <div className="exp-company-badge">
                                                    <Briefcase size={15} aria-hidden="true" />
                                                    <span>{item.company}</span>
                                                </div>
                                                <h3 className="exp-role">{item.role}</h3>
                                            </div>
                                            <div className="exp-meta">
                                                <span className="exp-period">
                                                    <Calendar size={14} aria-hidden="true" />
                                                    {item.period}
                                                </span>
                                                <span className="exp-location">
                                                    <MapPin size={14} aria-hidden="true" />
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="exp-description">{item.description}</p>

                                        <div className="exp-points">
                                            {item.points.map((point, pIdx) => (
                                                <div key={pIdx} className="exp-point-item">
                                                    <CheckCircle2 size={16} className="point-icon" aria-hidden="true" />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="exp-skills-group">
                                            {item.skills.map((skill, sIdx) => (
                                                <span key={sIdx} className="tech-tag">{skill}</span>
                                            ))}
                                        </div>

                                        {item.reference && (
                                            <div className="exp-reference-box">
                                                <div className="ref-icon">
                                                    <UserCheck size={18} aria-hidden="true" />
                                                </div>
                                                <div className="ref-details">
                                                    <span className="ref-title">{t.experience.refTitle || 'Professional Reference / Lead Dev'}</span>
                                                    <span className="ref-name">{item.reference.name}</span>
                                                    <span className="ref-role">{item.reference.role} — {item.reference.company}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                id="panel-education"
                                role="tabpanel"
                                aria-labelledby="tab-education"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="timeline-cards"
                            >
                                {t.experience.education.map((item, idx) => (
                                    <div key={idx} className="experience-card glass-card">
                                        <div className="exp-card-header">
                                            <div className="exp-role-info">
                                                <div className="exp-company-badge education">
                                                    <GraduationCap size={15} aria-hidden="true" />
                                                    <span>{item.institution}</span>
                                                </div>
                                                <h3 className="exp-role">{item.degree}</h3>
                                            </div>
                                            <div className="exp-meta">
                                                <span className="exp-period">
                                                    <Calendar size={14} aria-hidden="true" />
                                                    {item.period}
                                                </span>
                                                <span className="exp-location">
                                                    <MapPin size={14} aria-hidden="true" />
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="exp-description">{item.description}</p>

                                        {item.points && (
                                            <div className="exp-points">
                                                {item.points.map((point, pIdx) => (
                                                    <div key={pIdx} className="exp-point-item">
                                                        <CheckCircle2 size={16} className="point-icon" aria-hidden="true" />
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {item.skills && (
                                            <div className="exp-skills-group">
                                                {item.skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="tech-tag">{skill}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Experience;
