export const clickEvent = () => {
    return {
        "&:hover": {
            userSelect: "none",
            cursor: "pointer",
            opacity: 0.7,
        },
        "&:active": {
            transform: "translateY(2px)",
            transition: "transform0.1s",
            userSelect: "none",
        },
    };
};
