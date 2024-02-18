import { useNCoreTheme, useNCoreLocalization } from "ncore-web";
import useStyles from "./stylesheets";

const Small = (props) => {
    const { colors } = useNCoreTheme();
    const { localize } = useNCoreLocalization();
    const clases = useStyles({
        transition: props.transition,
        transform: props.transform,
        position: props.position,
        scale: props.scale,
        right: props.right,
        left: props.left,
        color: colors,
    });
    return (
        <div className={clases.container}>
            <span className={clases.hoveredContent}>
                <h2>{props.card.title}</h2>
                <span>
                    <p>{localize(props.card.content)}</p>
                </span>
                <button>{localize("more")}</button>
            </span>
            <span className={clases.defaultContent}>
                <h2>{props.card.title}</h2>
                <img src={props.card.imgPath} />
            </span>
        </div>
    );
};
export default Small;
