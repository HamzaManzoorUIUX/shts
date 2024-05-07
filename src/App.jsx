import React from 'react';
import TopNavBar from './components/TopNavBar';
import MainNavbar from './components/MainNavbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <TopNavBar/>
      <MainNavbar/>
      <Header/>
      <AboutUs/>
      <Services/>
    </div>
  );
};

export default App;