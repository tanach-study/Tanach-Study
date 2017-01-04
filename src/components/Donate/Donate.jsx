import React, { Component } from 'react';

class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styling = {
      maxWidth: '500px',
      minWidth: '310px',
    }

    return (
      <div className="container">
        <div className="center">
          <script src="https://donorbox.org/widget.js" type="text/javascript"></script><iframe src="https://donorbox.org/embed/support-tanach-study" height="685px" width="100%" style={styling} seamless="seamless" id="dbox-form-embed" name="donorbox" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    );
  }
}

export default Donate;
