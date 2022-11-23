import React from 'react';
import { image } from './image';

export default function NavBar() {
  return (
    <div class="navBar">
      <div className="container">
        <div className="logo">
          <div>
            <img src={image} width={'100%'} alt="salafey logo" />
          </div>
        </div>
        <div className="menu">
          <div className="menuElement">Objectif</div>
          <div className="menuElement">A Propos de nous</div>
          <div className="menuElement">Evenements</div>
          <div className="menuElement">Actualites</div>
          <div className="menuElement">Contactez-nous</div>
        </div>
        <div className="navbarButton">
          <div>
            <svg class="iconMenu" width="32" height="32" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="48"
                d="M88 152h336M88 256h336M88 360h336"
              />
            </svg>
          </div>
        </div>
        <nav className="navbarReduct">
          <div className="navbarVertical">
            <div className="menuElement">Objectif</div>
            <div className="menuElement">A Propos de nous</div>
            <div className="menuElement">Evenements</div>
            <div className="menuElement">Actualites</div>
            <div className="menuElement">Contactez-nous</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
