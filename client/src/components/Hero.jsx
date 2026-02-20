import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        title: "FullStack",
        subtitle: "Developer",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        accent: "text-blue-300"
    },
    {
        id: 2,
        title: "Freelancer",
        subtitle: "",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
        accent: "text-indigo-300"
    },
    {
        id: 3,
        title: "Visual",
        subtitle: "Storytelling",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2535&auto=format&fit=crop",
        accent: "text-sky-300"
    }
];

const Hero = () => {
    return (
        <section className="h-screen w-full relative bg-foreground text-white overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        {/* Background Image with Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 z-0">
                            <motion.img
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10, ease: "linear" }}
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                            <div className="max-w-4xl">
                                <div className="mb-2">
                                    <motion.h1
                                        className="text-display-giant leading-[0.85] tracking-tighter"
                                    >
                                        <div className="reveal-text">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                whileInView={{ y: 0 }}
                                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                                className="block text-white"
                                            >
                                                {slide.title}
                                            </motion.span>
                                        </div>
                                        <div className="reveal-text">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                whileInView={{ y: 0 }}
                                                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                className={`block ${slide.accent}`}
                                            >
                                                {slide.subtitle}
                                            </motion.span>
                                        </div>
                                    </motion.h1>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="flex items-center gap-6 mt-12"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] border border-white/20 px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/5">
                                        Creative Developer
                                    </span>
                                    <div className="h-[1px] w-16 bg-white/20" />
                                    <p className="text-xl font-light text-gray-300 italic">
                                        2025 Edition
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="mt-16"
                                >
                                    <a
                                        href="#work"
                                        className="group inline-flex items-center gap-6 text-xs font-mono uppercase tracking-[0.3em] hover:text-primary transition-all duration-500 cursor-none"
                                        data-cursor-text="Explore"
                                    >
                                        Scroll to discover
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="p-4 border border-white/20 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 bg-white/5 backdrop-blur-sm"
                                        >
                                            <ArrowRight size={18} />
                                        </motion.span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-6 right-6 z-20 flex justify-between items-end font-mono text-xs text-white/60 uppercase tracking-widest mix-blend-plus-lighter">
                <div></div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Scroll for more
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
