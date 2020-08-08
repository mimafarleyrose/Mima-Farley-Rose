import React, { useEffect, useState } from "react";
import "./header.css";
import { BackgroundButton } from "./backgroundButton";

const TypingComponent = ({ textToType, delay, loop }) => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < textToType.length) {
            setTimeout(() => {
                setText(text + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, delay);
        } else if (loop) {
            // reset the text and the index
            setText("");
            setCurrentIndex(0);
        }
    }, [currentIndex]);
    return <div className={"title"}>{text}</div>;
};

export const WebsiteHeader = (props) => {
    const title = "Mima Farley Rose - Software Developer";

    return (
        <div className={"header"}>
            <TypingComponent textToType={title} delay={100} loop={false} />{" "}
            <BackgroundButton
                propsOnClick={() => props.propsOnClick()}
                lightTheme={props.lightTheme}
                className={"theme-toggle"}
            />
        </div>
    );
};