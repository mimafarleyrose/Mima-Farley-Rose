import React, { useEffect, useState } from "react";
import "./App.css";
import { WebsiteHeader } from "./components/sections/main/header";
import { BodySection } from "./components/sections/main/body";
import { NavigationBar } from "./components/sections/navigation-bar/navigation";
import { FooterSection } from "./components/sections/footer";


function App() {
  const [lightBackground, setLightBackground] = useState(false);
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
        <NavigationBar theme={lightBackground} onClick={(pageName)=>{setSelectedPage(pageName)}} propsOnClick={() => toggleBackgroundColor()}/>
        <WebsiteHeader/>
      </div>
        <BodySection page={selectedPage} theme={lightBackground} />
        <FooterSection theme={lightBackground} />
    </div>
  );
}

export default App;
