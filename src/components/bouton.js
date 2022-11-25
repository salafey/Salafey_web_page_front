import React from 'react';
import {Link} from 'react-router-dom';

export const SavoirPlus = ({ href }) => {
  return (
    <div className = 'Bouton_1'>
      <Link href={href}>
        <button> Savoir plus </button>
      </Link>
    </div>
  );
};
