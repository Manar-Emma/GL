import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LawyersList from './LawyerList';



const SearchPage = () =>  {
    
const lawyersData = [
    {
      name: 'Salim Hamdane',
      image: '../media/lawyer.jpg',
      languages: ['Arabic' , 'French', 'English'],
      rating: 4.5,
      wilaya: 'Algiers',
      specialty: 'Criminal law',
      years : 5,
      phone : '021154867'
    },
    {
      name: 'Salim Hammou',
      image: '../media/lawyer5.jpg',
      languages: ['French', 'English'],
      rating: 3,
      wilaya: 'Oran',
      specialty: 'Family law',
      years : 12,
      phone : '021154867'
    },
    {
      name: 'Salim Laskri',
      image: '../media/lawyers3.jpg',
      languages: [ 'French', 'English'],
      rating: 2,
      wilaya: 'Annaba',
      specialty: 'Family law',
      years : 30,
      phone : '021154867'
    },
    {
      name: 'Salim Boumendjel',
      image: '../media/lawyer6.jpg',
      languages: [ 'French', 'English'],
      rating: 2,
      wilaya: 'Bejaia',
      specialty: 'Family law',
      years : 16,
      phone : '021154867'
    },
    {
      name: 'Salim Ameur',
      image: '../media/lawyer7.jpg',
      languages: [ 'French', 'English'],
      rating: 3,
      wilaya: 'Bejaia',
      specialty: 'Criminal law',
      years : 18,
      phone : '025254867'
    },
    {
      name: 'Salim Lalem',
      image: '../media/lawyer8.jpg',
      languages: [ 'Arabic', 'English'],
      rating: 4,
      wilaya: 'Beskra',
      specialty: 'Internaional law',
      years : 16,
      phone : '0214554867'
    },
    {
      name: 'Salim Kaddouche',
      image: '../media/lawyer4.jpg',
      languages: [ 'French', 'English'],
      rating: 3.5,
      wilaya: 'Tindouf',
      specialty: 'Environmental law',
      years : 25,
      phone : '021154867'
    },
    {
      name: 'Salim Kari',
      image: '../media/lawyer3.jpg',
      languages: [ 'Arabic', 'French'],
      rating: 2.5,
      wilaya: 'Ain Defla',
      specialty: 'Business law',
      years : 35,
      phone : '021154867'
    },
    
  
  ];  
  
  
  return (
    <div className='searchContent'>
        <NavBar />

        {/* Pass the lawyersData array to the LawyersList component */}
        <LawyersList lawyersData={lawyersData} />
        <Footer/>

    </div>   
  );
}
export default SearchPage;