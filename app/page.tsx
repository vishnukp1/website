import React from 'react';
import Services from "./components/service/Services"
import BestService from './components/bestService/BestService';
import Home from './components/Home/Home';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Destination from './components/Destinations/Destination';

const page = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <BestService/>
      <Destination/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default page;
