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
        <section id="contact" className="py-32 bg-white text-foreground relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Get In Touch</span>
                        <h2 className="text-display-large mb-12 text-foreground">
                            <div className="reveal-text">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >Let's work</motion.span>
                            </div>
                            <br />
                            <div className="reveal-text">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >together.</motion.span>
                            </div>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-md">
                            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
                        </p>

                        <div className="space-y-10">
                            {[
                                { icon: Linkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/bijo-k-binoy-677098297', href: 'https://www.linkedin.com/in/bijo-k-binoy-677098297', cursor: 'LinkedIn' },
                                { icon: Github, label: 'GitHub', value: 'github.com/Bijo2005-cell', href: 'https://github.com/Bijo2005-cell', cursor: 'GitHub' },
                                { icon: Mail, label: 'Email', value: 'bijokbinoy2005@gmail.com', href: 'mailto:bijokbinoy2005@gmail.com', cursor: 'Email' },
                                { icon: MapPin, label: 'Location', value: 'Kerala, India', cursor: 'Kerala' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-6 group cursor-none"
                                    data-cursor-text={item.cursor}
                                >
                                    <div className="p-4 bg-secondary/50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-mono uppercase text-muted-foreground mb-1 tracking-widest font-bold">{item.label}</h4>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xl font-display font-medium hover:text-primary transition-colors block break-all"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-xl font-display font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/40 border border-white/40"
                    >
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd4HnmD4tQ2NV27cQrV7dsaSKjt_Z_YgnmbUS09D_wiFWgbKA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            {['Name', 'Email', 'Message'].map((field, index) => (
                                <div key={field}>
                                    <label htmlFor={field.toLowerCase()} className="block text-[10px] font-mono uppercase mb-3 text-muted-foreground font-bold tracking-widest">{field}</label>
                                    {field === 'Message' ? (
                                        <textarea
                                            name="entry.1112892872"
                                            id="message"
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            className="w-full bg-secondary/30 border-2 border-transparent rounded-2xl px-6 py-5 text-foreground focus:outline-none focus:border-primary/30 focus:bg-white transition-all placeholder:text-gray-400 resize-none cursor-none"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            data-cursor-text="Type"
                                        />
                                    ) : (
                                        <input
                                            type={field === 'Email' ? 'email' : 'text'}
                                            name={field === 'Name' ? 'entry.1076311181' : 'entry.264854344'}
                                            id={field.toLowerCase()}
                                            required
                                            className="w-full bg-secondary/30 border-2 border-transparent rounded-2xl px-6 py-5 text-foreground focus:outline-none focus:border-primary/30 focus:bg-white transition-all placeholder:text-gray-400 cursor-none"
                                            value={field === 'Name' ? formState.name : formState.email}
                                            onChange={(e) => setFormState({ ...formState, [field.toLowerCase()]: e.target.value })}
                                            data-cursor-text="Write"
                                        />
                                    )}
                                </div>
                            ))}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full btn-pill bg-primary text-white hover:bg-black border-transparent shadow-2xl shadow-primary/20 flex justify-center items-center gap-3 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-500 cursor-none"
                                data-cursor-text="Send"
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>Send Message <Send size={20} /></>
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
