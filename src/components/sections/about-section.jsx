import React from "react";
import './sections.css'
import Photo from '../IMG_4967.jpg'

const aboutMeText ='I am a software engineer based in London. I have worked on a ' +
    'variety of different projects in my current role encompassing front-end and back-end skills.'+
    ' My passion is coding and I love learning about new technologies and better ways of working.'

const educationText = 'After studying Politics at Queen Mary University of London, I worked in several different software companies,' +
    ' I found myself drawn to the work of the engineering teams, this prompted me to start a coding course in web-development with ' +
    'Code First Girls that taught me the basics of front-end engineering, I then spend 6 months practising and working on personal ' +
    'projects in my free time in order to hone my skills with more advanced technologies. In March 2020 I began an Internship with ' +
    'Boclips, an Ed-tech company in their engineering team, during this I have been lucky enough to be exposed to many different ' +
    'technologies and projects which has widened my understanding and increased my confidence working in a engineering team and ' +
    'on my own.'

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