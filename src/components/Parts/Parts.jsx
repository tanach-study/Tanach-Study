import React, { Component } from 'react';
import { Link } from 'react-router';
import PartsList from './PartsList/PartsList.jsx';

class Parts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: [
        {
          name: 'Yehoshua',
          url: '/sefarim/yehoshua',
        },
        {
          name: 'Shofetim',
          url: '/sefarim/shofetim',
        },
        {
          name: 'Shemuel 1',
          url: '/sefarim/shemuel1',
        },
        {
          name: 'Shemuel 2',
          url: '/sefarim/shemuel2',
        },
        {
          name: 'Melachim 1',
          url: '/sefarim/melachim1',
        },
        {
          name: 'Melachim 2',
          url: '/sefarim/melachim2',
        },
      ],
      na: [
        {
          name: 'Yeshayahu',
          url: '/sefarim/yeshayahu',
        },
        {
          name: 'Yirmiyahu',
          url: '/sefarim/yirmiyahu',
        },
        {
          name: 'Yehezkel',
          url: '/sefarim/yehezkel',
        },
        {
          name: 'Hoshea',
          url: '/sefarim/hoshea',
        },
        {
          name: 'Yoel',
          url: '/sefarim/yoel',
        },
        {
          name: 'Amos',
          url: '/sefarim/amos',
        },
        {
          name: 'Ovadiah',
          url: '/sefarim/ovadiah',
        },
        {
          name: 'Yonah',
          url: '/sefarim/yonah',
        },
        {
          name: 'Michah',
          url: '/sefarim/michah',
        },
        {
          name: 'Nahum',
          url: '/sefarim/nahum',
        },
        {
          name: 'Habakuk',
          url: '/sefarim/habakuk',
        },
        {
          name: 'Sephania',
          url: '/sefarim/sephania',
        },
        {
          name: 'Hagai',
          url: '/sefarim/hagai',
        },
        {
          name: 'Zecharia',
          url: '/sefarim/zecharia',
        },
        {
          name: 'Malachi',
          url: '/sefarim/malachi',
        },
      ],
      kt: [
        {
          name: 'Divre Hayamim 1',
          url: '/sefarim/divrehayamim1',
        },
        {
          name: 'Divre Hayamim 2',
          url: '/sefarim/divrehayamim2',
        },
        {
          name: 'Tehillim',
          url: '/sefarim/tehillim',
        },
        {
          name: 'Mishle',
          url: '/sefarim/mishle',
        },
        {
          name: 'Iyov',
          url: '/sefarim/iyov',
        },
        {
          name: 'Shir Hashirim',
          url: '/sefarim/shirhashirim',
        },
        {
          name: 'Ruth',
          url: '/sefarim/ruth',
        },
        {
          name: 'Eicha',
          url: '/sefarim/eicha',
        },
        {
          name: 'Kohelet',
          url: '/sefarim/kohelet',
        },
        {
          name: 'Esther',
          url: '/sefarim/esther',
        },
        {
          name: 'Daniel',
          url: '/sefarim/daniel',
        },
        {
          name: 'Ezra',
          url: '/sefarim/ezra',
        },
        {
          name: 'Nehemya',
          url: '/sefarim/nehemya',
        },
      ],
    }
  }

  render() {
    return(
      <div className="container section">
        <div className="row">
          <h3>Nevi'im Rishonim</h3>
          <PartsList books={this.state.nr} />
        </div>
        <div className="row">
          <h3>Nevi'im Aharonim</h3>
          <PartsList books={this.state.na} />
        </div>
        <div className="row">
          <h3>Ketuvim</h3>
          <PartsList books={this.state.kt} />
        </div>
      </div>
    );
  }
}

export default Parts;
