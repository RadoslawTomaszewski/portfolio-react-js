import '../App.css';
import React from 'react';

function Education() {
  return (
  <>
    <div className='tile'>
      <div className='content'>
        <h4>2020 - 2024</h4>
        <h2>Szkoła Główna Gospodarstwa Wiejskiego</h2>
        <h4>Warszawa</h4>
        <h6>Wydział Zastosowań Informatyki i Matematyki</h6>
        <h6>Kierunek: Informatyka</h6>
        <h6>Specjalizacja: Inżynieria Systemów Informatycznych</h6>
        <h6>dwukrotnie w rankingu 3% studentów z najwyższą średnią na roku</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/sggw.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>

    <div className='tile'>
      <div className='content'>
        <h4>2015 - 2018</h4>
        <h2>Liceum Ogólnokształcące nr 1 im. K. I. Gałczyńskiego</h2>
        <h4>Otwock</h4>
        <h6>profil matematyka / fizyka / informatyka</h6>
        <h6>100% na egzaminie maturalnym z matematyki (część pisemna)<br/>100% na egzaminie maturalnym z języka polskiego (część ustna)</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/lo.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>

    <div className='tile'>
      <div className='content'>
        <h4>2005 - 2015</h4>
        <h2>Publiczna Szkoła Podstawowa i Gimnazjum w Sobieniach-Jeziorach</h2>
        <h6>czterokrotny mistrz powiatu otwockiego w biegu na 100 m</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/sobienie.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
  </>
  );
}

export default Education;