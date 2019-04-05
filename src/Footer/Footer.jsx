import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.css';

function Footer(props) {
  const { program } = props || {};
  const { linkPrefix } = program || '';
  let bgColorClass = 'tsblue';
  switch (linkPrefix) {
    case 'mishna-study':
      bgColorClass = 'msred';
      break;
    case 'haftara-study':
      bgColorClass = 'hsorange';
      break;
    case 'parasha-study':
      bgColorClass = 'psgreen';
      break;
    default:
      bgColorClass = 'tsblue';
      break;
  }
  return (
    <footer className={bgColorClass}>
      <div className={`container ${styles['footer-container']}`}>
        <div className={`valign-wrapper row ${styles['footer-wrapper']}`}>
          <div className='col l6 m6 s6 left-align valign'>
            <span className='white-text'>Created by </span>
            <a
              className='black-text text-lighten-3'
              href='https://www.linkedin.com/in/joeypinhas/'
              target='blank'
            >
              Joey Pinhas
            </a>
          </div>
          <div className='col l6 m6 s6 right-align valign'>
            <Link to='/signup' className={styles['social-icons']}>
              <img
                src='https://cdn.tanachstudy.com/assets/icons/003-envelope.svg'
                alt='Email Icon'
              />
            </Link>
            <a
              href='https://www.facebook.com/tanachstudy'
              className={styles['social-icons']}
              target='blank'
            >
              <img
                src='https://cdn.tanachstudy.com/assets/icons/037-facebook-logo.svg'
                alt='FaceBook Icon'
              />
            </a>
            <a
              href='https://itunes.apple.com/us/podcast/tanach-study/id930200652'
              className={styles['social-icons']}
              target='blank'
            >
              <img
                src='https://cdn.tanachstudy.com/assets/icons/007-podcast-big-logo.svg'
                alt='Podcasts Icon'
              />
            </a>
            <a
              href='https://www.instagram.com/tanach_study'
              className={styles['social-icons']}
              target='blank'
            >
              <img
                src='https://cdn.tanachstudy.com/assets/icons/020-instagram-1.svg'
                alt='Instagram Icon'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/feed'
              className={styles['social-icons']}
              target='blank'
            >
              <img
                src='https://cdn.tanachstudy.com/assets/icons/036-youtube-logo.svg'
                alt='YouTube Icon'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
