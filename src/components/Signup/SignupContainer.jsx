import React from 'react';
import SignupHeader from './SignupHeader.jsx';

function SignupContainer(props) {
  const { showHeader, child } = props;
  return (
    <div className='container'>
      <div className='section center'>
        {showHeader && <SignupHeader />}
        <div className='row'>
          <div className='col l8 m10 s12 offset-l2 offset-m1'>
            <div className='card'>
              <div className='card-content'>
                {child}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupHeader;
