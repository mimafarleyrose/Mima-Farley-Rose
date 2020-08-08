import React from "react";
import { Badge } from 'antd';
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
        {props.page === 'about' && <AboutSection/>}
        {props.page === 'experience' && <ExperienceSection/>}
        {props.page === 'cv' && <CvSection/>}
        {props.page === 'contact' && <ContactSection/>}
    </div>)

}