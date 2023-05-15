import '../../App.css';
import React from 'react';
import WideBlock from '../WideBlock';

export const Education = () => {
  return (
    <>
      <WideBlock
        years='2020 - 2024'
        name='Szkoła Główna Gospodarstwa Wiejskiego'
        city='Warszawa'
        title='Wydział Zastosowań Informatyki i Matematyki'
        title2='Kierunek: Informatyka (inż.)'
        features1=''
        features2='Specjalizacja: Inżynieria Systemów Informacyjnych'
        features3='dwukrotnie w rankingu 3% studentów z najwyższą średnią na roku'
        image='sggw.jpg'
        imageAlt='budynek SGGW'
      />
      <WideBlock
        years='2015 - 2018'
        name='Liceum Ogólnokształcące nr 1 im. K. I. Gałczyńskiego'
        city='Otwock'
        title='profil: matematyka / fizyka / informatyka'
        title2=''
        features1='100% na egzaminie maturalnym z matematyki (część pisemna)'
        features2='100% na egzaminie maturalnym z języka polskiego (część ustna)'
        features3=' '
        image='lo.jpg'
        imageAlt='budynek liceum'
      />
      <WideBlock
        years='2005 - 2015'
        name='Publiczna Szkoła Podstawowa i Gimnazjum'
        city='Sobienie-Jeziory'
        title=' '
        title2=''
        features1='czterokrotny mistrz powiatu otwockiego w biegu na 100 m'
        features2=' '
        features3=' '
        image='sobienie.jpg'
        imageAlt='budynek szkoły w Sobieniach-Jeziorach'
      />
    </>
  );
};

export default Education;
