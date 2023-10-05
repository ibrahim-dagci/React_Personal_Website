import { useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";

const Small = (props) => {
    const { colors } = useNCoreTheme();
    const clasess = useStyles({ color: colors, scale: props.scale });
    return (
        <div className={clasess.container}>
            <div className={clasess.content}>
                <span className={clasess.back}>
                    <h2>{props.card.title}</h2>
                    <span>
                        <p>{props.card.content}</p>
                    </span>
                    <button>daha fazla</button>
                </span>
                <span className={clasess.front}>
                    <h2>{props.card.title}</h2>
                    <img src={props.card.imgPath} />
                </span>
            </div>
        </div>
    );
};
export default Small;
