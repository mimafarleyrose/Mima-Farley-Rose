import React from "react";
import PreviousWork from './previous-work.png';
import './work.css';
import '../sections.css';

export const WorkSection = (props) => {

    return (
        <div className={'work-section'}>
            <div className={'work-section-title'}>{'What I\'ve Been Building Recently...'}</div>
        <WorkSectionCard
            title={'Eat Out'}
            link={'https://unruffled-curran-fc5edd.netlify.app/'}
            image={PreviousWork}
            description={'Web app built with React using ' +
            'APIs and React Hooks'}
            theme={props.theme}
        />
        </div>
    );
};

export const WorkSectionCard = (props) => {

    return (
            <div className={`project-card__${props.theme? 'light': 'dark'}`}>
                <a className={`project-card-contents__${props.theme? 'light': 'dark'}`}
                   rel="noopener noreferrer"
                   target={"_blank"}
                   href={props.link}
                >
                    <img
                        src={props.image}
                        alt={"previous-work"}
                        className={'previous-work-image'}/>

                <div className={'project-title'}>{props.title}</div>
                <div>{props.description}</div></a>
            </div>
    );
};