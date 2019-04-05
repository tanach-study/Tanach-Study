import React from 'react';

export const programs = {
  tanachstudy: {
    mainColor: '#009FC1',
    secondaryColor: '#E5F3F7',
    tertiaryColor: '#039BE5',
    complementaryColor: '#FFB023',
    logo: 'https://cdn.tanachstudy.com/assets/images/logo.png',
    linkPrefix: 'tanach-study',
  },
  mishnastudy: {
    mainColor: '#950010',
    secondaryColor: '#F2E1E2',
    tertiaryColor: '#D33447',
    complementaryColor: '#2AAD5F',
    logo: 'https://cdn.tanachstudy.com/assets/images/mishna-study-logo.png',
    linkPrefix: 'mishna-study',
  },
};

export const ProgramContext = React.createContext(programs.tanachstudy);
