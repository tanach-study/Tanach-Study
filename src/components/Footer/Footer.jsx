import React from 'react';
import { Link } from 'gatsby';

import styles from './Footer.module.css';

function CreatedBy() {
  return (
    <React.Fragment>
      <span className='white-text'>Created by </span>
      <a
        className='black-text text-lighten-3'
        href='https://www.linkedin.com/in/joeypinhas/'
        target='blank'
      >
        Joey Pinhas
      </a>
    </React.Fragment>
  );
}

function SocialLinks(props) {
  const { podcast } = props;
  const podcastURL = podcast || 'https://podcasts.apple.com/us/podcast/tanach-study/id930200652';

  return (
    <React.Fragment>
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
        href={podcastURL}
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
    </React.Fragment>
  );
}

function Footer(props) {
  const { program } = props || {};
  const { backgroundClass, podcastURL } = program || {};

  return (
    <footer className={backgroundClass}>
      <div className={`container ${styles['footer-container']}`}>
        <div className={`row ${styles['footer-wrapper']}`}>
          <div className={`col l6 m6 s12 ${styles['created-container']}`}>
            <CreatedBy />
          </div>
          <div className={`col l6 m6 s12 ${styles['links-container']}`}>
            <SocialLinks podcast={podcastURL} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
