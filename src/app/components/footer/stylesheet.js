import {
    createUseStyles 
} from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            justifyContent:"space-between",
            backgroundColor: ({
                color
            }) => color.footer,
            fontSize:"0.8rem",
            padding:"0.9rem",
            display:"flex",
            color:"#e9e9e9",
        }
    },
    {
        name: "Footer-Component",
    }
);

export default useStyle;