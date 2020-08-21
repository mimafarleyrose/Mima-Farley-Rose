import React from "react";
import './about-section.css'
import Photo from './IMG_4967.jpg'

const aboutMeText ='I\'ve worked on a variety of projects in my current role touching both front-end and back-end technologies. My passion is coding and I love learning about new technologies and better ways of working.'

const educationText = 'After studying Political Science at Queen Mary University of London, I worked in several software ' +
    'companies. I found myself drawn to the work of the engineering teams and this prompted me to take a coding' +
    ' course in web development with Code First Girls. I learned the basics of front-end engineering and then' +
    ' spent 6 months honing my skills with more advanced technologies by working on personal projects in my free ' +
    'time. In early 2020 I began a software engineering internship with Boclips, an Ed-Tech company. This has' +
    ' been a great experience and I\'ve been lucky to work as a full team member using a range of technologies ' +
    'and working on stories and bugs both with other members of the team and on my own.'

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
                <div className={`education-text`}>{educationText}</div>
            </div>
            </div>
        </div>
    );
};