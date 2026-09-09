import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolitiqueConfidentialite = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Navbar />
            <main className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="legal-content-card glass-card">
                    <div className="legal-content">
                        <h1>{t.privacyPage.title}</h1>
                        {t.privacyPage.sections.map((section, index) => (
                            <section key={index}>
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
