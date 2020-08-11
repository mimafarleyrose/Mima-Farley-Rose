import React, { useEffect, useState } from "react";
import "./App.css";
import { WebsiteHeader } from "./components/header";
import { BodySection } from "./components/pages/body-section";
import { NavigationBar } from "./components/bio";
import { FooterSection } from "./components/sections/footer";


function App() {
  const [lightBackground, setLightBackground] = useState(true);
  const [selectedPage, setSelectedPage] = useState('');

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
      <div className={"home-page"} >
        <NavigationBar theme={lightBackground} onClick={(pageName)=>{setSelectedPage(pageName); console.log(pageName)}} propsOnClick={() => toggleBackgroundColor()}/>
        <WebsiteHeader

        lightTheme={lightBackground}
      />
      </div>
        <BodySection page={selectedPage} theme={lightBackground} />
        <FooterSection theme={lightBackground} />
    </div>
  );
}

export default App;
