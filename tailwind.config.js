module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Jost: ["Jost", "sans-serif"],
                Miligram: ["Miligram", "sans-serif"],
                JetBrains: ["JetBrains Mono", "monospace"],
            },
            colors: {
                blue: "#0AA7FF",
                "light-blue": "#2EE7E7",
                "dark-blue": "#7CC9FF41",
                dark: "#181818",
                "light-dark": "#1C2C35",
                header: "#1C2A34",
                white: "#F3F1EF",
            },
            dropShadow: {
                custom: "0 0 76px rgba(188, 251, 195, 0.30)",
            },
        },
    },
    plugins: [],
};