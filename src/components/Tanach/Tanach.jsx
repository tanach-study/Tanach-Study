import React, { Component } from 'react';
import Nach from './Nach.jsx';
import Torah from './Torah.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import Spinner from '../Spinner/Spinner.jsx';

// import tanach from '../../../public/tanach/tanach.json';

class Tanach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'heb',
      haveTanach: false,
      tanach: {},
    };
    this.selectLanguage = this._selectLanguage.bind(this);
  }

  componentDidMount() {
    fetch(`${TANACH_URL}/tanach.json`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          haveTanach: true,
          tanach: data,
        });
      })
      .catch(err => console.error(err));
  }

  _selectLanguage(lang) {
    this.setState({
      show: lang,
    });
  }

  render() {
    if (this.state.haveTanach) {
      const { sefer, part } = this.props || '';

      const { tanach } = this.state;

      const seferText = tanach[sefer] || {};
      const hebrewText = seferText.hebrew || [];
      const englishText = seferText.english || [];

      const toPass = {};
      let Text;

      if (part === 'torah') {
        Text = Torah;
        toPass.sefer = sefer;
        toPass.parasha = this.props.parasha;
        toPass.startChapter = this.props.startChapter;
        toPass.startVerse = this.props.startVerse;
        toPass.endChapter = this.props.endChapter;
        toPass.endVerse = this.props.endVerse;
      } else {
        Text = Nach;
        toPass.perek = this.props.perek;
      }
      return (
        <div>
          <LanguageSelector clickHandler={this.selectLanguage} />
          <div className='row'>
            <div className='card'>
              <div className='card-content'>
                <Text
                  hebrew={hebrewText}
                  english={englishText}
                  show={this.state.show}
                  {...toPass}
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

export default Tanach;
