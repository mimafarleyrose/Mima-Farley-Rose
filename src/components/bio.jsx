import React, { useEffect, useState } from "react";

const AboutMeText = ({ textToType, delay }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setText(textToType);
    }, delay);
  });
  return <div>{text}</div>;
};

export const AboutMe = () => {
  return (
    <div className={"navigation"}>
      <div className={"circle-wrapper"}>
        <li className={"navigation-links"}>About</li>
      </div>
      <div className={"circle-wrapper"}>
        <li className={"navigation-links"}>Experience</li>
      </div>
      <div className={"circle-wrapper"}>
        <li className={"navigation-links"}>Work</li>
      </div>
      <div className={"circle-wrapper"}>
        <li className={"navigation-links"}>Contact</li>
      </div>
      <div className={"circle-wrapper"}>
        <li className={"navigation-links"}>CV</li>
      </div>
    </div>
  );
};
