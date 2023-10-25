import { useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";

const Small = (props) => {
    const { colors } = useNCoreTheme();
    const clases = useStyles({
        color: colors,
        scale: props.scale,
        transition: props.transition,
    });
    return (
        <div className={clases.container}>
            <span className={clases.hoveredContent}>
                <h2>{props.card.title}</h2>
                <span>
                    <p>{props.card.content}</p>
                </span>
                <button>daha fazla</button>
            </span>
            <span className={clases.defaultContent}>
                <h2>{props.card.title}</h2>
                <img src={props.card.imgPath} />
            </span>
        </div>
    );
};
export default Small;
