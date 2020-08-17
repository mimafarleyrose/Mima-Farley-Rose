import React, { useEffect, useState } from "react";
import "./header.css";

const TypingComponent = ({ textToType, delay }) => {
    const [text, setText] = useState("");
    const [titleTwoText, setTitleTwoText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < textToType.length) {
            setTimeout(() => {
              if(  currentIndex > 6 ) {
                  setText(text + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1)}
              else{
                    setTitleTwoText(titleTwoText + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1)
              }
            }, delay);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);
    return (
        <>
            <div className={"title-two"}>{titleTwoText}</div>
            <div className={"title"}>{text}</div>
        </>
    );
};
const DelayComponent = ({ textToType, delay }) => {
    const [text, setText] = useState("");
    useEffect(() => {
            setTimeout(() => {
                setText(textToType);
            }, delay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    return <div className={"header-description"}>{text}</div>;
};

export const WebsiteHeader = () => {
    const title = "I like building things."
    const description  = "I'm a London-based software engineer and I'm a fast learner. I currently " +
        "specialise in front-end engineering using React with Typescript."

    return (
        <div className={"header"}>
            <div className={"header-hi"} >{'Hi. My name is '}</div>
            <div className={"header-name"}>{'Jemima Farley-Rose.'}</div>
            <TypingComponent textToType={title} delay={100} loop={false} />
            <DelayComponent textToType={description} delay={3100} loop={false} />
        </div>
    );
};