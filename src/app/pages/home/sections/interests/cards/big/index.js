import useStyles from "./stylesheets";
import {
    useNCoreLocalization, 
    useNCoreTheme,
} from "ncore-web";

const Small = (props) => {
    const {
        colors 
    } = useNCoreTheme();
    const {
        localize 
    } = useNCoreLocalization();
    const clasess = useStyles({
        transition: props.transition,
        transform: props.transform,
        position: props.position,
        color: colors,
        scale: props.scale,
    });
    return (
        <div className={clasess.container}>
            <div className={clasess.content}>
                <div className={clasess.back}>
                    <h2>{props.card.title}</h2>
                    <span>
                        <p>{localize(props.card.content)}</p>
                    </span>
                    <button>{localize("more")}</button>
                </div>
                <div className={clasess.front}>
                    <h2>{props.card.title}</h2>
                    <img src={props.card.imgPath} />
                </div>
            </div>
        </div>
    );
};
export default Small;
