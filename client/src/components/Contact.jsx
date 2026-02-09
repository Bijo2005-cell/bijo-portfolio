import React, { useState } from 'react';
import { Send, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = () => {
        setStatus('submitting');
    };

    const handleIframeLoad = () => {
        if (status === 'submitting') {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="py-32 bg-white text-foreground">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
                        <h2 className="text-display-large mb-8 text-foreground">Let's work<br />together.</h2>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono uppercase text-muted-foreground mb-1">LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/bijo-k-binoy-677098297"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-display hover:text-primary transition-colors block break-all"
                                    >
                                        www.linkedin.com/in/bijo-k-binoy-677098297
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono uppercase text-muted-foreground mb-1">GitHub</h4>
                                    <a
                                        href="https://github.com/Bijo2005-cell"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-display hover:text-primary transition-colors"
                                    >
                                        github.com/Bijo2005-cell
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <Mail size={24} />
                                </div>

                                <div>
                                    <h4 className="text-sm font-mono uppercase text-muted-foreground mb-1">Email</h4>
                                    <a href="mailto:bijokbinoy2005@gmail.com" className="text-2xl font-display font-bold hover:text-primary transition-colors">bijokbinoy2005@gmail.com</a>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-mono uppercase text-muted-foreground mb-1">Location</h4>
                                    <p className="text-xl font-display">Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-10 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100"
                    >
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd4HnmD4tQ2NV27cQrV7dsaSKjt_Z_YgnmbUS09D_wiFWgbKA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono uppercase mb-2 text-muted-foreground font-bold">Name</label>
                                <input
                                    type="text"
                                    name="entry.1076311181"
                                    id="name"
                                    required
                                    placeholder=""
                                    className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-300"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-mono uppercase mb-2 text-muted-foreground font-bold">Email</label>
                                <input
                                    type="email"
                                    name="entry.264854344"
                                    id="email"
                                    required
                                    placeholder=""
                                    className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-300"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-mono uppercase mb-2 text-muted-foreground font-bold">Message</label>
                                <textarea
                                    name="entry.1112892872"
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-300 resize-none"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full btn-pill bg-primary text-white hover:bg-blue-700 border-transparent shadow-lg shadow-blue-500/30 flex justify-center gap-2 py-4 text-sm"
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
