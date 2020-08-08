import React from "react";
import { Badge } from 'antd';
import './experience.css';


export const ExperienceCard = (props) => {


    return (
        <div className={'experience-card'}>
            <div className={'experience-header'}>
            <div className={'experience-title'}>{props.title}</div>
            <Badge className={'experience-length'} count={props.experienceLength} style={{backgroundColor:'white', color:'black', marginRight:'10px', marginTop:'2px'}}/>
            </div>
           <SkillsBadges skills={props.skills}/>
           <div className={'experience-description'}>{props.description}</div>
        </div>
    )
}

const SkillsBadges = (props)=>{
    return (
          <div className={'experience-skills'} >
            {props.skills.map(function(skill){
                return <Badge count={ skill } style={{backgroundColor:'white', color:'black', marginRight:'10px'}}/>;
            })}
          </div>
    )
}