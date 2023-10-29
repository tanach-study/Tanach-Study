import React, { Component } from 'react';
import Text from './Text.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import Spinner from '../Spinner/Spinner.jsx';

import log from '../../../lib/logger.js';

class Mishna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'heb',
      haveText: false,
      text: {},
    };
    this.selectLanguage = this._selectLanguage.bind(this);
  }

  componentDidMount() {
    const { seder } = this.props;
    const fileName = `${seder.replace(' ', '_')}.json`;

    fetch(`https://cdn.tanachstudy.com/assets/mishna/${fileName}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveText: true,
          text: data,
        });
      })
      .catch(err => log.error(err));
  }

  componentWillReceiveProps(newProps) {
    const { selectedPart: oldSelected } = this.state;
    const { selectedPart: newSelected } = newProps;
    if (newSelected !== oldSelected) {
      this.setState({
        selectedPart: newSelected,
      });
    }
  }

  _selectLanguage(lang) {
    this.setState({
      show: lang,
    });
  }

  render() {
    const { haveText } = this.state;
    if (haveText) {
      const { masechet, perek } = this.props;
      const { text, show } = this.state;

      const masechetText = text[masechet] || {};
      const { hebrew: hebrewText, english: englishText } = masechetText || {};

      return (
        <div>
          <LanguageSelector clickHandler={this.selectLanguage} />
          <div className='row'>
            <div className='card'>
              <div className='card-content'>
                <Text
                  hebrew={hebrewText}
                  english={englishText}
                  show={show}
                  perek={perek}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='row center'>
        <div className='col l12 m12 s12'>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default Mishna;
