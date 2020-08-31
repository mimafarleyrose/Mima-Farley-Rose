import React, {useState} from "react";
import './sections.css'
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
} from '@ant-design/icons';
import "../../App.css";

export const FooterSection = (props) => {
const [emailVisible, setEmailVisible]=useState(false)
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
        href={'https://www.linkedin.com/in/jemima-farley-rose-878351161/'}
        target={'_blank'}
        rel={"noopener noreferrer"}
    >
    <LinkedinOutlined style={{fontSize:25,  color: '#ffeb3a'}} />
</a></div>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}>{
    emailVisible?
        <div onClick={()=>setEmailVisible(!emailVisible)}>jemimafarleyrose@gmail.com</div>:
        (<div onClick={()=>setEmailVisible(!emailVisible)}>
            <MailOutlined style={{fontSize:25,  color: '#ffeb3a'}}/>
        </div>)
}
</div>
        </div>
    );
};