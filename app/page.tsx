import React from 'react';
import Services from "./components/service/Services"
import BestService from './components/bestService/BestService';

const page = () => {
  return (
    <div>
      <Services/>
      <BestService/>
    </div>
  );
}

export default page;
