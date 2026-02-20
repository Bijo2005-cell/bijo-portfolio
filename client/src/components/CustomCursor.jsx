import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHover = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, .cursor-pointer, .btn-pill');
            setIsHovering(!!isClickable);

            const cursorEl = target.closest('[data-cursor-text]');
            if (cursorEl?.dataset?.cursorText) {
                setCursorText(cursorEl.dataset.cursorText);
            } else {
                setCursorText("");
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-primary rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? "rgba(37, 99, 235, 0.1)" : "transparent",
                }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
                {cursorText && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-primary uppercase whitespace-nowrap">
                        {cursorText}
                    </span>
                )}
            </motion.div>
        </>
    );
};

export default CustomCursor;
