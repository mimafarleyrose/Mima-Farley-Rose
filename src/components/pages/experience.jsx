import React from "react";
import { Badge } from 'antd';
import './experience.css';


export const ExperienceCard = (props) => {


    return (
        <div className={`experience-card__${props.theme?'light':'dark'}`}>
            { !props.theme?(<Badge className={'experience-length'} count={props.experienceLength} style={{ width: '70px',backgroundColor:'white', color:'black'}}/>):
                (<Badge className={'experience-length'} count={props.experienceLength} style={{width: '70px', borderColor:'black',backgroundColor:'black', color:'white'}}/>)
            }
            <div className={'experience-header'}>
                <a href={props.href} target={'_blank'}><div className={`experience-title__${props.theme?'light':'dark'} `}>{`${props.title} - `}</div></a>
                <div className={`experience-role__${props.theme?'light':'dark'} `}>{`${props.role}`}</div>
            </div>
            <div className={`experience-body`}>
           <SkillsBadges skills={props.skills} theme={props.theme}/>
           <div className={'experience-description'}>{props.description}</div>
            </div>
        </div>
    )
}

const SkillsBadges = (props)=>{
    return (
          <div className={'experience-skills'} >
            {props.skills.map(function(skill){
                if(props.theme){
                    return    <Badge count={ skill } style={{backgroundColor:'black', color:'white', marginRight:'10px', borderColor:'black'}}/>;
                }
                return <Badge count={ skill } style={{backgroundColor:'white', color:'black', marginRight:'10px'}}/>

            })}
          </div>
    )
}