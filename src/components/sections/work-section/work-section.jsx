import React from "react";
import PreviousWork from '../../pages/previous-work.png';
import './work-section.css';
import '../sections.css';

export const WorkSection = (props) => {

    return (
        <div className={'work-section'}>
            <div className={'work-section-title'}>{'What I\'ve been building'}</div>
        <WorkSectionCard
            title={'Ravenous'}
            link={'https://sad-joliot-448237.netlify.app/'}
            image={PreviousWork}
            description={'Web app built with React using the\n' +
            'google apis'}
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