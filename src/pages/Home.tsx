import React from 'react';

import { MainBoard } from '../components/MainBoard/MainBoard';
import { Map } from '../components/Map/Map';
import { Reviews } from '../components/Reviews/Reviews';
import { Footer } from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <MainBoard />
      <Reviews />
      <Map />
      <Footer />
    </>
  )
};

export default Home;