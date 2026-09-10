import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';
import SectionContainer from './SectionContainer';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: t.skills.categories.all, icon: Sparkles },
        { id: 'frontend', label: t.skills.categories.frontend, icon: Code2 },
        { id: 'backend', label: t.skills.categories.backend, icon: Server },
        { id: 'database', label: t.skills.categories.database, icon: Database },
        { id: 'tools', label: t.skills.categories.tools, icon: Wrench },
    ];

    const filteredSkills = activeFilter === 'all'
        ? t.skills.list
        : t.skills.list.filter(skill => skill.category === activeFilter);

    const getLevelClass = (level) => {
        const lvl = (level || '').toLowerCase();
        if (lvl.includes('avancé') || lvl.includes('advanced')) return 'level-advanced';
        return 'level-proficient';
    };

    return (
        <SectionContainer id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.skills.title}</h2>
                    <p className="section-subtitle">{t.skills.subtitle}</p>
                </div>

                {/* Category Filters */}
                <div className="skills-filter-wrapper">
                    <div className="skills-filter-bar" role="group" aria-label="Filtres des compétences">
                        {categories.map(cat => {
                            const Icon = cat.icon;
                            const isActive = activeFilter === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    className={`skill-filter-btn ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat.id)}
                                >
                                    <Icon size={14} aria-hidden="true" />
                                    <span>{cat.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterPill"
                                            className="filter-active-bg"
                                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="skills-grid">
                    <AnimatePresence mode="wait">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="skill-card"
                            >
                                <div className="skill-accent-line" aria-hidden="true"></div>
                                <div className="skill-top-row">
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <span className={`skill-level-badge ${getLevelClass(skill.level)}`}>
                                        {skill.level}
                                    </span>
                                </div>
                                <p className="skill-description">{skill.description}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Skills;
