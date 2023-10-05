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
    return (
        <div className={clases.container}>
            <span className={clases.header}>
                <h1>{localize("interests")}</h1>
            </span>
            <div className={clases.cardContainer}>
                <h1
                    onClick={() => {
                        setIndex(index - 1);
                    }}
                >
                    {"<"}
                </h1>
                <SmallCard card={proxy[index % cards.length]} scale={0.9} />
                <BigCard card={proxy[(index + 1) % cards.length]} scale={1.1} />
                <SmallCard
                    card={proxy[(index + 2) % cards.length]}
                    scale={0.9}
                />
                <h1
                    onClick={() => {
                        setIndex(index + 1);
                    }}
                >
                    {">"}
                </h1>
            </div>
        </div>
    );
};
export default Interests;
