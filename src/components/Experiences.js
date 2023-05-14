import "../App.css";
import React from "react";
import WideBlock from "./WideBlock";

function Experiences() {
  return (
    <>
    <WideBlock
      years = "2021 - "
      name = "Centrum Edukacji i.know"
      city = "Otwock"
      title = "Korepetytor z matematyki"
      title2=""
      features1 = "przygotowanie do matury z zakresu rozszerzonego"
      features2 = "przygotowanie do matury z zakresu podstawowego"
      features3 = "przygotowanie do egzaminu ósmoklasisty"
      image = "iknow.png"
      imageAlt = "logo i.know"
    />
      <WideBlock
      years = "2018 - 2020"
      name = "TCC Telecomunication Customer Care"
      city = "Warszawa"
      title = "Konsultant Back Office"
      title2=""
      features1 = "sprzedaż abonamentów telekomunikacyjnych"
      features2 = "posprzedażowa obsługa klienta"
      features3 = "moderacja Social Media"
      image = "cp_plus.jpeg"
      imageAlt = "logo cyfrowy polsat"
    />
    </>
  );
}

export default Experiences;
