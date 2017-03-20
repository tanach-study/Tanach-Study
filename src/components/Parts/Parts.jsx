import React, { Component } from 'react';
import { Link } from 'react-router';

class Parts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: 'Sefer Yehoshua',
          url: '/sefarim/yehoshua',
          disabled: false,
        },
        {
          name: 'Sefer Shofetim',
          url: '/sefarim/shofetim',
          disabled: false,
        },
        {
          name: 'Sefer Shemuel 1',
          url: '/sefarim/shemuel1',
          disabled: false,
        },
        {
          name: 'Sefer Shemuel 2',
          url: '/sefarim/shemuel2',
          disabled: false,
        },
        {
          name: 'Sefer Melachim 1',
          url: '/sefarim/melachim1',
          disabled: false,
        },
        {
          name: 'Sefer Melachim 2',
          url: '/sefarim/melachim2',
          disabled: false,
        },
        {
          name: 'Sefer Yeshayahu',
          url: '/sefarim/yeshayahu',
          disabled: false,
        },
        {
          name: 'Sefer Yirmiyahu',
          url: '/sefarim/yirmiyahu',
          disabled: false,
        },
        {
          name: 'Sefer Yehezkel',
          url: '/sefarim/yehezkel',
          disabled: false,
        },
        {
          name: 'Sefer Hoshea',
          url: '/sefarim/hoshea',
          disabled: false,
        },
        {
          name: 'Sefer Yoel',
          url: '/sefarim/yoel',
          disabled: false,
        },
        {
          name: 'Sefer Amos',
          url: '/sefarim/amos',
          disabled: false,
        },
        {
          name: 'Sefer Ovadia',
          url: '/sefarim/ovadia',
          disabled: false,
        },
        {
          name: 'Sefer Yonah',
          url: '/sefarim/yonah',
          disabled: false,
        },
        {
          name: 'Sefer Michah',
          url: '/sefarim/michah',
          disabled: false,
        },
        {
          name: 'Sefer Nahum',
          url: '/sefarim/nahum',
          disabled: false,
        },
        {
          name: 'Sefer Habakuk',
          url: '/sefarim/habakuk',
          disabled: false,
        },
        {
          name: 'Sefer Sephania',
          url: '/sefarim/sephania',
          disabled: false,
        },
        {
          name: 'Sefer Hagai',
          url: '/sefarim/hagai',
          disabled: false,
        },
        {
          name: 'Sefer Zecharia',
          url: '/sefarim/zecharia',
          disabled: false,
        },
        {
          name: 'Sefer Malachi',
          url: '/sefarim/malachi',
          disabled: false,
        },
        {
          name: 'Sefer Divre Hayamim 1',
          url: '/sefarim/divrehayamim1',
          disabled: false,
        },
        {
          name: 'Sefer Divre Hayamim 2',
          url: '/sefarim/divrehayamim2',
          disabled: false,
        },
        {
          name: 'Sefer Tehillim',
          url: '/sefarim/tehillim',
          disabled: false,
        },
        {
          name: 'Sefer Mishle',
          url: '/sefarim/mishle',
          disabled: false,
        },
        {
          name: 'Sefer Iyov',
          url: '/sefarim/iyov',
          disabled: false,
        },
        {
          name: 'Megillat Shir Hashirim',
          url: '/sefarim/shirhashirim',
          disabled: false,
        },
        {
          name: 'Megillat Ruth',
          url: '/sefarim/ruth',
          disabled: true,
        },
        {
          name: 'Megillat Eicha',
          url: '/sefarim/eicha',
          disabled: true,
        },
        {
          name: 'Megillat Kohelet',
          url: '/sefarim/kohelet',
          disabled: true,
        },
        {
          name: 'Megillat Esther',
          url: '/sefarim/esther',
          disabled: true,
        },
        {
          name: 'Sefer Daniel',
          url: '/sefarim/daniel',
          disabled: true,
        },
        {
          name: 'Sefer Ezra',
          url: '/sefarim/ezra',
          disabled: true,
        },
        {
          name: 'Sefer Nehemya',
          url: '/sefarim/nehemya',
          disabled: true,
        },
      ],
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const mapped = this.state.books.map((book, i) => {
      let classAdd = '';
      const diff = this.state.books.length - i;
      if (diff < 3 && diff > 0) {
        if (this.state.books.length % 3 == 1 && i == this.state.books.length - 1) {
          classAdd = i % 2 == 0 ? 'offset-l4 offset-m3' : 'offset-l4';
        } else if (this.state.books.length % 3 == 2 && i == this.state.books.length - 2) {
          classAdd = i % 2 == 0 ? 'offset-l2 offset-m3' : 'offset-l2';
        }
      }
      let jsx = null;

      if (book.disabled) {
        jsx = (
          <div className={`col s12 m6 l4 ${classAdd}`} key={i}>
            <div className="card tsblue btn waves-effect full-width disabled">
              <div className="col-content">{book.name}</div>
            </div>
          </div>
        );
      } else {
        jsx = (
          <Link to={book.url} className={`col s12 m6 l4 ${classAdd}`} key={i}>
            <div className="card tsblue btn waves-effect hoverable full-width">
              <div className="col-content">{book.name}</div>
            </div>
          </Link>
        );
      }
      return jsx;
    });
    return (
      <div className="container">
          <div className="section">
            <div className="row center">
              <h4>Sefarim</h4>
              <div className="center center-align light">
                {mapped}
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

/*
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

                */
