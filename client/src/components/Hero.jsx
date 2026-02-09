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
                                <div className="overflow-hidden mb-2">
                                    <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="text-display-giant leading-[0.85] tracking-tighter"
                                    >
                                        <span className="block text-white">{slide.title}</span>
                                        <span className={`block ${slide.accent}`}>{slide.subtitle}</span>
                                    </motion.h1>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4 mt-8"
                                >
                                    <span className="font-mono text-sm uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">
                                        Portfolio 2025
                                    </span>
                                    <div className="h-[1px] w-24 bg-white/30" />
                                    <p className="text-xl font-light text-gray-200 max-w-md">
                                        Building the future of digital interaction through code and design.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-12"
                                >
                                    <a href="#work" className="group inline-flex items-center gap-3 text-lg font-mono uppercase tracking-widest hover:text-primary transition-colors">
                                        View Projects
                                        <span className="p-3 border border-white/30 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={20} />
                                        </span>
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
