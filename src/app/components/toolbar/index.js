import useStyle from "./stylesheets";
import {
    useState ,
    useEffect
} from "react";
import {
    useNCoreTheme 
} from "ncore-web";

const Toolbar = () => {
    const [isToolbarHidden, setIsToolbarHidden] = useState(false);
    const {
        colors 
    } = useNCoreTheme();
    const classes = useStyle({
        color: colors 
    });
  
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        setIsToolbarHidden(scrollTop + windowHeight >= documentHeight - 30);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${classes.container} ${isToolbarHidden ? classes.toolbarHidden : ''}`}>
            <div className={classes.aboutContentContainer}>
                <img src="./assets/icons/information.png" />
            </div>
            <div className={classes.homeContentContainer}>
                <img src="./assets/icons/home.png" />
            </div>
            <div className={classes.contactContentContainer}>
                <img src="./assets/icons/contact.png" />
            </div>
        </div>
    );
};
export default Toolbar;
