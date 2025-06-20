import React from 'react';
import Home from './components/Home/Home';
import Destination from './components/Destinations/Destination';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

const page = () => {
  return (
    <div>
     <Home></Home>
     <Destination/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default page;
