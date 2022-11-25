import React from 'react';
import Titre from './titre';
import { SavoirPlus } from './bouton';

export function Banniere() {
  return (
    <section className="banniere">
      <div className="container">
        <div className="banniereContent">
          <Titre>Salon du Livre africain pour enfants de Yaoundé </Titre>
          <h3>
            Intérésser les jeunes et les enfant sur les oeuvres litteraire du
            cameroun et de l'afrique
          </h3>
          <SavoirPlus />
        </div>
      </div>
    </section>
  );
}
