export const clickEvent = () => {
    return {
        "&:hover": {
            userSelect: "none",
            cursor: "pointer",
            opacity: 0.75,
        },
        "&:active": {
            transform: "translateY(2px)",
            transition: "transform 0.1s",
            userSelect: "none",
        },
    };
};
