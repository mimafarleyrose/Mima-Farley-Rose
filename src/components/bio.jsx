import React,{useEffect,useState} from "react";
import './body.css'


export const NavigationBar = (props) => {
const [className, setClassName]=useState()

    useEffect(()=>{
        const theme = (props.theme === true) ? 'light':'dark';
    setClassName(`navigation-button__${theme}`)
    },[props]);

  return (
  <div   className={'navigation'}>
      <a className={`navigation-underline__${props.theme?'light':'dark'}`}><button className={className} onClick={()=>props.onClick('about')}>About</button></a>
          <a className={`navigation-underline__${props.theme?'light':'dark'}`}><button className={className} onClick={()=>props.onClick('experience')} >Experience</button></a>
          <a className={`navigation-underline__${props.theme?'light':'dark'}`}><button className={className} onClick={()=>props.onClick('work')}>Work</button></a>
  </div>
  );
};
