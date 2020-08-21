import React,{useEffect,useState} from "react";
import './body.css'
import {BackgroundButton} from "./backgroundButton";
import {CvButton} from "./sections/cv-button";
import { Link } from "react-scroll";


export const NavigationBar = (props) => {
const [className, setClassName]=useState()

    useEffect(()=>{
        const theme = (props.theme === true) ? 'light':'dark';
    setClassName(`navigation-button__${theme}`)
    },[props]);

  return (
  <div   className={`navigation__${props.theme?'light':'dark'}`}>
      <Link className={`navigation-underline__${props.theme?'light':'dark'}`} to={"about-section"}><button className={className} >About</button></Link>
          <Link className={`navigation-underline__${props.theme?'light':'dark'}`} to={"experience-section"}><button className={className} >Experience</button></Link>
          <Link className={`navigation-underline__${props.theme?'light':'dark'}`} to={"work-section"}><button className={className} >Work</button></Link>
      <CvButton theme={props.theme}/>
      <BackgroundButton
          propsOnClick={() => props.propsOnClick()}
          lightTheme={props.lightTheme}
          className={"theme-toggle"}
      />
  </div>

  );
};
