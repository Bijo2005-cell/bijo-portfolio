import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';
import { fetchSkills } from '../api';

const iconMap = {
    "Frontend": <Layout size={28} />,
    "Backend": <Database size={28} />,
    "Database": <Cpu size={28} />,
    "AI & Tools": <Terminal size={28} />
};

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const data = await fetchSkills();
                setSkills(data);
            } catch (error) {
                console.error("Failed to fetch skills:", error);
            }
        };
        loadSkills();
    }, []);

    return (
        <section id="skills" className="py-32 bg-secondary/20 text-foreground relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Expertise</span>
                    <h2 className="text-display-large text-foreground mb-8">Technical<br />Arsenal</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl border border-white/20 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm"
                            >
                                {iconMap[skillGroup.category] || <Code2 size={28} />}
                            </motion.div>

                            <h3 className="text-xl font-display font-bold mb-8 text-foreground tracking-tight">{skillGroup.category}</h3>

                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map((item, i) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.1) + (i * 0.05) }}
                                        className="px-4 py-2 text-[11px] font-mono text-foreground/60 bg-secondary/50 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white hover:text-primary transition-all cursor-none"
                                        data-cursor-text={item}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
