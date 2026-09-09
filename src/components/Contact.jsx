import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Github, Linkedin, Send, Phone, MapPin, Copy, Check, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionContainer from './SectionContainer';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();
    const [status, setStatus] = useState('');
    const [copiedItem, setCopiedItem] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = 'service_skvpcol';
        const TEMPLATE_ID = 'template_fcgiooq';
        const PUBLIC_KEY = 'vpEpCsMKoOP9UMxjo';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                if (form.current) form.current.reset();
                setTimeout(() => setStatus(''), 6000);
            }, () => {
                setStatus('error');
                setTimeout(() => setStatus(''), 6000);
            });
    };

    return (
        <SectionContainer id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p className="section-subtitle">{t.contact.subtitle}</p>
                    <div className="section-divider" aria-hidden="true"></div>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Direct Info & Social Cards */}
                    <div className="contact-info-col">
                        <div className="contact-intro-card glass-card">
                            <h3>{t.contact.message}</h3>
                            <p>{t.contact.infoDescription}</p>

                            {/* Direct Contact Items with One-Click Copy */}
                            <div className="direct-contact-items">
                                {/* Email */}
                                <div className="direct-contact-card">
                                    <div className="direct-icon-box" aria-hidden="true">
                                        <Mail size={19} />
                                    </div>
                                    <div className="direct-text">
                                        <span className="direct-label">{t.contact.emailLabel}</span>
                                        <a
                                            href={`mailto:${t.contact.emailValue}`}
                                            className="direct-val"
                                            title="Envoyer un email"
                                        >
                                            {t.contact.emailValue}
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className={`copy-btn ${copiedItem === 'email' ? 'copied' : ''}`}
                                        onClick={() => handleCopy(t.contact.emailValue, 'email')}
                                        aria-label={copiedItem === 'email' ? t.contact.copied : "Copier l'adresse email"}
                                        title={copiedItem === 'email' ? t.contact.copied : "Copier"}
                                    >
                                        {copiedItem === 'email' ? (
                                            <span className="copied-wrapper">
                                                <Check size={15} className="copied-icon" />
                                                <span className="copied-text">{t.contact.copied}</span>
                                            </span>
                                        ) : (
                                            <Copy size={15} />
                                        )}
                                    </button>
                                </div>

                                {/* Phone */}
                                <div className="direct-contact-card">
                                    <div className="direct-icon-box" aria-hidden="true">
                                        <Phone size={19} />
                                    </div>
                                    <div className="direct-text">
                                        <span className="direct-label">{t.contact.phoneLabel}</span>
                                        <a
                                            href={`tel:${t.contact.phoneValue.replace(/\s+/g, '')}`}
                                            className="direct-val"
                                            title="Appeler"
                                        >
                                            {t.contact.phoneValue}
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className={`copy-btn ${copiedItem === 'phone' ? 'copied' : ''}`}
                                        onClick={() => handleCopy(t.contact.phoneValue, 'phone')}
                                        aria-label={copiedItem === 'phone' ? t.contact.copied : "Copier le numéro de téléphone"}
                                        title={copiedItem === 'phone' ? t.contact.copied : "Copier"}
                                    >
                                        {copiedItem === 'phone' ? (
                                            <span className="copied-wrapper">
                                                <Check size={15} className="copied-icon" />
                                                <span className="copied-text">{t.contact.copied}</span>
                                            </span>
                                        ) : (
                                            <Copy size={15} />
                                        )}
                                    </button>
                                </div>

                                {/* Location */}
                                <div className="direct-contact-card">
                                    <div className="direct-icon-box" aria-hidden="true">
                                        <MapPin size={19} />
                                    </div>
                                    <div className="direct-text">
                                        <span className="direct-label">{t.contact.locationLabel}</span>
                                        <span className="direct-val">{t.contact.locationValue}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="contact-socials-group">
                                <a
                                    href="https://www.linkedin.com/in/farouk-aitoujkal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn linkedin"
                                    title="Profil LinkedIn"
                                    aria-label="Profil LinkedIn d'Ait Oujkal Farouk"
                                >
                                    <Linkedin size={18} aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/faroukaitoujkal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn github"
                                    title="Profil GitHub"
                                    aria-label="Profil GitHub d'Ait Oujkal Farouk"
                                >
                                    <Github size={18} aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-col">
                        <div className="contact-form-card glass-card">
                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="user_name">{t.contact.form.name}</label>
                                    <input
                                        id="user_name"
                                        type="text"
                                        name="user_name"
                                        required
                                        autoComplete="name"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_email">{t.contact.form.email}</label>
                                    <input
                                        id="user_email"
                                        type="email"
                                        name="user_email"
                                        required
                                        autoComplete="email"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">{t.contact.form.subject}</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t.contact.form.message}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="form-input"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary submit-btn ${status}`}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 size={17} className="spinner" aria-hidden="true" />
                                            <span>{t.contact.form.sending}</span>
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle2 size={18} aria-hidden="true" />
                                            <span>{t.contact.form.success}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t.contact.form.send}</span>
                                            <Send size={16} aria-hidden="true" />
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="error-msg" role="alert">{t.contact.form.error}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
