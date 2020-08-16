import React from "react";
import PreviousWork from '../../pages/previous-work.png';
import './work-section.css';
import '../sections.css';

export const WorkSection = () => {

    return (
        <div className={'work-section'}>
            <div className={'work-section-title'}>{'Some Things I\'ve Built'}</div>
        <WorkSectionCard
            title={'Ravenous'}
            link={'https://sad-joliot-448237.netlify.app/'}
            image={PreviousWork}
            description={'Web app built with React using the\n' +
            'google apis'}
        />
        </div>
    );
};

export const WorkSectionCard = (props) => {

    return (
            <div className={'project-card'}>
                <div className={'project-title'}>{props.title}</div>
                <a rel="noopener noreferrer" target={"_blank"} href={props.link}>
                    <img
                        src={props.image}
                        alt={"previous-work"}
                        className={'previous-work-image'}/>
                </a>
                <div>{props.description}</div>
            </div>
    );
};