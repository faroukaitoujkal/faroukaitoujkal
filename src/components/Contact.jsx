import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Copy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionContainer from './SectionContainer';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();

    const [formState, setFormState] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        errors: {}
    });

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(t.contact.emailValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (status.errors[name]) {
            setStatus(prev => ({
                ...prev,
                errors: { ...prev.errors, [name]: '' }
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formState.user_name.trim()) newErrors.user_name = 'Required';
        if (!formState.user_email.trim()) {
            newErrors.user_email = 'Required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.user_email)) {
            newErrors.user_email = 'Invalid email address';
        }
        if (!formState.message.trim()) newErrors.message = 'Required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setStatus(prev => ({ ...prev, errors: validationErrors }));
            return;
        }

        setStatus({ submitting: true, success: false, error: false, errors: {} });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_skvpcol';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fcgiooq';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'vpEpCsMKoOP9UMxjo';

            await emailjs.sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            });

            setStatus({ submitting: false, success: true, error: false, errors: {} });
            setFormState({ user_name: '', user_email: '', subject: '', message: '' });

            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.error('Email send error:', error);
            setStatus({ submitting: false, success: false, error: true, errors: {} });
        }
    };

    return (
        <SectionContainer id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p className="section-subtitle">{t.contact.subtitle}</p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Info Column */}
                    <motion.div
                        className="contact-info-col"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="contact-message-text">{t.contact.message}</h3>
                        <p className="contact-info-desc">{t.contact.infoDescription}</p>

                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <MapPin size={22} aria-hidden="true" />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">{t.contact.locationLabel}</span>
                                    <span className="contact-detail-value">{t.contact.locationValue}</span>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Phone size={22} aria-hidden="true" />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">{t.contact.phoneLabel}</span>
                                    <span className="contact-detail-value">{t.contact.phoneValue}</span>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Mail size={22} aria-hidden="true" />
                                </div>
                                <div className="contact-detail-content">
                                    <span className="contact-detail-label">{t.contact.emailLabel}</span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="contact-email-btn"
                                        aria-label="Copier l'adresse email"
                                    >
                                        <span>{t.contact.emailValue}</span>
                                        <Copy size={16} aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="contact-form-col"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="contact-form" noValidate>
                            <div className="form-group">
                                <label htmlFor="user_name" className="form-label">{t.contact.form.name}</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    value={formState.user_name}
                                    onChange={handleChange}
                                    className={`form-input ${status.errors.user_name ? 'error' : ''}`}
                                    placeholder={t.contact.form.placeholders.name}
                                    aria-invalid={status.errors.user_name ? 'true' : 'false'}
                                />
                                {status.errors.user_name && <span className="form-error-msg">{status.errors.user_name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email" className="form-label">{t.contact.form.email}</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formState.user_email}
                                    onChange={handleChange}
                                    className={`form-input ${status.errors.user_email ? 'error' : ''}`}
                                    placeholder={t.contact.form.placeholders.email}
                                    aria-invalid={status.errors.user_email ? 'true' : 'false'}
                                />
                                {status.errors.user_email && <span className="form-error-msg">{status.errors.user_email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">{t.contact.form.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder={t.contact.form.placeholders.subject}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">{t.contact.form.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className={`form-input form-textarea ${status.errors.message ? 'error' : ''}`}
                                    placeholder={t.contact.form.placeholders.message}
                                    aria-invalid={status.errors.message ? 'true' : 'false'}
                                />
                                {status.errors.message && <span className="form-error-msg">{status.errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={status.submitting}
                            >
                                {status.submitting ? (
                                    <span>{t.contact.form.sending}</span>
                                ) : (
                                    <>
                                        <span>{t.contact.form.send}</span>
                                        <Send size={18} aria-hidden="true" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status.success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="form-status-msg success"
                                    >
                                        <CheckCircle2 size={20} aria-hidden="true" />
                                        <span>{t.contact.form.success}</span>
                                    </motion.div>
                                )}

                                {status.error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="form-status-msg error"
                                    >
                                        <AlertCircle size={20} aria-hidden="true" />
                                        <span>{t.contact.form.error}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Copy Toast Indicator */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="copy-toast"
                        role="alert"
                    >
                        {t.contact.copied}
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionContainer>
    );
};

export default Contact;
