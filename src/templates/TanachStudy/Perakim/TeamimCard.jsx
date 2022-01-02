import React, { Component } from 'react';
import TeamimItem from './TeamimItem.jsx';

import { activeReader, tabsContainer } from './TeamimItem.module.css';

import { ProgramContext } from '../../../app-context.js';

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
    const { selectedItem } = this.state;

    if (teamim) {
      if (Array.isArray(teamim)) {
        if (teamim.length > 1) {
          const teamimTabs = teamim.map((item, i) => (
            <ProgramContext.Consumer>
              {theme => (
                <li className='tab' key={item.url}>
                  <div
                    onClick={() => this.handleClick(i)}
                    className={`${selectedItem === i ? activeReader : ''} ${theme.textClass}`}
                  >
                    {item.reader_title} {item.reader_lname}
                  </div>
                </li>
              )}
            </ProgramContext.Consumer>
          ));
          return (
            <div className='col l6 m12 s12'>
              <div className='card'>
                <div className='card-content'>
                  <TeamimItem
                    teamim={teamim[selectedItem]}
                  />
                </div>
                <div className='card-tabs'>
                  <ul className={`tabs tabs-fixed-width ${tabsContainer}`}>
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
