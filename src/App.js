import React from 'react';

import NavBar from './components/navbar';
import Footer from './components/footer';
import { Banniere } from './components/banniere';
import APITEST from '../api/api';

import './style/style.scss';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banniere />
      <APITEST />
      <Footer />
    </div>
  );
}
