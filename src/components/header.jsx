import React, { useEffect, useState } from "react";
import "./header.css";
import { BackgroundButton } from "./backgroundButton";

const TypingComponent = ({ textToType, delay }) => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < textToType.length) {
            setTimeout(() => {
                setText(text + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, delay);
        }
    }, [currentIndex]);
    return <div className={"title"}>{text}</div>;
};
const DelayComponent = ({ textToType, delay }) => {
    const [text, setText] = useState("");
    useEffect(() => {
            setTimeout(() => {
                setText(textToType);
            }, delay);
        }, []);
    return <div className={"header-description"}>{text}</div>;
};

export const WebsiteHeader = () => {
    const title = "I like building things.";
    const description  = "I am a software engineer based in London, I specialise in frontend engineering"

    return (
        <div className={"header"}>
            <div className={"header-hi"} >{'Hi, my name is '}</div>
            <div className={"header-name"}>{'Jemima Farley-Rose'}</div>
            <TypingComponent textToType={title} delay={100} loop={false} />{" "}
            <DelayComponent textToType={description} delay={3100} loop={false} />{" "}
        </div>
    );
};