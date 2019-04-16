import React from 'react';

export const programs = {
  tanachstudy: {
    mainColor: '#009FC1',
    secondaryColor: '#E5F3F7',
    tertiaryColor: '#039BE5',
    complementaryColor: '#FFB023',
    logo: 'https://cdn.tanachstudy.com/assets/images/logo.png',
    linkPrefix: 'tanach-study',
    backgroundClass: 'tsblue',
    textClass: 'tsblue-text',
  },
  mishnastudy: {
    mainColor: '#950010',
    secondaryColor: '#F2E1E2',
    tertiaryColor: '#D33447',
    complementaryColor: '#2AAD5F',
    logo: 'https://cdn.tanachstudy.com/assets/images/mishna-study-logo.png',
    linkPrefix: 'mishna-study',
    backgroundClass: 'msred',
    textClass: 'msred-text',
  },
  haftarastudy: {
    mainColor: '#EE5A24',
    secondaryColor: '#FFE6C4',
    tertiaryColor: '#FFA18B',
    complementaryColor: '#AC3019',
    logo: 'https://cdn.tanachstudy.com/assets/images/haftara-study-logo.png',
    linkPrefix: 'haftara-study',
    backgroundClass: 'hsorange',
    textClass: 'hsorange-text',
  },
  parashastudy: {
    mainColor: '#127E36',
    secondaryColor: '#E4F0E5',
    tertiaryColor: '#45AA67',
    complementaryColor: '#AC3019',
    logo: 'https://cdn.tanachstudy.com/assets/images/parasha-study-logo.png',
    linkPrefix: 'parasha-study',
    backgroundClass: 'psgreen',
    textClass: 'psgreen-text',
  },
};

export const ProgramContext = React.createContext(programs.tanachstudy);
