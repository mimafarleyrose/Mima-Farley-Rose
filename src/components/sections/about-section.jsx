import React from "react";
import './sections.css'
import Photo from '../../IMG_4967.jpg'

const aboutMeText = 'I am highly motivated, confident and keen to develop in a technical environment. After working in two fast-growth tech companies, I caught the engineering bug. I taught myself to code through a mixture of online courses, personal projects and a course with Code First Girls  and as a result I have secured an internship in a software engineering team working on video interactivity. This has allowed me to hone my technical skills and gain practical experience of agile development and working in a busy tech team, shipping new features frequently.  I am keen to grow as a developer and so I am looking for  new learning challenges in my next role'


export const AboutSection = (props) => {

    return (
        <div className={'about-me-section'}>
            <div className={'about-section'}>
                <div className={`about-me-title`}>About Me</div>
                <div id={"about-photo"}>
            <a
                href={'https://www.linkedin.com/in/mima-farley-rose-878351161/'}
                target={'_blank'}
                rel="noopener noreferrer"
            >
                <img src={Photo} alt={'jemima farley-rose'} className={`about-me-photo__${props.theme?'light':'dark'}`}/>
            </a>
            </div>
            <div className={'about-me-description'}>
                <div className={`about-me-text`}>{aboutMeText}</div>
            </div>
            </div>
        </div>
    );
};