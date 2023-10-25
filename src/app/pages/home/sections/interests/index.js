import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";
import { SmallCard, BigCard } from "./cards";
import { CARDS } from "../../../../constants";
import { useState } from "react";
const cards = CARDS;
const proxy = new Proxy(cards, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    },
});
const Interests = () => {
    const { colors } = useNCoreTheme();
    const { localize } = useNCoreLocalization();
    const clases = useStyles({ color: colors });
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(0.5);
    const [scaleLeft, setScaleLeft] = useState(0.9);
    const [scaleRight, setScaleRight] = useState(0.9);
    const [scaleMid, setScaleMid] = useState(1.1);
    return (
        <div className={clases.container}>
            <span className={clases.header}>
                <h1>{localize("interests")}</h1>
            </span>
            <div className={clases.cardContainer}>
                <h1
                    onClick={() => {
                        setIndex(index - 1);
                        setScaleMid(0.9);
                        setScaleLeft(1.1);
                        setScaleRight(0.9);
                        setTimeout(() => {
                            setScaleMid(1.1);
                            setScaleRight(0.9);
                            setScaleLeft(0.9);
                        }, 500);
                    }}
                >
                    {"<"}
                </h1>
                <SmallCard
                    card={proxy[index % cards.length]}
                    scale={scaleLeft}
                    transition={null}
                />
                <BigCard
                    card={proxy[(index + 1) % cards.length]}
                    scale={scaleMid}
                    transition={null}
                />
                <SmallCard
                    card={proxy[(index + 2) % cards.length]}
                    scale={scaleRight}
                    transition={null}
                />
                <h1
                    onClick={() => {
                        setScaleMid(0.9);
                        setScaleLeft(0.9);
                        setScaleRight(1.1);
                        setTimeout(() => {
                            setIndex(index + 1);
                            setScaleMid(1.1);
                            setScaleRight(0.9);
                            setScaleLeft(0.9);
                        }, 400);
                    }}
                >
                    {">"}
                </h1>
            </div>
        </div>
    );
};
export default Interests;
