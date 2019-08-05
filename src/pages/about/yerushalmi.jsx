import React from 'react';

import AboutLayout from '../../layouts/about.jsx';
import YerushalmiComponent from '../../components/About/Yerushalmi/Yerushalmi.jsx';

function Yerushalmi(props) {
  return (
    <AboutLayout>
      <YerushalmiComponent />
    </AboutLayout>
  );
}

export default Yerushalmi;
