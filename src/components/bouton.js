import React from 'react';
import {Link} from 'react-router-dom';

export const SavoirPlus = ({ href }) => {
  return (
    <Link href={href}>
      <button> Savoir plus </button>
    </Link>
  );
};
