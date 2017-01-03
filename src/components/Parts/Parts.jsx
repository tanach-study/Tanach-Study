import React, { Component } from 'react';
import { Link } from 'react-router';

class Parts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container section">
        <div className="row">
          <h3>Nevi'im Rishonim</h3>
          <div className="col l12 m12 s12">
            <div className="card">
                <Link to="/sefarim/yehoshua">Sefer Yehoshua</Link>
            </div>
            <div className="card">
                <Link to="/sefarim/shofetim">Sefer Shofetim</Link>
            </div>
            <div className="card">
                <Link to="/sefarim/shemuel1">Sefer Shemuel 1</Link>
            </div>
            <div className="card">
                <Link to="/sefarim/shemuel2">Sefer Shemuel 2</Link>
            </div>
            <div className="card">
                <Link to="/sefarim/melachim1">Sefer Melachim 1</Link>
            </div>
            <div className="card">
                <Link to="/sefarim/melachim2">Sefer Melachim 2</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>Nevi'im Aharonim</h3>
          <div className="col l12 m12 s12">
            <div className="card">
              <Link to="/sefarim/yeshayahu">Sefer Yeshayahu</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/yirmiyahu">Sefer Yirmiyahu</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/yehezkel">Sefer Yehezkel</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/hoshea">Sefer Hoshea</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/yoel">Sefer Yoel</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/amos">Sefer Amos</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/ovadiah">Sefer Ovadiah</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/yonah">Sefer Yonah</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/michah">Sefer Michah</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/nahum">Sefer Nahum</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/habakuk">Sefer Habakuk</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/sephania">Sefer Sephania</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/hagai">Sefer Hagai</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/zecharia">Sefer Zecharia</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/malachi">Sefer Malachi</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l12 m12 s12">
            <h3>Ketuvim</h3>
            <div className="card">
              <Link to="/sefarim/divrehayamim1">Sefer Divre Hayamim 1</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/divrehayamim2">Sefer Divre Hayamim 2</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/tehillim">Sefer Tehillim</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/mishle">Sefer Mishle</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/iyov">Sefer Iyov</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/shirhashirim">Sefer Shir Hashirim</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/ruth">Sefer Ruth</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/eicha">Sefer Eicha</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/kohelet">Sefer Kohelet</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/esther">Sefer Esther</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/daniel">Sefer Daniel</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/ezra">Sefer Ezra</Link>
            </div>
            <div className="card">
              <Link to="/sefarim/nehemya">Sefer Nehemya</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
