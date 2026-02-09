import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { fetchProfile } from '../api';
import face2 from '../image/face2.jpeg';

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
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="w-full md:w-3/5">
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
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
