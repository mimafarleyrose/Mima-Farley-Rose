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
        <button className={className} onClick={()=>props.onClick('about')}>About</button>
          <button className={className} onClick={()=>props.onClick('experience')} >Experience</button>
          <button className={className} onClick={()=>props.onClick('work')}>Work</button>
          <button className={className} onClick={()=>props.onClick('contact')}>Contact</button>
          <button className={className} onClick={()=>props.onClick('cv')}>CV</button>
    </div>
  );
};
