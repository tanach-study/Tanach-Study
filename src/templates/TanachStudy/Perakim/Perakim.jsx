import React, { Component } from 'react';

import Layout from '../../../layouts/main.jsx';
import NachPerek from './NachPerek.jsx';
import TorahPerek from './TorahPerek.jsx';

class Perakim extends Component {
  constructor(props) {
    super(props);
    const { pageContext } = props;
    const { data } = pageContext;
    this.state = {
      response: data || [],
    };
  }

  getQueryParams() {
    const { location } = this.props;
    const queryString = location.search;
    if (queryString) {
      const pairs = queryString.slice(1).split('&');
      const params = {};
      for (let i = 0; i < pairs.length; i++) {
        const kv = pairs[i].split('=');
        params[kv[0]] = kv[1];
      }
      return params;
    }
    return {};
  }

  render() {
    const { response } = this.state;
    const { pageContext, location } = this.props;
    const { sefer, perek } = pageContext;

    const base = response[0] || {};
    const { division: tanachPart } = base;

    if (tanachPart === 'torah') {
      const qParams = this.getQueryParams();
      return (
        <Layout location={location}>
          <TorahPerek
            parts={response}
            sefer={sefer}
            perek={perek}
            queryParams={qParams}
          />
        </Layout>
      );
    }
    return (
      <Layout location={location}>
        <NachPerek
          response={response}
          sefer={sefer}
          perek={perek}
        />
      </Layout>
    );
  }
}

export default Perakim;
