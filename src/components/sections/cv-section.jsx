import React from "react";
import './sections.css'
import CV from './cv.pdf'
import { DownloadOutlined } from '@ant-design/icons';


export const CvSection = (props) => {

    return (
        <div className = "cv-section">
            <a href = {CV} target = "_blank" rel="noopener noreferrer"> <button type="primary" shape="circle" icon={<DownloadOutlined />} className={`download-cv__${props.theme?'light':'dark'}`} >CV</button></a>
        </div>    );
};