import React, { Component } from 'react';

import AboutLayout from '../../layouts/about.jsx';
import YerushalmiComponent from '../../components/About/Yerushalmi/Yerushalmi.jsx';

class Yerushalmi extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AboutLayout>
        <YerushalmiComponent />
      </AboutLayout>
    );
  }
}

export default Yerushalmi;
