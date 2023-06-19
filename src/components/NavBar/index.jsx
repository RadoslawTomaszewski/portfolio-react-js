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
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t } = useTranslation();

  const navbarList = [
    {
      to: "",
      text: "Home",
    },
    {
      to: "education",
      text: "education",
    },
    {
      to: "experience",
      text: "experience",
    },
    {
      to: "projects",
      text: "projects",
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
    <div className="flex w-auto flex-row items-center justify-between bg-black lg:flex-col">
      <div className="absolute right-0 top-0 m-1">
        <LanguageSelector setLang={setLang} />
      </div>
      <img
        className="m-1 mt-5 hidden max-w-[90%] lg:block "
        src={avatar}
        alt="me"
      />
      <ul className="flex w-full flex-col lg:py-5">
        {navbarList.map(({ to, text }) => (
          <NavbarItem key={to} to={to} text={t(text)} />
        ))}
      </ul>
      <div className="hidden justify-center gap-4 p-1 text-4xl text-white lg:flex">
        <FontAwesomeIcon className="hover:text-github" icon={faGithub} />
        <FontAwesomeIcon className="hover:text-linkedin" icon={faLinkedin} />
        <FontAwesomeIcon className="hover:text-fb" icon={faFacebook} />
      </div>
      <div className="hiddenInfo"></div>
    </div>
  );
}
