import React from "react";
import './sections.css'
import CV from './cv.pdf'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


export const CvSection = (props) => {

    return (
        <div className = "cv-section">
            <a href = {CV} target = "_blank"> <Button type="primary" rel="noopener noreferrer" shape="circle" icon={<DownloadOutlined />} className={`download-cv__${props.theme?'light':'dark'}`} >CV</Button></a>
        </div>    );
};