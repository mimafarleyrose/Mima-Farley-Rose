import React, { useEffect, useState } from "react";
import "./App.css";
import { WebsiteHeader } from "./components/header";
import { BodySection } from "./components/pages/body-section";
import {ExperienceCard} from './components/pages/experience';
import { NavigationBar } from "./components/bio";


function App() {
  const [lightBackground, setLightBackground] = useState(true);
  const [selectedPage, setSelectedPage] = useState('about');

  const toggleBackgroundColor = () => {
    setLightBackground(!lightBackground);
  };

  useEffect(() => {
    lightBackground !== true
      ? (document.body.className = "dark-theme")
      : (document.body.className = "light-theme");
  }, [lightBackground]);


  return (
    <div className={"container"}>
      <WebsiteHeader
        propsOnClick={() => toggleBackgroundColor()}
        lightTheme={lightBackground}
      />
       <NavigationBar theme={lightBackground} onClick={(pageName)=>{setSelectedPage(pageName); console.log(pageName)}}/>
        <BodySection page={selectedPage} theme={lightBackground} />
    </div>
  );
}

export default App;
