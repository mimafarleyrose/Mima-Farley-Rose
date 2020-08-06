import React, { useEffect, useState } from "react";
import "./App.css";
import { WebsiteHeader } from "./components/header";
import { BodySection } from "./components/body";
// import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [lightBackground, setLightBackground] = useState(true);
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
      <BodySection />
    </div>
  );
}

export default App;
