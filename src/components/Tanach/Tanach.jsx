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

      if (part === 'torah') {
        const tabs = this.props.partsBreakdown.map(torahPart => <li key={`tab-${torahPart.number}`} className='tab tsblue-text col l2 m2 s2'>Part {torahPart.number}</li>);

        return (
          <div>
            <LanguageSelector clickHandler={this.selectLanguage} />
            <div className='row'>
              <div className='card'>
                <div className='card-content'>
                  <ul className='tabs row'>
                    {tabs}
                  </ul>
                  <Torah
                    hebrew={hebrewText}
                    english={englishText}
                    show={this.state.show}
                    sefer={sefer}
                    parasha={this.props.parasha}
                    partsBreakdown={this.props.partsBreakdown}
                    selectedPart={this.props.selectedPart}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <LanguageSelector clickHandler={this.selectLanguage} />
            <div className='row'>
              <div className='card'>
                <div className='card-content'>
                  <Nach
                    hebrew={hebrewText}
                    english={englishText}
                    show={this.state.show}
                    perek={this.props.perek}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
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
