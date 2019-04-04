import React from 'react';

export const programs = {
  tanachstudy: {
    mainColor: '#111111',
    secondaryColor: '#222222',
    tertiaryColor: '#333333',
    complementaryColor: '#444444',
    logo: '/assets/images/logos/tanachstudy.png',
    linkPrefix: 'tanach-study',
  },
  mishnastudy: {
    mainColor: '#111111',
    secondaryColor: '#222222',
    tertiaryColor: '#333333',
    complementaryColor: '#444444',
    logo: '/assets/images/logos/mishnastudy.png',
    linkPrefix: 'mishna-study',
  },
  haftarastudy: {
    mainColor: '#111111',
    secondaryColor: '#222222',
    tertiaryColor: '#333333',
    complementaryColor: '#444444',
    logo: '/assets/images/logos/mishnastudy.png',
    linkPrefix: 'haftara-study',
  },
};

export const ProgramContext = React.createContext(programs.tanachstudy);
