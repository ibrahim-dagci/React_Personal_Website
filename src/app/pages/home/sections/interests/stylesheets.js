import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.body,
            width: "100%",
            height: 800,
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& h1": {
                backgroundImage: ({ color }) =>
                    `linear-gradient( to right, ${color.primary},${color.primary},${color.bodyR}, ${color.bodyR} )`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                marginTop: "2rem",
            },
        },
        cardContainer: {
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "3rem",
            display: "flex",
            gap: "2.5rem",
            "& h1": {
                color: ({ color }) => color.bodyR,
                fontSize: "3rem",
            },
            "@media (max-width: 1150px)": {
                gap: "2.4rem",
            },
            "@media (max-width: 1100px)": {
                gap: "5rem",
            },
            "@media (max-width: 500px)": {
                gap: "3rem",
            },
        },
    },
    { name: "Interests-Section" }
);
export default useStyles;
