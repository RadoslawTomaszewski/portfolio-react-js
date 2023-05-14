import "./App.css";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Education from "./components/Education";
import Hobby from "./components/Hobby";
import Experiences from "./components/Experiences";

import { useState } from "react";

export default function Container() {
  const [activeTab, setActiveTab] = useState("home");

  let content;
  if (activeTab === "home") {
    content = <Home />;
  } else if (activeTab === "education") {
    content = <Education />;
  } else if (activeTab === "experiences") {
    content = <Experiences />;
  } else if (activeTab === "projects") {
    content = <Projects />;
  } else if (activeTab === "hobby") {
    content = <Hobby />;
  }

  return (
    <>
      <div className="portfolio .font-sans">
        <div className="leftSide">
          <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="rightSide">{content}</div>
      </div>
    </>
  );
}
