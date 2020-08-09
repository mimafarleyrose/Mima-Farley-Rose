import React from "react";
import './experience.css';
import {AboutSection} from '../sections/about-section'
import {ContactSection} from '../sections/contact-section'
import {CvSection} from '../sections/cv-section'
import {WorkSection} from '../sections/work-section'
import {ExperienceSection} from '../sections/experience-section'

export const BodySection = (props) => {

return (
    <div className={'page-section'}>
        {props.page === 'work' && <WorkSection/>}
        {props.page === 'about' && <AboutSection theme={props.theme}/>}
        {props.page === 'experience' && <ExperienceSection theme={props.theme}/>}
        {props.page === 'cv' && <CvSection/>}
        {/*{props.page === 'contact' && <ContactSection/>}*/}
    </div>)

}