import React from "react";
import "./header.css";
import { AboutMe } from "./bio";
import "./body.css";

export const BodySection = () => {
  return (
    <div className={'body'}>
      <AboutMe />
    </div>
  );
};
