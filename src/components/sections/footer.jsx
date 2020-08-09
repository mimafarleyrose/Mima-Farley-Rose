import React,{useState} from "react";
import './sections.css'

export const FooterSection = (props) => {
    const [showEmail, setShowEmail]=useState(false)



    return (
        <div className={`footer-section__${props.theme?'light':'dark'}`}>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}><a className={`get-in-touch-link__${props.theme?'light':'dark'}`}>{'Github'}</a></div>
<div className={`get-in-touch__${props.theme?'light':'dark'}`}><a className={`get-in-touch-link__${props.theme?'light':'dark'}`}>{'Linkedin'}</a></div>
            <div className={`email-me__${props.theme?'light':'dark'}`} onClick={()=>setShowEmail(!showEmail)}>{showEmail?'mimafarleyrose1997@gmail.com':'Email'}</div>
        </div>
    );
};