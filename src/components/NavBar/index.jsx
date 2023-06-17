import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { NavbarItem } from "./NavbarItem";
import avatar from "../../assets/img/me.jpg";
import i18next from "i18next";
import { LanguageSelector } from "./LangSelector";

export function NavBar() {
  const navbarList = [
    {
      to: "",
      text: "Home",
    },
    {
      to: "education",
      text: "Education",
    },
    {
      to: "experience",
      text: "Experience",
    },
    {
      to: "projects",
      text: "Projects",
    },
    {
      to: "mvc",
      text: "MVC",
    },
  ];

  const setLang = (data) => {
    console.log(data);
    i18next.changeLanguage(data);
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      i18next.changeLanguage(lang);
    }
  }, []);

  return (
    <div className="flex h-screen min-w-[16%] flex-col items-center justify-between bg-black">
      <div className="absolute right-0 top-0 m-1">
        <LanguageSelector setLang={setLang} />
      </div>
      <img className="m-1 mt-5 max-w-[90%]" src={avatar} alt="me" />
      <ul className="py-5">
        {navbarList.map(({ to, text }) => (
          <NavbarItem key={to} to={to} text={text} />
        ))}
      </ul>
      <div className="flex justify-center gap-4 text-h1 text-white">
        <FontAwesomeIcon className="hover:text-github" icon={faGithub} />
        <FontAwesomeIcon className="hover:text-linkedin" icon={faLinkedin} />
        <FontAwesomeIcon className="hover:text-fb" icon={faFacebook} />
      </div>
      <div className="hiddenInfo"></div>
    </div>
  );
}
