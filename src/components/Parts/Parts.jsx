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
          <div className="col l4">
            <div className="card">
              <div className="card-title center">
                Nevi'im Rishonim
                <Link to="/sefarim/yehoshua"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yehoshua</div></div></Link>
                <Link to="/sefarim/shofetim"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shofetim</div></div></Link>
                <Link to="/sefarim/shemuel1"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shemuel 1</div></div></Link>
                <Link to="/sefarim/shemuel2"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shemuel 2</div></div></Link>
                <Link to="/sefarim/melachim1"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Melachim 1</div></div></Link>
                <Link to="/sefarim/melachim2"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Melachim 2</div></div></Link>
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card">
              <div className="card-title center">
                Nevi'im Aharonim
                <Link to="/sefarim/yeshayahu"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yeshayahu</div></div></Link>
                <Link to="/sefarim/yirmiyahu"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yirmiyahu</div></div></Link>
                <Link to="/sefarim/yehezkel"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yehezkel</div></div></Link>
                <Link to="/sefarim/hoshea"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Hoshea</div></div></Link>
                <Link to="/sefarim/yoel"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yoel</div></div></Link>
                <Link to="/sefarim/amos"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Amos</div></div></Link>
                <Link to="/sefarim/ovadiah"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ovadiah</div></div></Link>
                <Link to="/sefarim/yonah"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Yonah</div></div></Link>
                <Link to="/sefarim/michah"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Michah</div></div></Link>
                <Link to="/sefarim/nahum"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Nahum</div></div></Link>
                <Link to="/sefarim/habakuk"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Habakuk</div></div></Link>
                <Link to="/sefarim/sephania"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Sephania</div></div></Link>
                <Link to="/sefarim/hagai"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Hagai</div></div></Link>
                <Link to="/sefarim/zecharia"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Zecharia</div></div></Link>
                <Link to="/sefarim/malachi"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Malachi</div></div></Link>
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card">
              <div className="card-title center">
                Ketuvim
                <Link to="/sefarim/divrehayamim1"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Divre Hayamim 1</div></div></Link>
                <Link to="/sefarim/divrehayamim2"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Divre Hayamim 2</div></div></Link>
                <Link to="/sefarim/tehillim"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Tehillim</div></div></Link>
                <Link to="/sefarim/mishle"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Mishle</div></div></Link>
                <Link to="/sefarim/iyov"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Iyov</div></div></Link>
                <Link to="/sefarim/shirhashirim"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Shir Hashirim</div></div></Link>
                <Link to="/sefarim/ruth"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ruth</div></div></Link>
                <Link to="/sefarim/eicha"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Eicha</div></div></Link>
                <Link to="/sefarim/kohelet"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Kohelet</div></div></Link>
                <Link to="/sefarim/esther"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Esther</div></div></Link>
                <Link to="/sefarim/daniel"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Daniel</div></div></Link>
                <Link to="/sefarim/ezra"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Ezra</div></div></Link>
                <Link to="/sefarim/nehemya"><div className="card red lighten-2 btn waves-effect hoverable"><div className="valign">Sefer Nehemya</div></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
