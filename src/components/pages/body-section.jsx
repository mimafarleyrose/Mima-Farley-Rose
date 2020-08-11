import React from "react";
import './experience.css';
import {AboutSection} from '../sections/about-section'
import {WorkSection} from '../sections/work-section'
import {ExperienceSection} from '../sections/experience-section'

export const BodySection = (props) => {

return (
    <div className={'page-section'}>
        <AboutSection theme={props.theme}/>
        <ExperienceSection theme={props.theme}/>
        <WorkSection/>
    </div>)

}