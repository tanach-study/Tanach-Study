import React, { Component } from 'react';
import data from '../../../lib/data-1.json';

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
  }

  render() {
    const vids = data.items.map((item, i) => {
      let id = item.id.videoId;
      if (id) {
        return (
          <div className="col l6">
            <div className="card small center-align" key={i}>
              <a href={`https://www.youtube.com/watch?v=${id}`}>
                <div className="card-content black-text">
                  <img className="" src={item.snippet.thumbnails.medium.url} alt=""/>
                  <h5>{item.snippet.title}</h5>
                </div>
              </a>
            </div>
          </div>
        )
      }
    })
    return (
      <div className="container">
        <div className="row">
          {vids}
        </div>
      </div>
    )
  }
}

export default Videos;
