import React, { useState, useRef } from 'react';
import { image } from './image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
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
        <div onClick={handleClick} className="navbarButton">
          <div>
            <IconMenu statut={isOpen} />
          </div>
        </div>
        <nav data-open={isOpen} className="navbarReduct">
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

function IconMenu({ statut }) {
  console.log(statut);
  if (statut === false) {
    return (
      <svg class="iconMenu" width="36" height="36" viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="48"
          d="M88 152h336M88 256h336M88 360h336"
        />
      </svg>
    );
  } else {
    return (
      <svg width="32" height="32" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
        />
      </svg>
    );
  }
}
