
import React from 'react';
import { useLanguage } from './LanguageContext';
import './stylea/header.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
      // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
      navigate('/Search');
};



  const { language, toggleLanguage } = useLanguage();

  const getStyles = () => {
    if (language === 'en') {
      return {
        title: 'Find Your Lawyer Here',
        subtitle: 'Because we care',
        placeholder: 'Search...',
        searchButtonText: 'Search',
        languageClass: 'english-text', // CSS class for English text
        formAlign: 'flex-start', // Align form to the start for English
        formMargin: '10px 8%', // Set margin for English
        headerAlign : 'flex-start',
        formFlex : 'row',
        paddingInputRight : '10px' ,
        paddingInputLeft : '8%' ,
        searchIconPositionLeft : '10px',
      };
    } else if (language === 'ar') {
      return {
        title: 'ابحث عن محاميك هنا',
        subtitle: 'لأننا نهتم',
        placeholder: 'ابحث...',
        searchButtonText: 'ابحث',
        languageClass: 'arabic-text', // CSS class for Arabic text
        formAlign: 'flex-end', // Align form to the end for Arabic
        formMargin: '10px 11%', // Set margin for Arabic
        headerAlign : 'flex-end',
        formFlex : 'row-reverse',
        font: 'Amiri, serif',
        inputText : 'end' ,
        paddingInput : '10px 8% 10px 10px' ,
        searchIconPositionRight : '23px' ,
 };
    }
  };

  const styles = getStyles();

  return (
    <header style={{ backgroundImage: 'url(././media/bgHome1.png)' , alignItems: styles.headerAlign }}>  
      <div className={`headerDiv ${styles.languageClass}`}  style={{ alignItems: styles.formAlign, margin: styles.formMargin }}>
        <h1 style={{fontFamily: styles.font }}>{styles.title}</h1>
        <h2 style={{fontFamily: styles.font }}>{styles.subtitle}</h2>
        {/* Search bar */}
        <div className={`search-bar ${styles.languageClass}`} >
          <form style={{flexDirection: styles.formFlex , justifyContent: styles.inputText}}>
            <img src="../media/search.png" alt="Search" style={{ right: styles.searchIconPositionRight , left: styles.searchIconPositionLeft}} />
            <input name='search' type="text" placeholder={styles.placeholder} style={{padding: styles.paddingInput , textAlign: styles.inputText}} />
            <button type='button' onClick={handleSearchClick}>{styles.searchButtonText}</button>
          </form>
        </div>
      </div>  
      <img src='../media/linear.png' className='linear'/>    
    </header>
  );
};

export default Header;
