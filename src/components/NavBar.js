import "../App.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function NavBar({ setActiveTab, activeTab }) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="me" />
      <ul>
        <li>
          <div
            className={`nav ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </div>
        </li>
        <li>
          <div
            className={`nav ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </div>
        </li>
        <li>
          <div
            className={`nav ${activeTab === "experiences" ? "active" : ""}`}
            onClick={() => setActiveTab("experiences")}
          >
            Experiences
          </div>
        </li>
        <li>
          <div
            className={`nav ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </div>
        </li>
        <li>
          <div
            className={`nav ${activeTab === "hobby" ? "active" : ""}`}
            onClick={() => setActiveTab("hobby")}
          >
            Hobby
          </div>
        </li>
      </ul>
      <div className="social">
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </div>
      <div className="hiddenInfo"></div>
    </>
  );
}

export default NavBar;
