import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
<<<<<<< HEAD
import { User, MapPin, Mail, ArrowUpRight, Download } from 'lucide-react';
import { fetchProfile } from '../api';
import profileImg from '../image/1000029285-01.jpeg';
import resume from '../image/resume_bijo_k_binoy (2).pdf';
=======
import { User, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { fetchProfile } from '../api';
import face2 from '../image/face2.jpeg';
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d

const About = () => {
    const [profile, setProfile] = useState(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchProfile();
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };
        loadProfile();
    }, []);

    if (!profile) return null;

    return (
        <section id="about" className="py-32 bg-background text-foreground relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
<<<<<<< HEAD
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-20 items-center">

                        {/* Image Column */}
                        <motion.div
                            className="w-full md:w-2/5"
                            whileHover={{ rotateY: 5, rotateX: -5 }}
                            style={{ perspective: 1000 }}
                        >
                            <div className="relative group cursor-none" data-cursor-text="Bijo">
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative shadow-2xl border border-white/10">
                                    <img
                                        src={profileImg}
                                        alt={profile.name}
                                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
=======
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-16 items-center">

                        {/* Image Column */}
                        <motion.div
                            style={{ y }}
                            className="w-full md:w-2/5"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative shadow-2xl">
                                    <img
                                        src={face2}
                                        alt={profile.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="w-full md:w-3/5">
<<<<<<< HEAD
                            <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">About Me</span>

                            <div className="mb-10">
                                <h2 className="text-display-large mb-2 text-foreground">
                                    <div className="reveal-text">
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            {profile.name}
                                        </motion.span>
                                    </div>
                                </h2>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-primary font-mono mb-10"
                            >
                                {profile.title}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-muted-foreground text-lg leading-relaxed mb-12 border-l-2 border-primary/30 pl-8"
                            >
                                {profile.bio}
                            </motion.p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-5 text-foreground/70 p-5 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all group"
                                >
                                    <div className="p-4 bg-white rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin size={22} />
                                    </div>
                                    <span className="font-medium tracking-tight">{profile.location}</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-5 text-foreground/70 p-5 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all group cursor-none"
                                    data-cursor-text="Mail"
                                >
                                    <div className="p-4 bg-white rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail size={22} />
                                    </div>
                                    <a href={`mailto:${profile.email}`} className="font-medium hover:text-primary transition-colors flex items-center gap-2">
                                        Contact Me <ArrowUpRight size={16} />
                                    </a>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-14"
                            >
                                <a
                                    href={resume}
                                    download="Bijo_K_Binoy_Resume.pdf"
                                    className="btn-pill bg-primary text-white hover:bg-black inline-flex items-center gap-4 shadow-2xl shadow-primary/20 transition-all duration-500 py-4 px-8"
                                    data-cursor-text="Download"
                                >
                                    <Download size={20} />
                                    Get Resume
                                </a>
                            </motion.div>
=======
                            <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">About Me</span>
                            <h2 className="text-display-large mb-6 text-foreground">Who I Am</h2>

                            <h3 className="text-3xl font-display font-bold mb-4 text-foreground/80">{profile.name}</h3>
                            <p className="text-xl text-primary font-mono mb-8">{profile.title}</p>

                            <p className="text-muted-foreground text-lg leading-relaxed mb-10 border-l-4 border-primary/20 pl-6">
                                {profile.bio}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-foreground/70 p-4 rounded-xl bg-secondary/50">
                                    <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-medium">{profile.location}</span>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-foreground/70 p-4 rounded-xl bg-secondary/50">
                                    <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <a href={`mailto:${profile.email}`} className="font-medium hover:text-primary transition-colors flex items-center gap-2">
                                        {profile.email} <ArrowUpRight size={14} />
                                    </a>
                                </motion.div>
                            </div>
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
