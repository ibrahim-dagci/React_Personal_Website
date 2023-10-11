import { useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";

const Small = (props) => {
    const { colors } = useNCoreTheme();
    const clasess = useStyles({ color: colors, scale: props.scale });
    return (
        <div className={clasess.container}>
            <div className={clasess.content}>
                <div className={clasess.back}>
                    <h2>{props.card.title}</h2>
                    <span>
                        <p>{props.card.content}</p>
                    </span>
                    <button>daha fazla</button>
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
