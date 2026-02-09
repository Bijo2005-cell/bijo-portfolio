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
        <section id="skills" className="py-32 bg-secondary/20 text-foreground">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">Expertise</span>
                    <h2 className="text-display-large text-foreground mb-6">Technical<br />Arsenal</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {iconMap[skillGroup.category] || <Code2 size={28} />}
                            </div>

                            <h3 className="text-xl font-display font-bold mb-6 text-foreground">{skillGroup.category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        className="px-3 py-1.5 text-sm font-mono text-foreground/70 bg-secondary rounded-lg border border-transparent hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
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
