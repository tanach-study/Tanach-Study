import React, { Component } from 'react';

class Parts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l4">
            <div className="card small">
              <div className="card-title center">
                Nevi'im Rishonim
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card small">
              <div className="card-title center">
                Nevi'im Aharonim
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="card small">
              <div className="card-title center">
                Ketuvim
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parts;
