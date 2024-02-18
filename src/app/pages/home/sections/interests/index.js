import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";
import { SmallCard, BigCard } from "./cards";
import { CARDS } from "../../../../constants";
import { useState, useEffect } from "react";
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
    const [transition, setTransition] = useState("all 0.5s");
    const [scaleLeft, setScaleLeft] = useState(0.9);
    const [scaleRight, setScaleRight] = useState(0.9);
    const [scaleMid, setScaleMid] = useState(1.1);
    const [transform1, setTransform1] = useState("transformX(0rem)");
    const [transform2, setTransform2] = useState("transformX(0rem)");
    const [transform3, setTransform3] = useState("transformX(0rem)");
    const [transform4, setTransform4] = useState("transformX(0rem)");
    const [transform5, setTransform5] = useState("transformX(0rem)");
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={clases.container}>
            <span className={clases.header}>
                <h1>{localize("interests")}</h1>
            </span>
            <div className={clases.innerContainer}>
                <h1
                    onClick={() => {
                        if (windowSize.width > 1100) {
                            setTransition("all 0.5s");
                            setTransform1("translateX(20.8rem)");
                            setTransform2("translateX(19.3rem)");
                            setTransform3("translateX(23.6rem)");
                            setTransform4("translateX(20.8rem)");
                            setScaleLeft(1.1);
                            setScaleMid(0.9);
                            setTimeout(() => {
                                setTransition("all 0s");
                                setTransform1("translateX(0rem)");
                                setTransform2("translateX(0rem)");
                                setTransform3("translateX(0rem)");
                                setTransform4("translateX(0rem)");
                                setIndex(index - 1);
                                setScaleMid(1.1);
                                setScaleLeft(0.9);
                            }, 500);
                        } else setIndex(index - 1);
                    }}
                >
                    {"<"}
                </h1>
                <div className={clases.cardContainer}>
                    <SmallCard
                        card={proxy[(index - 1) % cards.length]}
                        scale={0.9}
                        transition={transition}
                        position={"absolute"}
                        right={"100%"}
                        transform={transform1}
                    />
                    <SmallCard
                        card={proxy[index % cards.length]}
                        scale={scaleLeft}
                        transition={transition}
                        transform={transform2}
                    />
                    <BigCard
                        card={proxy[(index + 1) % cards.length]}
                        scale={scaleMid}
                        transition={transition}
                        transform={transform3}
                    />
                    <SmallCard
                        card={proxy[(index + 2) % cards.length]}
                        scale={scaleRight}
                        transition={transition}
                        transform={transform4}
                    />
                    <SmallCard
                        card={proxy[(index + 3) % cards.length]}
                        scale={0.9}
                        transition={transition}
                        position={"absolute"}
                        left={"100%"}
                        transform={transform5}
                    />
                </div>
                <h1
                    onClick={() => {
                        if (windowSize.width > 1100) {
                            setTransition("all 0.5s");
                            setTransform5("translateX(-20.8rem)");
                            setTransform4("translateX(-19.3rem)");
                            setTransform3("translateX(-23.6rem)");
                            setTransform2("translateX(-20.8rem)");
                            setScaleRight(1.1);
                            setScaleMid(0.9);
                            setTimeout(() => {
                                setTransition("all 0s");
                                setIndex(index + 1);
                                setTransform5("translateX(0rem)");
                                setTransform4("translateX(0rem)");
                                setTransform3("translateX(0rem)");
                                setTransform2("translateX(0rem)");
                                setScaleRight(0.9);
                                setScaleMid(1.1);
                            }, 500);
                        } else setIndex(index + 1);
                    }}
                >
                    {">"}
                </h1>
            </div>
        </div>
    );
};
export default Interests;
