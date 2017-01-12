import React, { Component } from 'react';

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

  inputUpdate(field, value, index) {
    const videos = this.state.videos;
    videos[index][field] = value;
    this.updateState('videos', videos);
  }

  updateDB(index) {
    const currVideo = this.state.videos[index];
    fetch(`/api/videos/${currVideo.youtube_id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'PUT',
      body: JSON.stringify(currVideo),
    })
    .then(r => r.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    fetch('/api/videos')
    .then(r => r.json())
    .then(videos => this.updateState('videos', videos))
    .catch(err => console.log(err));
  }

  render() {
    const videoCards = this.state.videos.map((video, i) => {
      return (
        <div className="card" key={i}>
          <div className="card-content">
            <h4>{video.youtube_title}</h4>
            <div className="row">
              <label className="col l2 m2 s2" htmlFor="sponsor">Sponsored By:</label>
              <input
                className="col l10 m10 s10"
                type="text"
                name="sponsor"
                value={video.sponsor || ''}
                onChange={(e) => this.inputUpdate('sponsor', e.target.value, i)}
              />
            </div>
            <div className="row">
              <label className="col l2 m2 s2" htmlFor="title">Class Title:</label>
              <input
                className="col l10 m10 s10"
                type="text"
                name="title"
                value={video.class_title || ''}
                onChange={(e) => this.inputUpdate('class_title', e.target.value, i)}
              />
            </div>
            <div className="row">
              <label className="col l2 m2 s2" htmlFor="teacher">Lecturer's Name:</label>
              <input
                className="col l10 m10 s10"
                type="text"
                name="teacher"
                value={video.speaker || ''}
                onChange={(e) => this.inputUpdate('speaker', e.target.value, i)}
              />
            </div>
            <a className="waves-effect waves-light btn" onClick={() => this.updateDB(i)}>Save This Video to Database</a>
          </div>
        </div>
      );
    })
    return (
      <div className="container">
        <div className="section">
          <div className="center">
            <div className="card">
              <div className="card-content">
                <h1>Admin Video Panel</h1>
                <p>This page is designed to allow an admin to update our video database with the proper info. Note that every video you see here is in our database, and no others.</p>
                <p>Each video in the database will have the title of the video as it appears on youtube, followed by three input fields to set/change the values of the corresponding fields in our database.</p>
              </div>
            </div>
            {videoCards}
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
