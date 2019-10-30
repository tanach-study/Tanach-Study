import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/main.jsx';

function WhatsApp(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <div className='container'>
        <div className='section center'>
          <h2>Join Our WhatsApp Groups</h2>
          <p>
            Tanach Study is pleased to announce the launch of a new method of transmistting Torah
            around the world! We will be sending out our recordings of&nbsp;
            <Link to='/parasha-plus-study'>Parasha Study Plus</Link>
            &nbsp;to these groups, in addition to our&nbsp;
            <Link to='/signup'>daily emails,</Link>&nbsp;and&nbsp;
            <a href='https://podcasts.apple.com/us/podcast/parasha-study-plus/id1483716454'>daily podcasts.</a>
          </p>
          <p>
            Due to the overwhelming demand for these chats, we will continue to create new ones as
            each chat fills up. Please click the links below to join the appropriate chat.
          </p>
          <p>
            Please note that the content will be the same across all chats; joining one chat is
            sufficient. The other chats are so that we can accommodate more people than the 256
            person per chat limit.
          </p>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parasha Study Plus #1</td>
                <td><a href='https://chat.whatsapp.com/DNRCogZgnA95WWNvOE0T5G'>Click to join</a></td>
              </tr>
              <tr>
                <td>Parasha Study Plus #2</td>
                <td><a href='https://chat.whatsapp.com/GQfHyUEoQyaLuD2TWgXuSk'>Click to join</a></td>
              </tr>
              <tr>
                <td>Parasha Study Plus #3</td>
                <td><a href='https://chat.whatsapp.com/FuIZjgtBUY9AewWDh3TzAD'>Click to join</a></td>
              </tr>
              <tr>
                <td>Parasha Study Plus #4</td>
                <td><a href='/'>Click to join</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default WhatsApp;
