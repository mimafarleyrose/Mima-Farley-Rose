import React from "react";
import PreviousWork from '../pages/previous-work.png'

export const WorkSection = () => {

    return (
        <div className={'work-section'}>
            <div className={'work-section-title'}>{'Some Things I\'ve Built'}</div>
            <a rel="noopener noreferrer" target={"_blank"} href={"https://sad-joliot-448237.netlify.app/"}>
                <img src={PreviousWork} alt={"previous-work"} className={"work-examples"}/>
            </a>
        </div>
    );
};