import React from "react";
import './sections.css'
import {
    GithubOutlined,
    LinkedinOutlined,
    MediumOutlined,
} from '@ant-design/icons';

export const FooterSection = (props) => {

    return (
        <div className={`footer-section__${props.theme?'light':'dark'}`}>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}>
    <a
        className={`get-in-touch-link__${props.theme?'light':'dark'}`}
        href={'https://github.com/mimafarleyrose'}
        target={'_blank'}
        rel={"noopener noreferrer"}
    >
    <GithubOutlined style={{fontSize:25, color: '#ffeb3a'}} />
</a></div>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}>
    <a
        className={`get-in-touch-link__${props.theme?'light':'dark'}`}
        href={'https://www.linkedin.com/in/mima-farley-rose-878351161/'}
        target={'_blank'}
        rel={"noopener noreferrer"}
    >
    <LinkedinOutlined style={{fontSize:25,  color: '#ffeb3a'}} />
</a></div>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}>
    <a
        className={`get-in-touch-link__${props.theme?'light':'dark'}`}
        href={'https://www.linkedin.com/in/mima-farley-rose-878351161/'}
        target={'_blank'}
        rel={"noopener noreferrer"}
    >
    <MediumOutlined style={{fontSize:25, color: '#ffeb3a'}} />
    </a>
</div>
        </div>
    );
};