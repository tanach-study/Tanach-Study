import React, { Component } from 'react';
import data from '../../../lib/data-1.json';

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const vids = data.items.map((item, i) => {
      let id = item.id.videoId;
      if (id) {
        return (
          <div>
            <a href={`https://www.youtube.com/watch?v=${id}`}>
              <img src={item.snippet.thumbnails.medium.url} alt=""/>
              <h5>{item.snippet.title}</h5>
            </a>
          </div>
        )
      }
    })
    return (
      <div>
        {vids}
      </div>
    )
  }
}

export default Videos;
