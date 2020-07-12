import React from 'react';

import BookList from '../components/Yerushalmi/BookList/BookList.jsx';

import data from '../components/Yerushalmi/yerushalmi.json';

import Layout from '../layouts/main.jsx';

function Yerushalmi(props) {
  return (
    <Layout>
      <div className='container'>
        <div className='section'>
          <div className='center' />
        </div>
        <div className='section'>
          <h3 className='center'>The Yerushalmi Exam</h3>
          <p>The Yerushalmi exam is administered to high school students in Jewish schools across the world. This comprehensive exam covers topics including the Tanach, Mishnah, liturgy, philosophy, poetry, and modern Hebrew literature. </p>
          <p>In conjunction with a few schools, we've compiled a list of the chapters the exam covers, and have presented them below.</p>
          <p>For more information, click <a href='http://makomisrael.org/educational-material/school-camp/hebrew-%E2%80%93-jerusalem-exam/' target='blank'>here.</a></p>
          <BookList
            title='Torah'
            section={data.torah || []}
          />
          <div className='divider' />
          <BookList
            title='Neviim'
            section={data.neviim || []}
          />
          <div className='divider' />
          <BookList
            title='Ketuvim'
            section={data.ketuvim || []}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Yerushalmi;
