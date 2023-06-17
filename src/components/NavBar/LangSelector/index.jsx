import React, { useState } from "react";
import polishflag from "../../../assets/img/polish-flag.png";
import britishflag from "../../../assets/img/british-flag.png";

export const LanguageSelector = (props) => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const renderFlag = (lang) => {
    if (lang === "pl") {
      return <img src={polishflag} className="h-[20px]" alt="Polish Flag" />;
    } else if (lang === "en") {
      return <img src={britishflag} className="h-[20px]" alt="British Flag" />;
    } else {
      return null;
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    props.setLang(selectedLanguage);
  };

  return (
    <div className="z-50 m-2 flex items-center justify-center rounded border-2 border-black bg-green-100 px-2">
      {renderFlag(language)}
      <select
        className="block w-[90%] cursor-pointer appearance-none rounded-lg bg-green-100 p-2 text-sm text-darkgreen after:border-none hover:border-none focus:border-none focus:outline-none focus:ring-0"
        onChange={handleLanguageChange}
        value={language}
      >
        <option key={"pl"} value="pl" className="cursor-pointer">
          Polski
        </option>
        <option key={"en"} value="en" className="cursor-pointer">
          English
        </option>
      </select>
    </div>
  );
};
