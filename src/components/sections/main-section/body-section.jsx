import React from "react";
import '../experience-card.css';
import {AboutSection} from '../about-section/about-section'
import {WorkSection} from '../work-section/work-section'
import {ExperienceSection} from '../experience-section/experience-section'

export const BodySection = (props) => {

return (
    <div className={'page-section'}>
        <AboutSection theme={props.theme}/>
        <ExperienceSection theme={props.theme}/>
        <WorkSection theme={props.theme}/>
    </div>)

}