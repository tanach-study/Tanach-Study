import React from 'react';

import { footerLink, footerWrapper, socialIcons } from './Footer.module.css';

function Footer(props) {
  return (
    <footer>
      <div className='container'>
        <div className={`row ${footerWrapper}`}>
          <div className={`col l5 m5 s12 white-text`}>
            <h5>Tanach Study</h5>
            <p>Our mission is to create a platform for all to easily study the entire canon of the foundational texts of Yahadut in a comprehensible manner.</p>
          </div>
          <div className='col l5 m5 s12'><div /></div>
          <div className={`col l2 m2 s12`}>
            <div className='row'>
              <a href='https://www.facebook.com/tanachstudy' className={socialIcons} target='blank'>
                <img src='https://cdn.tanachstudy.com/assets/icons/037-facebook-logo.svg' alt='FaceBook Icon' />
              </a>
              <a href='https://www.instagram.com/tanachstudy' className={socialIcons} target='blank'>
                <img src='https://cdn.tanachstudy.com/assets/icons/020-instagram-1.svg' alt='Instagram Icon' />
              </a>
              <a href='https://www.youtube.com/channel/UC0b52aDc7f8VTtxT-Ktfb6Q/feed' className={socialIcons} target='blank'>
                <img src='https://cdn.tanachstudy.com/assets/icons/036-youtube-logo.svg' alt='YouTube Icon' />
              </a>
            </div>
            <div className='row'>
              <div className='col l12 m12 s12'>
                <a className={footerLink} href='https://tanachstudy.com/contact'>Contact</a>
              </div>
              <div className='col l12 m12 s12'>
                <a className={footerLink} href='https://tanachstudy.com/about'>About</a>
              </div>
              <div className='col l12 m12 s12'>
                <a className={footerLink} href='https://tanachstudy.com/events'>Events</a>
              </div>
              <div className='col l12 m12 s12'>
                <a className={footerLink} href='https://tanachstudy.com/donate'>Donate</a>
              </div>
              <div className='col l12 m12 s12'>
                <a className={footerLink} href='https://tanachstudy.com/signup'>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
