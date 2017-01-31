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
          name: 'Ovadia',
          url: '/sefarim/ovadia',
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

  componentDidMount() {
    init(jQuery);
  }

  render() {
    return (
      <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h4>Sefarim</h4>
                <div className="center-align light">
                    <Link to="/sefarim/yehoshua"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yehoshua</div></div></Link>
                    <Link to="/sefarim/shofetim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Shofetim</div></div></Link>
                    <Link to="/sefarim/shemuel1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Shemuel 1</div></div></Link>
                    <Link to="/sefarim/shemuel2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Shemuel 2</div></div></Link>
                    <Link to="/sefarim/melachim1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Melachim 1</div></div></Link>
                    <Link to="/sefarim/melachim2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Melachim 2</div></div></Link>
                    <Link to="/sefarim/yeshayahu"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yeshayahu</div></div></Link>
                    <Link to="/sefarim/yirmiyahu"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yirmiyahu</div></div></Link>
                    <Link to="/sefarim/yehezkel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yehezkel</div></div></Link>
                    <Link to="/sefarim/hoshea"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Hoshea</div></div></Link>
                    <Link to="/sefarim/yoel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yoel</div></div></Link>
                    <Link to="/sefarim/amos"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Amos</div></div></Link>
                    <Link to="/sefarim/ovadia"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Ovadia</div></div></Link>
                    <Link to="/sefarim/yonah"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Yonah</div></div></Link>
                    <Link to="/sefarim/michah"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Michah</div></div></Link>
                    <Link to="/sefarim/nahum"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Nahum</div></div></Link>
                    <Link to="/sefarim/habakuk"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Habakuk</div></div></Link>
                    <Link to="/sefarim/sephania"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Sephania</div></div></Link>
                    <Link to="/sefarim/hagai"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Hagai</div></div></Link>
                    <Link to="/sefarim/zecharia"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Zecharia</div></div></Link>
                    <Link to="/sefarim/malachi"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Malachi</div></div></Link>
                    <Link to="/sefarim/divrehayamim1"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Divre Hayamim 1</div></div></Link>
                    <Link to="/sefarim/divrehayamim2"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Divre Hayamim 2</div></div></Link>
                    <Link to="/sefarim/tehillim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Tehillim</div></div></Link>
                    <Link to="/sefarim/mishle"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Mishle</div></div></Link>
                    <Link to="/sefarim/iyov"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Iyov</div></div></Link>
                    <Link to="/sefarim/shirhashirim"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Shir Hashirim</div></div></Link>
                    <Link to="/sefarim/ruth"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Ruth</div></div></Link>
                    <Link to="/sefarim/eicha"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Eicha</div></div></Link>
                    <Link to="/sefarim/kohelet"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Kohelet</div></div></Link>
                    <Link to="/sefarim/esther"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Esther</div></div></Link>
                    <Link to="/sefarim/daniel"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Daniel</div></div></Link>
                    <Link to="/sefarim/ezra"><div className="col s12 m6 l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Ezra</div></div></Link>
                    <Link to="/sefarim/nehemya"><div className="col s12 m6 l4 offset-l4 card teal lighten-2 btn waves-effect hoverable"><div className="valign col-content">Sefer Nehemya</div></div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  // render() {
  //   return(
  //     <div className="container section">
  //       <div className="row">
  //         <h3>Nevi'im Rishonim</h3>
  //         <PartsList books={this.state.nr} />
  //       </div>
  //       <div className="row">
  //         <h3>Nevi'im Aharonim</h3>
  //         <PartsList books={this.state.na} />
  //       </div>
  //       <div className="row">
  //         <h3>Ketuvim</h3>
  //         <PartsList books={this.state.kt} />
  //       </div>
  //     </div>
  //   );
  // }
}

export default Parts;
