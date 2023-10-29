import React, { Component } from 'react';

import Layout from '../../../layouts/main.jsx';
import NachPerek from './NachPerek.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props;
    const { data } = pageContext;
    this.state = {
      response: data || [],
    };
  }

  render() {
    const { response } = this.state;
    const { pageContext, location } = this.props;
    const { sefer, perek, nextPerek, prevPerek } = pageContext || {};

    return (
      <Layout location={location}>
        <NachPerek
          response={response}
          sefer={sefer}
          perek={perek}
          nextPerek={nextPerek}
          prevPerek={prevPerek}
        />
      </Layout>
    );
  }
}

export default Perakim;
