import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";
import { SmallCard } from "./cards";
import { CARDS } from "../../../../constants";
import { useState } from "react";
const cards = CARDS;
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
                <h1>{"<"}</h1>
                <SmallCard card={cards[index]} scale={0.9} />
                <SmallCard card={cards[index + 1]} scale={1.1} />
                <SmallCard card={cards[index + 2]} scale={0.9} />
                <h1>{">"}</h1>
            </div>
        </div>
    );
};
export default Interests;
