import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.body,
            width: "100%",
            "& h1": {
                backgroundImage: ({ color }) =>
                    `linear-gradient( to right, ${color.primary},${color.primary},${color.bodyR}, ${color.bodyR} )`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                marginTop: "2rem",
            },
            "& p": {
                color: ({ color }) => color.bodyR,
                textAlign: "center",
                lineHeight: "2rem",
                marginTop: "2rem",
                fontSize: 21,
                width: "60%",
            },
        },
        whoamiContainer: {
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            width: "100%",
        },
        more: {
            flexDirection: "row",
            marginTop: "2rem",
            display: "flex",
            width: "100%",
            height: 500,
            "& h2": {
                backgroundImage: ({ color }) =>
                    `linear-gradient( ${color.primary},${color.primary},${color.bodyR}, ${color.bodyR} )`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                marginLeft: "2rem",
                marginTop: "2rem",
            },
        },
        experience: {
            backgroundColor: ({ color }) => color.body1,
            flexDirection: "row",
            display: "flex",
            flex: 1,
        },
        educations: {
            backgroundColor: ({ color }) => color.body2,
            flexDirection: "row",
            display: "flex",
            flex: 1,
        },
        educationsContent: {
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            paddingTop: "0.5rem",
            gap: "1rem",
            flex: 1,
            "& span": {
                backgroundColor: ({ color }) => color.body1,
                color: ({ color }) => color.bodyR,
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "0.3rem",
                display: "flex",
                gap: "0.2rem",
                height: "20%",
                width: "90%",
            },
            "& h3,h5": {
                marginLeft: "1rem",
            },
        },
        experienceContent: {
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            paddingTop: "0.5rem",
            gap: "1rem",
            flex: 1,
            "& span": {
                backgroundColor: ({ color }) => color.body2,
                color: ({ color }) => color.bodyR,
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "0.3rem",
                display: "flex",
                gap: "0.2rem",
                height: "20%",
                width: "90%",
            },
            "& h3,h5": {
                marginLeft: "1rem",
            },
        },
        vertical: {
            writingMode: "vertical-lr",
        },
        horizantal: {
            writingMode: "horizontal-tb",
        },
    },
    { name: "Resume-Section" }
);
export default useStyles;
