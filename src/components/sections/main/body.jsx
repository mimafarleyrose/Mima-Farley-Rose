import React from "react";
import '../experience/experience.css';
import {AboutSection} from '../about/about'
import {WorkSection} from '../work/work'
import {ExperienceSection} from '../experience/experience'

export const BodySection = (props) => {

return (
    <div className={'page-section'}>
        <AboutSection theme={props.theme}/>
        <ExperienceSection theme={props.theme}/>
        <WorkSection theme={props.theme}/>
    </div>)

}