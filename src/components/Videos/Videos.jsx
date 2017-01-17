import React, { Component } from 'react';
// import data from '../../../lib/data-1.json';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    init(jQuery);
    fetch('/api/videos')
    .then(r => r.json())
    .then(data => this.updateState('videos', data))
    .catch(err => console.log(err));
  }

  title(video) {
    if (video.class_title && video.speaker) {
      return (
        <div>
          <h5>{video.class_title}</h5>
          <h6><i>By {video.speaker}</i></h6>
        </div>
      );
    } else {
      return (
        <div>
          <h5>{video.youtube_title}</h5>
        </div>
      );
    }
  }

  sponsor(video) {
    if (video.sponsor) {
      return (
        <h6>Sponsored by {video.sponsor}</h6>
      );
    }
  }

  render() {
    const vids = this.state.videos.map((video, i) => {
      return (
        <div className="col l4 m6 s12" key={i}>
          <div className="card small center-align">
            <a href={`https://www.youtube.com/watch?v=${video.youtube_id}`}>
              <div className="card-content black-text">
                <img className="responsive-img" src={video.image_url} alt=""/>
                {this.title(video)}
                {this.sponsor(video)}
              </div>
            </a>
          </div>
        </div>
      )
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
