import '../App.css';
import React from 'react';

function Experiences() {
  return (
  <>
    <div className='tile'>
      <div className='content'>
        <h4>2021 - </h4>
        <h2>Centrum Edukacji i.know</h2>
        <h4>Otwock</h4>
        <h6>Korepetytor z matematyki</h6>
        <h6>przygotowanie do matury z zakresu rozszerzonego</h6>
        <h6>przygotowanie do matury z zakresu podstawowego</h6>
        <h6>przygotowanie do egzaminu ósmoklasisty</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/iknow.png`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
    <div className='tile'>
      <div className='content'>
        <h4>2018 - 2020</h4>
        <h2>TCC Telecomunication Customer Care </h2>
        <h4>Warszawa</h4>
        <h6>Konsultant Back Office</h6>
        <h6>sprzedaż abonamentów i obsługa klienta</h6>
        <h6>moderacja Social Media</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/cp_plus.jpeg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
  </>);
}

export default Experiences;