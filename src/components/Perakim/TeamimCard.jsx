import React, { Component } from 'react';
import TeamimItem from './TeamimItem.jsx';

import styles from './TeamimItem.css';

class ReaderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
    };
    this.handleClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(index) {
    this.setState({
      selectedItem: index,
    });
  }

  render() {
    const { teamim } = this.props;
    if (teamim) {
      if (Array.isArray(teamim)) {
        if (teamim.length > 1) {
          const teamimTabs = teamim.map((item, i) => (
            <li className='tab' key={item.url}>
              <div
                onClick={() => this.handleClick(i)}
                className={`${this.state.selectedItem === i ? styles['active-reader'] : ''} tsblue-text`}
              >
                {item.reader_title} {item.reader_lname}
              </div>
            </li>
          ));
          return (
            <div className='col l6 m12 s12'>
              <div className='card'>
                <div className='card-content'>
                  <TeamimItem
                    teamim={teamim[this.state.selectedItem]}
                  />
                </div>
                <div className='card-tabs'>
                  <ul className={`tabs tabs-fixed-width ${styles['tabs-container']}`}>
                    {teamimTabs}
                  </ul>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className='col l6 m12 s12'>
            <div className='card'>
              <div className='card-content'>
                <TeamimItem teamim={teamim[0]} />
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className='col l6 m12 s12'>
          <div className='card'>
            <div className='card-content'>
              <TeamimItem teamim={teamim} />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ReaderCard;
