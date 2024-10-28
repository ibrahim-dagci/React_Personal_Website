import useStyles from "./stylesheets";
import {
    TextInput,
    TextArea,
} from "../../../../components";
import {
    Button,
    useNCoreLocalization,
    useNCoreTheme,
} from "ncore-web";
import {
    useState 
} from "react";
import {
    InstagramIcon, 
    LinkedinIcon,
    GithubIcon, 
} from "../../../../assets/icon/svg";

const Contact = () => {
    const [nameSurname,setNameSurname] = useState();
    const [subject,setSubject] = useState();
    const [message,setMessage] = useState();
    const {
        colors 
    } = useNCoreTheme();

    const {
        localize 
    } = useNCoreLocalization();

    const classes = useStyles({
        color: colors 
    });

    return <div className={classes.container}>
        <span className={classes.header}>
            <h1>{localize("contact")}</h1>
        </span>
        <div className={classes.innerContainer}>
            <img 
                src="./assets/images/myself.jpeg"
                className={classes.img}
            />
            <div className={classes.contactContainer}>
                <div className={classes.formContainer}>
                    <TextInput 
                        placeholder={localize("contactNameAndSurname")} 
                        className={classes.input}
                        onChangeText={(text)=>{
                            setNameSurname(text);
                        }}
                    />
                    <TextInput 
                        placeholder={localize("contactSubject")}
                        className={classes.input}
                        onChangeText={(text)=>{
                            setSubject(text);
                    
                        }}
                    />
                    <TextArea 
                        placeholder={localize("contactMessage")}
                        className={classes.input}
                        onChangeText={(text)=>{
                            setMessage(text);
                        }}
                    />
                    <div className={classes.buttonContainer}>
                        <Button 
                            spreadBehaviour="strech"
                            title={localize("send")} 
                            variant="outline"
                        />
                    </div>
                    <div className={classes.socialMediaContainer}>
                        <a 
                            href="https://github.com/ibrahim-dagci" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <GithubIcon 
                                size={35}
                                color={colors.primary}
                            />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ibrahim-dagci"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <LinkedinIcon
                                size={35}
                                color={colors.primary}
                            />
                        </a>
                        <a 
                            href="https://www.instagram.com/ibrahim.dgci/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon
                                size={35}
                                color={colors.primary}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Contact;
