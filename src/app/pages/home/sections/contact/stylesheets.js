import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../../../themes/helpers";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({
                color 
            }) => color.body,
            width: "100%",
        },
        header:{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& h1": {
                backgroundImage: ({
                    color 
                }) =>
                    `linear-gradient( to right, ${color.primary},${color.primary},${color.bodyR}, ${color.bodyR} )`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                marginTop:"14rem"
            },
        },
        innerContainer:{
            backgroundColor: ({
                color 
            }) => color.body,
            flexDirection:"row",
            alignItems:"center",
            padding:"8rem",
            display:"flex",
            gap:"5rem",
            "@media (max-width: 1200px)": {
                padding: "4rem",
            },
            "@media (max-width: 1010px)": {
                padding: "2rem",
            },
            "@media (max-width: 950px)": {
                flexDirection: "column",
                gap:"2rem"
            }
        },
        img:{
            borderRadius:"1.5rem",
            height:"25rem",
            width:"25rem",
        },
        contactContainer:{
            flexDirection:"column",
            display:"flex",
            padding:"1rem",
            flex:1,
            "@media (max-width: 950px)": {
                width:"80%",
            },
            "@media (max-width: 550px)": {
                width:"100%",
            }
        },
        formContainer:{
            flexDirection:"column",
            display:"flex",
            gap:"1rem",
            flex:1,
        },
        buttonContainer:{
            flexDirection:"column",
            alignItems:"center",
            display:"flex",
            width:"100%"
        },
        socialMediaContainer:{
            display:"flex",
            padding:"1rem",
            justifyContent:"flex-start",
            gap:"2rem",
            "& a":{
                ...clickEvent()
            },
            "@media (max-width: 500px)": {
                WebkitJustifyContent:"space-evenly",
            }
        },
    },
    {
        name: "Contact"
    }
);
export default useStyles;
