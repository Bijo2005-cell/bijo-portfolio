/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Light Mode Palette
                background: '#ffffff',      // White
                foreground: '#1f2937',      // Gray 800

                primary: {
                    DEFAULT: '#2563eb',       // Blue 600
                    foreground: '#ffffff'
                },

                // Semantic Colors for Light Theme
                card: {
                    DEFAULT: '#f9fafb',       // Gray 50
                    foreground: '#1f2937'
                },
                popover: {
                    DEFAULT: '#ffffff',
                    foreground: '#1f2937'
                },
                secondary: {
                    DEFAULT: '#f3f4f6',       // Gray 100
                    foreground: '#1f2937'
                },
                muted: {
                    DEFAULT: '#f3f4f6',
                    foreground: '#6b7280'     // Gray 500
                },
                accent: {
                    DEFAULT: '#eff6ff',       // Blue 50
                    foreground: '#2563eb'     // Blue 600
                },
                destructive: {
                    DEFAULT: '#ef4444',
                    foreground: '#ffffff'
                },
                border: '#e5e7eb',          // Gray 200
                input: '#e5e7eb',
                ring: '#2563eb',

                // Legacy/Portfolio Mappings (Adjusted for Light Mode)
                'portfolio-black': '#ffffff',
                'portfolio-white': '#1f2937',
                'portfolio-dark-grey': '#e5e7eb',
                'portfolio-mid-grey': '#9ca3af',
                'portfolio-grey': '#4b5563',

                // Brand Colors
                'portfolio-dark-blue': '#1e40af',
                'portfolio-mid-blue': '#3b82f6',
                'portfolio-light-blue': '#93c5fd',
                'portfolio-mid-purple': '#2563eb', // Mapped to primary
                'portfolio-light-pink': '#60a5fa', // Mapped to secondary blue
                'portfolio-mid-green': '#059669',
                'portfolio-mid-orange': '#d97706',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            borderRadius: {
                lg: '0.5rem',
                md: 'calc(0.5rem - 2px)',
                sm: 'calc(0.5rem - 4px)',
                'pill': '9999px',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "float": "float 3s ease-in-out infinite",
                "fade-up": "fade-up 0.5s ease-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};